import { FaXmark } from "react-icons/fa6";

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
          <div className="p-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sequi et voluptates non impedit cupiditate officiis! Quo nemo nisi
            error in voluptates? Maiores, maxime. Beatae id odit animi atque
            sequi ullam perspiciatis natus sed voluptate a delectus nemo nihil
            quisquam distinctio ipsum dolorem, harum hic laudantium excepturi
            vel nam. Molestias.
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Controls;
