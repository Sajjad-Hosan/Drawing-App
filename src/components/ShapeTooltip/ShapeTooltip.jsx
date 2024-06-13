import useAuth from "../../hooks/useAuth";
import {
    RiRectangleLine,
    RiCircleLine,
    RiTriangleLine,
  } from "react-icons/ri";
const ShapeTooltip = ({shapes}) => {
  const { selectTool, setSelectTool } = useAuth();

  return (
    <>
      <div
        className={`card p-4 flex flex-row gap-3 absolute z-20 right-[10.5rem] ${
          shapes ? "bottom-12" : "-bottom-[10rem]"
        }`}
      >
        <button
          onClick={() => setSelectTool("rec")}
          className={`btn btn-circle text-xl flex tooltip ${
            selectTool === "rec" ? "btn-neutral" : "btn-ghost"
          }`}
          data-tip="Rectangle"
        >
          <RiRectangleLine />
        </button>
        <button
          onClick={() => setSelectTool("cir")}
          className={`btn btn-circle text-xl flex tooltip ${
            selectTool === "cir" ? "btn-neutral" : "btn-ghost"
          }`}
          data-tip="Circle"
        >
          <RiCircleLine />
        </button>
        <button
          onClick={() => setSelectTool("tri")}
          className={`btn btn-circle text-xl flex tooltip ${
            selectTool === "tri" ? "btn-neutral" : "btn-ghost"
          }`}
          data-tip="Triangle"
        >
          <RiTriangleLine />
        </button>
      </div>
    </>
  );
};

export default ShapeTooltip;
