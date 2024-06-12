import { FaAngleLeft } from "react-icons/fa6";
import {
  RiBrushLine,
  RiEraserLine,
} from "react-icons/ri";
import { IoLayersOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

import useAuth from "../../hooks/useAuth";
import EraseTooltip from "../EraseTooltip/EraseTooltip";
import SizeBox from "../SizeBox/SizeBox";
import MoreNav from "../MoreNav/MoreNav";
import BrushTooltip from "../BrushTooltip/BrushTooltip";
import ShapeTooltip from "../ShapeTooltip/ShapeTooltip";
const BottomNav = () => {
  const { selectTool, setSelectTool, bottom, setBottom, clearCanvas } =
    useAuth();

  return (
    <>
      <ShapeTooltip />
      <EraseTooltip />
      <BrushTooltip />
      <SizeBox />
      <MoreNav />
      {/* ---------------------- */}
      <div className="flex justify-end z-20 mt-2">
        <ul className="flex gap-2 text-xl text-neutral items-center">
        <li
            onClick={() => setSelectTool("down")}
            className={`btn  btn-circle btn-ghost text-xl flex tooltip`}
            data-tip="Download"
          >
            <MdOutlineFileDownload className="text-xl" />
          </li>
          <li
            onClick={() => setSelectTool("rec")}
            className={`btn btn-circle text-xl flex tooltip ${
              selectTool === "rec" ? "btn-neutral" : "btn-ghost"
            }`}
            data-tip="Rectangle"
          >
            <IoLayersOutline />
          </li>
          <li
            onClick={() => setSelectTool("bru")}
            className={`btn btn-circle text-xl flex tooltip ${
              selectTool === "bru" ? "btn-neutral" : "btn-ghost"
            }`}
            data-tip="Brush"
          >
            <RiBrushLine />
          </li>
          <li
            onClick={() => {
              setSelectTool("era");
              clearCanvas();
            }}
            className={`btn btn-circle text-xl flex tooltip ${
              selectTool === "era" ? "btn-error" : "btn-ghost"
            }`}
            data-tip="Eraser"
          >
            <RiEraserLine />
          </li>
          <li
            className={`btn btn-circle flex tooltip ml-3 ${
              bottom ? "btn-neutral" : "btn-ghost"
            }`}
            data-tip="More"
            onClick={() => setBottom(!bottom)}
          >
            <FaAngleLeft
              className={`rotate-45 ${bottom ? "-rotate-90" : ""}`}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default BottomNav;
