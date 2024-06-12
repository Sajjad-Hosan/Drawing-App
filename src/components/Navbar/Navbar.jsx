import { FaGear, FaUser } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";
import Setting from "../Setting/Setting";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({expend,setExpend}) => {
  return (
    <>
      <Setting />
      {/* ----------------------- */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Drawing App</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="flex items-center gap-2">
              <button
                className="btn btn-circle btn-ghost flex tooltip tooltip-bottom text-lg"
                data-tip="Controls"
                onClick={() => document.getElementById("controls").showModal()}
              >
                <FaMagic />
              </button>
              <button
                className="btn btn-circle btn-ghost flex tooltip tooltip-bottom text-lg"
                onClick={() => document.getElementById("setting").showModal()}
                data-tip="Setting"
              >
                <FaGear />
              </button>
              <button
                className="btn btn-circle btn-ghost flex tooltip tooltip-bottom text-lg"
                data-tip="User"
              >
                <FaUser />
              </button>
            </div>
          </div>
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
