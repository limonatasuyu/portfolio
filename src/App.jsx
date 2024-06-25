import { useEffect, useState } from "react";
import UI from "./components/UI";
import { Pages } from "./pages/Pages";
import Scene from "./scene";
import { usePopupState } from "./contexts/popupContext";
import rotateYourPhone from "/rotateYourPhone.gif";
import spinner from "/spinner.gif";

const App = () => {
  const { popupState, setPopupState } = usePopupState();
  const [isPageSet, setIsPageSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      !isPageSet &&
      window.location.hash &&
      Pages.find((i) => i.name === window.location.hash.slice(1))
    ) {
      setPopupState({ ...popupState, pageName: window.location.hash.slice(1) });
      setIsPageSet(true);
    } else window.location.hash = "#" + popupState.pageName;
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popupState.pageName]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 6000);
  }, []);

  return (
    <div className="overflow-hidden">
      {isLoading && (
        <div
          className="w-screen h-screen bg-black absolute top-0 left-0 flex flex-col justify-center items-center text-white"
          style={{ zIndex: 100 }}
        >
          <img src={rotateYourPhone} alt="rotate phone for better experience" />
          <span>Rotate Your Phone For Better Experience</span>
          <img src={spinner} alt="loading" className="w-20" />
          <span>Loading..</span>
        </div>
      )}
      <UI />
      <Scene />
    </div>
  );
};

export default App;
