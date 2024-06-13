import { HiXMark } from "react-icons/hi2";
import useAuth from "../../hooks/useAuth";
const BackgroundBox = () => {
  const { background, setBackground } = useAuth();
  const backgrounds = [
    "#219C90",
    "#0C1844",
    "#102C57",
    "#1679AB",
    "#5A72A0",
    "#538392",
    "#26355D",
    "#254336",
    "#373A40",
    "#6F4E37",
    "#8E3E63",
    "#EEF7FF",
    "#7469B6",
    "#FFC55A",
    "#948979",
    "#535238",
    "#212125",
    "#ffffff"
  ];
  return (
    <>
      <dialog id="background" className="modal">
        <div className="modal-box max-w-3xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Background</h3>
            <form method="dialog">
              <button className="btn btn-circle btn-ghost">
                <HiXMark className="text-lg" />
              </button>
            </form>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-5 p-5 mt-6">
            {backgrounds.map((i) => {
              return (
                <span
                  key={i}
                  className={`h-20 ${
                    background === i ? "rounded-full" : "rounded-lg"
                  } ${ i === '#ffffff' && 'border-2 border-black'}`}
                  style={{ background: i }}
                  onClick={() => {
                    setBackground(i);
                    localStorage.setItem("background", i);
                  }}
                ></span>
              );
            })}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BackgroundBox;
