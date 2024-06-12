import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import useAuth from "../../hooks/useAuth";

const SizeBox = () => {
  const { width, eraser, setErase, setWidth, opa, setOpa, back, setBack } =
    useAuth();
  const [num, setNum] = useState(width);
  const handleWidth = (e) => {
    setNum(e.target.value);
    setWidth(e.target.value);
    localStorage.setItem("stroke", e.target.value);
  };
  const handleErase = (e) => {
    setErase(e.target.value);
    localStorage.setItem("eraser", e.target.value);
  };
  const handleOpacity = (e) => {
    setOpa(e.target.value);
  };
  const handleBackground = (e) => {
    setBack(e.target.value);
  };
  return (
    <>
      <dialog id="sizeBox" className="modal">
        <div className="modal-box max-w-2xl">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">????</h3>
            <form method="dialog">
              <button className="btn btn-ghost btn-circle">
                <HiMiniXMark className="text-xl" />
              </button>
            </form>
          </div>
          <div className="my-3">
            <form className="flex flex-col gap-5">
              <div className="flex justify-between item-center w-full relative">
                <label htmlFor="stroke" className="font-semibold">
                  Opacity
                </label>
                <input
                  type="range"
                  id="stroke"
                  step={0.1}
                  onChange={handleOpacity}
                  className="ranger mt-3 z-10"
                  defaultValue={opa}
                  max={1}
                />
                <span className="font-semibold">{opa}</span>
              </div>
              <div className="flex justify-between item-center w-full relative">
                <label htmlFor="stroke" className="font-semibold">
                  Background
                </label>
                <input
                  type="range"
                  id="stroke"
                  onChange={handleBackground}
                  className="ranger mt-3 z-10"
                  defaultValue={back}
                  step={0.1}
                  max={1}
                />
                <span className={`font-semibold`}>{back}</span>
              </div>
              <div className="flex justify-between item-center w-full relative">
                <label htmlFor="stroke" className="font-semibold">
                  Stroke
                </label>
                <input
                  type="range"
                  id="stroke"
                  onChange={handleWidth}
                  className="ranger mt-3 z-10"
                  defaultValue={num}
                  max={50}
                />
                <span className={`font-semibold`}>
                  {num < 10 ? "0" + num : num}
                </span>
              </div>
              <div className="flex justify-between item-center w-full relative">
                <label htmlFor="stroke" className="font-semibold">
                  Eraser
                </label>
                <input
                  type="range"
                  onChange={handleErase}
                  className="ranger mt-3 z-10"
                  defaultValue={eraser}
                  max={80}
                  step={9}
                />
                <span className={`font-semibold`}>
                  {eraser < 10 ? "0" + eraser : eraser}
                </span>
              </div>
            </form>
          </div>
          <div className="modal-action"></div>
        </div>
      </dialog>
    </>
  );
};

export default SizeBox;
