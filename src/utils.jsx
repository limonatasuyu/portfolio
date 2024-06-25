import { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import { Pages } from "./pages/Pages";
import { useThree } from "@react-three/fiber";

const ensureCompatibleAttributes = (geometries) => {
  const allAttributes = {};

  // Collect all unique attribute names and their item sizes
  geometries.forEach((geometry) => {
    Object.keys(geometry.attributes).forEach((attributeName) => {
      if (!allAttributes[attributeName]) {
        allAttributes[attributeName] = {
          itemSize: geometry.attributes[attributeName].itemSize,
          arrayConstructor: geometry.attributes[attributeName].array.constructor,
        };
      }
    });
  });

  // Add missing attributes with default values
  geometries.forEach((geometry) => {
    Object.keys(allAttributes).forEach((attributeName) => {
      if (!geometry.attributes[attributeName]) {
        const { itemSize, arrayConstructor } = allAttributes[attributeName];
        const array = new arrayConstructor(geometry.attributes.position.count * itemSize);
        geometry.setAttribute(attributeName, new THREE.BufferAttribute(array, itemSize));
      }
    });
  });

  return geometries;
};

const collectMeshes = (children) => {
  const meshes = [];
  const stack = children.map((child) => ({ object: child, parentMatrix: new THREE.Matrix4() }));

  while (stack.length > 0) {
    const { object, parentMatrix } = stack.pop();

    if (object.isMesh) {
      const matrix = new THREE.Matrix4().multiplyMatrices(parentMatrix, object.matrixWorld);
      meshes.push({ geometry: object.geometry, material: object.material, matrix });
    }

    if (object.children && object.children.length > 0) {
      for (const child of object.children) {
        stack.push({ object: child, parentMatrix: parentMatrix.clone() });
      }
    }
  }

  return meshes;
};


const validateGeometry = (geometry) => {
  const positionAttribute = geometry.attributes.position;
  if (!positionAttribute) {
    console.error('Geometry has no position attribute:', geometry);
    return false;
  }
  const array = positionAttribute.array;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      console.error('Position attribute contains NaN values:', geometry);
      return false;
    }
  }
  return true;
};

const mergeGeometriesByMaterial = (meshes) => {
  const materialGroups = new Map();

  meshes.forEach(({ geometry, material, matrix }) => {
    if (!sanitizeGeometry(geometry)) {
      return;
    }
    const clonedGeometry = geometry.clone();
    clonedGeometry.applyMatrix4(matrix);

    if (!materialGroups.has(material)) {
      materialGroups.set(material, []);
    }
    materialGroups.get(material).push(clonedGeometry);
  });

  const mergedGeometries = [];
  materialGroups.forEach((geometries, material) => {
    ensureCompatibleAttributes(geometries);
    const mergedGeometry = mergeGeometries(geometries);
    mergedGeometries.push({ material, geometry: mergedGeometry });
  });

  return mergedGeometries;
};

const sanitizeGeometry = (geometry) => {
  const positionAttribute = geometry.attributes.position;

  if (!positionAttribute) {
    console.error('Geometry has no position attribute:', geometry);
    return false;
  }

  const array = positionAttribute.array;
  const itemSize = positionAttribute.itemSize;
  const count = positionAttribute.count;

  // Check for NaN values in position attribute and sanitize if found
  let hasNaN = false;
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < itemSize; j++) {
      const index = i * itemSize + j;
      if (isNaN(array[index])) {
        hasNaN = true;
        array[index] = 0; // Set NaN value to 0
      }
    }
  }

  if (hasNaN) {
    // Update BufferAttribute after sanitizing
    positionAttribute.needsUpdate = true;
  }

  return true;
};


export const MergedMeshes = ({ children, matrixAutoUpdate = false }) => {
  const mergedMeshRef = useRef();
  const { scene } = useThree();

  const mergeMeshes = useCallback(() => {
    // Pass children to collectMeshes instead of scene
    const meshes = collectMeshes(children);
    const mergedGeometries = mergeGeometriesByMaterial(meshes);

    mergedGeometries.forEach(({ material, geometry }) => {
      const mergedMesh = new THREE.Mesh(geometry, material);
      scene.add(mergedMesh);
    });
  }, [children, scene]);

  useEffect(() => {
    mergeMeshes();
  }, [mergeMeshes]);

  return <group matrixAutoUpdate={matrixAutoUpdate} ref={mergedMeshRef}>{children}</group>;
};


export function isPointInRadius(somePoint, radius) {
  //eslint-disable-next-line no-unused-vars
  const [pointX, pointY, pointZ] = somePoint;
  for (const page of Pages) {
    //eslint-disable-next-line no-unused-vars
    const [x, y, z] = page.position;
    const distance = Math.sqrt((pointX - x) ** 2 + (pointZ - z) ** 2);
    if (distance <= radius) {
      return page.name;
    }
  }
  return false;
}
