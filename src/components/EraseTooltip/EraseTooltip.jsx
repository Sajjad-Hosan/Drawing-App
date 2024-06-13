import { RiEraserLine } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import { MdOutlineFitScreen } from "react-icons/md";
const EraseTooltip = ({ eraser }) => {
  const { selectTool, setSelectTool } = useAuth();
  return (
    <div
      className={`card p-4 flex flex-row gap-3 absolute z-20 right-[3.4rem] ${
        eraser ? "bottom-12" : "-bottom-[10rem]"
      }`}
    >
      <button
        className={`btn btn-circle flex tooltip tooltip-right ${
          selectTool === "era" ? "btn-neutral" : "btn-outline"
        }`}
        onClick={() => setSelectTool("era")}
        data-tip="Erase"
      >
        <RiEraserLine className="text-lg" />
      </button>
      <button
        className="btn btn-error btn-circle flex tooltip tooltip-right"
        onClick={() => setSelectTool("clearAll")}
        data-tip="Clear All"
      >
        <MdOutlineFitScreen className="text-lg" />
      </button>
    </div>
  );
};

export default EraseTooltip;
