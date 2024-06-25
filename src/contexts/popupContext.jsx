import { createContext, useContext, useState } from "react";

// Create a combined Context
const PopupContext = createContext();

// Create a provider component
export const PopupProvider = ({ children }) => {
  const [popupState, setPopupState] = useState({
    pageName: "Home",
    isOpen: false,
  });

  return <PopupContext.Provider value={{ popupState, setPopupState }}>{children}</PopupContext.Provider>;
};

export const usePopupState = () => {
  const { popupState, setPopupState } = useContext(PopupContext);
  return { popupState, setPopupState };
};
