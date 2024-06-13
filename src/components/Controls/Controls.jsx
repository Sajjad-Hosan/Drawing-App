import { FaXmark } from "react-icons/fa6";
import Cooking from "../Cooking/Cooking";

const Controls = () => {
  return (
    <>
      <dialog id="controls" className="modal">
        <div className="modal-box max-w-3xl overflow-hidden">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Categorys</h3>
            <form method="dialog">
              <button className="btn btn-ghost text-error text-lg">
                <FaXmark />
              </button>
            </form>
          </div>
          <div>
            <Cooking />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Controls;
