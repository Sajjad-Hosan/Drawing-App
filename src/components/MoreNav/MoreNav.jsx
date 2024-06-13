import {
  IoColorFill,
  IoResizeOutline,
  IoColorPaletteOutline,
} from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
const MoreNav = () => {
  const { bottom, setSelectTool, fillRef, handleFill, fill } = useAuth();
  return (
    <>
      <div
        className={`absolute right-1 ${
          bottom ? "bottom-20" : "-bottom-[16rem]"
        } z-20 transition-all duration-200`}
      >
        <ul className="flex flex-col gap-2 text-xl text-neutral items-center">
          <li>
            <label
              htmlFor="fill"
              onClick={() => {
                handleFill();
              }}
              className={`btn  btn-circle text-xl flex tooltip tooltip-left ${
                fill ? "btn-neutral" : "btn-ghost"
              }`}
              data-tip="Fill Color"
            >
              <input
                type="checkbox"
                id="fill"
                ref={fillRef}
                defaultChecked={fill}
                hidden
              />
              <IoColorFill className="text-xl" />
            </label>
          </li>
          <li
            className={`btn  btn-circle btn-ghost text-xl flex tooltip tooltip-left`}
            data-tip="Size"
            onClick={() => {
              setSelectTool("size");
              document.getElementById("sizeBox").showModal();
            }}
          >
            <IoResizeOutline className="text-xl" />
          </li>
          <li
            className={`btn btn-circle btn-ghost text-xl flex tooltip tooltip-left`}
            data-tip="Colors"
            onClick={() => {
              document.getElementById("colors").showModal();
            }}
          >
            <IoColorPaletteOutline className="text-xl" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MoreNav;
