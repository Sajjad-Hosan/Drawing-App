import useAuth from "../../hooks/useAuth";
import { FaPen, FaPencil } from "react-icons/fa6";

const BrushTooltip = ({ brush }) => {
  const { selectTool, setSelectTool } = useAuth();
  return (
    <div
      className={`card p-4 flex flex-row gap-3 absolute z-20 right-[6.5rem] ${
        brush ? "bottom-12" : "-bottom-[10rem]"
      }`}
    >
      <button
        onClick={() => setSelectTool("pci")}
        className={`btn btn-circle text-xl flex tooltip ${
          selectTool === "pci" ? "btn-neutral" : "btn-ghost"
        }`}
        data-tip="Pencil"
      >
        <FaPencil />
      </button>
      <button
        onClick={() => setSelectTool("pen")}
        className={`btn btn-circle text-xl flex tooltip ${
          selectTool === "pen" ? "btn-neutral" : "btn-ghost"
        }`}
        data-tip="Pen"
      >
        <FaPen />
      </button>
    </div>
  );
};

export default BrushTooltip;
