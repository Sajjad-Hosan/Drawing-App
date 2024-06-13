import { FaAngleLeft } from "react-icons/fa6";
import { RiBrushLine, RiEraserLine } from "react-icons/ri";
import { IoLayersOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import { TbBackground } from "react-icons/tb";

import useAuth from "../../hooks/useAuth";
import EraseTooltip from "../EraseTooltip/EraseTooltip";
import SizeBox from "../SizeBox/SizeBox";
import MoreNav from "../MoreNav/MoreNav";
import BrushTooltip from "../BrushTooltip/BrushTooltip";
import ShapeTooltip from "../ShapeTooltip/ShapeTooltip";
import { useState } from "react";
import BackgroundBox from "../BackgroundBox/BackgroundBox";
const BottomNav = () => {
  const { setSelectTool, bottom, setBottom, expend, setExpend } = useAuth();
  const [eraser, setEraser] = useState(false);
  const [brush, setBrush] = useState(false);
  const [shapes, setShapes] = useState(false);

  return (
    <>
      <ShapeTooltip shapes={shapes} />
      <EraseTooltip eraser={eraser} />
      <BrushTooltip brush={brush} />
      <BackgroundBox/>
      <SizeBox />
      <MoreNav />
      {/* ---------------------- */}
      <div className="flex justify-end z-20 mt-2">
        <ul className="flex gap-2 text-xl text-neutral items-center">
          <li
            onClick={() => setExpend(!expend)}
            className={`btn  btn-circle btn-ghost text-xl flex tooltip`}
            data-tip="Navbar"
          >
            {expend ? <HiX className="text-xl"/> : <HiOutlineMenuAlt1 className="text-xl" />}
          </li>
          <li
            onClick={() => setSelectTool("down")}
            className={`btn  btn-circle btn-ghost text-xl flex tooltip`}
            data-tip="Download"
          >
            <MdOutlineFileDownload className="text-xl" />
          </li>
          <li
            onClick={() => document.getElementById("background").showModal()}
            className={`btn btn-circle btn-ghost text-xl flex tooltip`}
            data-tip="Background"
          >
            <TbBackground className="text-xl" />
          </li>
          <li
            onClick={() => {
              setSelectTool("");
              setEraser(false);
              setBrush(false);
              setShapes(!shapes);
            }}
            className={`btn btn-circle text-xl flex tooltip ${
              shapes ? "btn-neutral" : "btn-ghost"
            }`}
            data-tip="Rectangle"
          >
            <IoLayersOutline />
          </li>
          <li
            onClick={() => {
              setSelectTool("bru");
              setBrush(!brush);
              setEraser(false);
              setShapes(false);
            }}
            className={`btn btn-circle text-xl flex tooltip ${
              brush ? "btn-neutral" : "btn-ghost"
            }`}
            data-tip="Brush"
          >
            <RiBrushLine />
          </li>
          <li
            onClick={() => {
              setSelectTool("");
              setEraser(!eraser);
              setBrush(false);
              setShapes(false);
            }}
            className={`btn btn-circle text-xl flex tooltip ${
              eraser ? "btn-error" : "btn-ghost"
            }`}
            data-tip="Eraser"
          >
            <RiEraserLine />
          </li>
          <li
            className={`btn btn-circle flex tooltip ml-1 ${
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
