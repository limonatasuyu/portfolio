import { createContext, useContext, useState } from "react";

const MovingContext = createContext();

export const MovingProvider = ({ children }) => {
  const [speed, setSpeed] = useState(0);
  const [moveDirection, setMoveDirection] = useState("forward");

  return <MovingContext.Provider value={{ speed, setSpeed, moveDirection, setMoveDirection }}>{children}</MovingContext.Provider>;
};

export const useMove = () => {
  const { speed, setSpeed, moveDirection, setMoveDirection } = useContext(MovingContext);
  return { speed, setSpeed, moveDirection, setMoveDirection };
};
