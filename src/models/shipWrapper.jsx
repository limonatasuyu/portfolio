import { useFrame, useThree } from "@react-three/fiber";
import { Vector3, Quaternion } from "three";
import { useEffect, useState, useRef, useCallback } from "react";
import { useBox } from "@react-three/cannon";
import { usePopupState } from "../contexts/popupContext";
import { useMove } from "../contexts/movingContext";
import ShipModel from "./ship";
import { Pages } from "../pages/Pages";
import { isPointInRadius } from "../utils";

const moveSpeed = 10;
const rotationSpeed = Math.PI * 0.2;

//const cameraOffset = new Vector3(30, 40, -150).multiplyScalar(0.18);
//const cameraOffset = new Vector3(0, 40, -150).multiplyScalar(0.18);

const forwardVector = new Vector3(0, 0, 1);
//const cameraReferencePosition = new Vector3();
const shipQuaternion = new Quaternion();
const offset = new Vector3();
//const initialPosition = [0, 0, 0];

export default function Ship(props) {
  const [cameraOffset, setCameraOffset] = useState(
    new Vector3(30, 40, -150).multiplyScalar(0.18)
  );
  const [cameraReferencePosition, setCameraReferencePosition] = useState([
    -130, 40, 10,
  ]);

  const { speed, setSpeed, moveDirection, setMoveDirection } = useMove();
  const { popupState, setPopupState } = usePopupState();
  const [isPopupOpenLegal, setIsPopupOpenLegal] = useState(true);

  const cameraReference = useRef();
  const currentShipPosition = useRef([0, 0, 0]);

  const { camera } = useThree();

  const [groupRef, groupApi] = useBox(() => ({
    mass: 1,
    position: Pages.find((i) => i.name === "Home").position, //initialPosition,
    type: "Dynamic",
    args: [10, 10, 10],
    onCollide: onCollide,
    ...props,
  }));

  //eslint-disable-next-line react-hooks/exhaustive-deps
  function onScreenResize(event) {
    if (event.target.outerWidth < 900) {
      setCameraOffset(new Vector3(0, 40, -150).multiplyScalar(0.18));
      setCameraReferencePosition([0, 40, 10]);
    } else if (event.target.outerWidth < 1520) {
      setCameraOffset(new Vector3(30, 40, -150).multiplyScalar(0.18));
      setCameraReferencePosition([event.target.outerWidth * -0.09, 40, 10]);
    } else {
      setCameraOffset(new Vector3(30, 40, -150).multiplyScalar(0.18));
      setCameraReferencePosition([-130, 40, 10]);
    }
  }

  function onDestinationReach(pointName) {
    groupApi.velocity.set(0, 0, 0);
    groupApi.angularVelocity.set(0, 0, 0);
    setSpeed(0);
    setIsPopupOpenLegal(false);
    setPopupState({ pageName: pointName, isOpen: true });
  }

  function onCollide() {
    groupApi.velocity.set(0, 0, 0);
    groupApi.angularVelocity.set(0, 0, 0);
    setSpeed(-1);
    setTimeout(() => {
      setSpeed(0);
      groupApi.angularVelocity.set(0, 0, 0);
    }, 100);
  }

  const handleKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "w":
          setSpeed((prev) => (prev < 4 ? prev + 1 : prev));
          break;
        case "a":
          setMoveDirection("left");
          break;
        case "d":
          setMoveDirection("right");
          break;
        case "s":
          setSpeed((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        default:
          break;
      }
    },
    [setSpeed]
  );

  const handleKeyUp = useCallback((event) => {
    if (event.key === "a" || event.key === "d")
      setMoveDirection(() => "forward");
  }, []);

  const setEventListeners = useCallback(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  }, [handleKeyDown, handleKeyUp]);

  const removeEventListeners = useCallback(() => {
    window.removeEventListener("keydown", handleKeyDown);
    //window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyDown /*, handleKeyUp*/]);

  useEffect(
    () => groupApi.position.subscribe((v) => (currentShipPosition.current = v)),
    [groupApi.position]
  );

  useEffect(() => {
    if (!popupState.isOpen) setEventListeners();
    else removeEventListeners();
    return removeEventListeners;
  }, [setEventListeners, removeEventListeners, popupState.isOpen]);

  useEffect(() => {
    if (!groupRef.current || !cameraReference.current) return;

    const forwardDir = forwardVector
      .clone()
      .applyQuaternion(shipQuaternion)
      .multiplyScalar(moveSpeed * speed);
    groupApi.velocity.set(forwardDir.x, forwardDir.y, forwardDir.z);

    const angularVelocityY =
      moveDirection === "right"
        ? -rotationSpeed
        : moveDirection === "left"
          ? rotationSpeed
          : 0;
    groupApi.angularVelocity.set(0, angularVelocityY, 0);
  }, [speed, moveDirection, groupApi, groupRef]);

  useFrame(() => {
    if (popupState.isOpen) return;
    const cameraReferencePosition = new Vector3();
    cameraReference.current.getWorldPosition(cameraReferencePosition);
    groupRef.current.getWorldQuaternion(shipQuaternion);
    offset.copy(cameraOffset).applyQuaternion(shipQuaternion);
    camera.position.copy(cameraReferencePosition).add(offset);
    camera.lookAt(cameraReferencePosition);

    const reachedPoint = isPointInRadius(currentShipPosition.current, 8);
    if (isPopupOpenLegal && reachedPoint) {
      setTimeout(() => onDestinationReach(reachedPoint), 0);
    } else if (!isPopupOpenLegal && !reachedPoint) {
      setIsPopupOpenLegal(true);
    }
  });

  useEffect(() => {
    if (window.outerWidth < 900) {
      setCameraOffset(new Vector3(0, 40, -150).multiplyScalar(0.18));
      setCameraReferencePosition([0, 40, 10]);
    } else if (window.outerWidth < 1520) {
      setCameraOffset(new Vector3(30, 40, -150).multiplyScalar(0.18));
      setCameraReferencePosition([window.outerWidth * -0.09, 40, 10]);
    } else {
      setCameraOffset(new Vector3(30, 40, -150).multiplyScalar(0.18));
      setCameraReferencePosition([-130, 40, 10]);
    }
    window.addEventListener("resize", onScreenResize);
    return () => window.removeEventListener("resize", onScreenResize);
  }, [onScreenResize]);

  return (
    <group ref={groupRef}>
      <group scale={0.1}>
        <mesh
          ref={cameraReference}
          //position={[-130, 40, 10]}
          //position={[0, 40, 0]}
          position={cameraReferencePosition}
          scale={100}
          visible={false}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh position={[0, -15, -0.3]}>
          <ShipModel />
        </mesh>
        <hemisphereLight intensity={0.5} />
      </group>
    </group>
  );
}
