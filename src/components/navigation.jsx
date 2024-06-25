import { Pages } from "../pages/Pages";
import { usePopupState } from "../contexts/popupContext";
import { useMove } from "../contexts/movingContext";

export default function Navigation() {
  const { setPopupState } = usePopupState();
  const { setSpeed } = useMove();

  return (
    <div className="px-5 absolute flex bg-blue gap-2 w-full justify-center text-red-950 h-[10vh]">
      {Pages.map((i, x) => (
        <div
          className="select-none cursor-pointer w-40 h-16 mt-2 text-center gradient-div rounded-lg flex flex-col items-center p-4 border border-gray-200 shadow-lg transition-transform transform hover:scale-1  05 hover:shadow-xl"
          onClick={() => {
            setPopupState({
              pageName: i.name,
              isOpen: true,
            });
            setSpeed(0)
          }}
          key={x}
        >
          {i.name}
        </div>
      ))}
    </div>
  );
}
