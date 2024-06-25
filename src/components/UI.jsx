import { useTransition, animated } from "@react-spring/web";
import Navigation from "./navigation";
import SpeedIndicator from "./speedIndicator";
import { usePopupState } from "../contexts/popupContext";
import { Pages } from "../pages/Pages";

const PageRenderer = ({ Page }) => {
  return Page ? <Page /> : <></>;
};

export default function UI() {
  const { popupState, setPopupState } = usePopupState();

  const transition = useTransition(popupState.isOpen, {
    from: { scale: 0, opacity: 0 },
    enter: { scale: 1, opacity: 0.9 },
    leave: { scale: 0, opacity: 0 },
  });

  return (
    <div className="z-40 absolute w-full h-full">
      <Navigation />
      <SpeedIndicator />
      {transition((style, item) =>
        item ? (
          <div className="flex h-screen justify-center">
          <animated.div
            className="fixed w-11/12 md:w-5/6 h-5/6 h-sm:mt-20 mt-[7vh] bg-gray-50 rounded-md p-6"
            style={style}
          >
            <div className="flex justify-end mb-4">
              <button
                className="absolute top-4 right-4 text-gray-800"
                onClick={() => setPopupState({ ...popupState, isOpen: false })}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9574 14.1689L8.59651 6.75098L6.73232 8.59598L14.1313 16.071L6.71338 23.4129L8.5964 25.2769L15.9574 17.8779L23.3943 25.2769L25.2392 23.4129L17.8213 16.071L25.2202 8.59598L23.3752 6.75098L15.9574 14.1689Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <PageRenderer Page={Pages.find((i) => i.name === popupState.pageName).Page} />
          </animated.div></div>
        ) : null
      )}
    </div>
  );
}
