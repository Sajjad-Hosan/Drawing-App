import { HiMiniXMark } from "react-icons/hi2";
const Setting = () => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="setting" className="modal">
        <div className="modal-box max-w-2xl">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Settings</h3>
            <form method="dialog">
              <button className="btn btn-ghost btn-circle">
                <HiMiniXMark className="text-xl" />
              </button>
            </form>
          </div>
          <div className="p-5"></div>
        </div>
      </dialog>
    </>
  );
};

export default Setting;
