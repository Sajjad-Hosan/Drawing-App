import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { HiMiniXMark } from "react-icons/hi2";

const letter = [
  "red",
  "green",
  "blue",
  "orange",
  "black",
  "yellow",
  "indigo",
  "violet",
  "aqua",
  "darkred",
  "darkorange",
  "gray",
  "brown",
  "pink",
  "white",
  "purple",
  "lavender",
  "magenta",
  "cyan",
  "maroon",
  "olive",
  "tan",
  "teal",
  "ruby",
  "azure",
  "silver",
  "rust",
];

const SideColor = () => {
  const { setColor } = useAuth();
  const [current, setCurrent] = useState(0);
  return (
    <>
      <dialog id="colors" className="modal">
        <div className="modal-box max-w-2xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Colors</h3>
            <form method="dialog">
              <button className="btn btn-ghost btn-circle">
                <HiMiniXMark className="text-lg" />
              </button>
            </form>
          </div>
          <>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 overflow-y-auto mt-8">
              {letter.map((color, i) => {
                return (
                  <span
                    style={{ background: color }}
                    className={`h-20 cursor-pointer transition-all duration-150 ${
                      current == i ? "rounded-full" : "rounded-md"
                    } ${color === "white" ? "border border-black" : ""}`}
                    onClick={() => {
                      setCurrent(i);
                      setColor(color);
                      localStorage.setItem("color", color);
                    }}
                    key={color}
                  ></span>
                );
              })}
            </div>
          </>
        </div>
      </dialog>
    </>
  );
};

export default SideColor;
