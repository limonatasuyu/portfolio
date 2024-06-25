import arrow from "/speedIndicator/arrow.png";
import circle from "/speedIndicator/circle.png";
import background from "/speedIndicator/background.png";
import { useMove } from "../contexts/movingContext";
import controlArrow from "/controlArrow.png";

export default function SpeedIndicator() {
  const { speed, setSpeed, setMoveDirection } = useMove();

  function handleControls(direction) {
    //alert(direction)
    if (direction === "up") setSpeed((p) => (p < 4 ? p + 1 : p));
    else if (direction === "down") setSpeed((p) => (p > 0 ? p - 1 : p));
    else {
      setMoveDirection(direction);
      setTimeout(() => setMoveDirection("forward"), 1000);
    }
  }

  const rotationAngle = speed >= 0 ? speed * 60 : 0;

  const filter =
    speed === -1
      ? "invert(22%) sepia(86%) saturate(5605%) hue-rotate(349deg) brightness(99%) contrast(121%)"
      : "none";

  return (
    <div
      style={{ bottom: "30px", right: "10px" }}
      className="absolute overflow-hidden flex w-full justify-between"
    >
      <div className="ml-8">
        <div className="w-28 h-28 lg:w-36 mx-auto flex flex-wrap">
          <div className="w-36  flex justify-center">
            <img
              src={controlArrow}
              alt="Arrow Up"
              className="w-10 h-10 lg:w-14 lg:h-14"
              onClick={() => handleControls("up")}
            />
          </div>
          <div className="w-36  flex justify-between">
            <img
              src={controlArrow}
              alt="Arrow Left"
              className="w-10 h-10 lg:w-14 lg:h-14 -rotate-90"
              onClick={() => handleControls("left")}
            />
            <img
              src={controlArrow}
              alt="Arrow Right"
              className="w-10 h-10 lg:w-14 lg:h-14 rotate-90"
              onClick={() => handleControls("right")}
            />
          </div>
          <div className="w-36  flex justify-center">
            <img
              src={controlArrow}
              alt="Arrow Down"
              className="w-10 h-10 lg:w-14 lg:h-14 rotate-180"
              onClick={() => handleControls("down")}
            />
          </div>
        </div>
      </div>
      <div className="h-32 lg:h-48 overflow-hidden">
        <img
          src={background}
          className="absolute w-32 h-32 top-0 right-0 lg:h-48 lg:w-48"
          style={{
            transform: "translateZ(-100px)",
            transformStyle: "preserve-3d",
            filter: "blur(1px)",
            zIndex: -3,
          }}
        />
        <img
          src={circle}
          className="absolute w-32 h-32 top-0 right-0 lg:h-48 lg:w-48"
          style={{
            transform: "translateZ(-50px)",
            transformStyle: "preserve-3d",
            filter: filter,
            zIndex: -2,
          }}
        />
        <img
          src={arrow}
          className="absolute w-32 h-32 top-0 right-0 lg:h-48 lg:w-48"
          style={{
            transform: `rotate(${rotationAngle}deg) translateZ(50px)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.5s ease-in-out",
            filter: filter,
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}
