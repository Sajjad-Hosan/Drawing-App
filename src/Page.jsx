import "./index.css";
import Controls from "./components/Controls/Controls";
import Navbar from "./components/Navbar/Navbar";
import SideColor from "./components/SideColor/SideColor";
import Body from "./components/Body/Body";
import BottomNav from "./components/BottomNav/BottomNav";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// TODO: tooltip position chnage - erasertooltip,brushtooltip
// TODo: prop-types install 
// TODO: alert install
function Page() {
  const [expend, setExpend] = useState(false);
  return (
    <>
      <Controls />
      <SideColor />
      <div className="w-full h-[640px] relative flex-col justify-between overflow-hidden">
        <button
          className="absolute top-2 left-3 flex tooltip tooltip-bottom mx-auto z-40"
          data-tip="expend"
          onClick={() => setExpend(!expend)}
        >
          <IoIosArrowDown className="text-lg" />
        </button>
        <div
          className={`absolute z-30 w-full border-b transition-all duration-300 ${
            expend ? "-top-3" : "-top-32"
          }`}
        >
          <Navbar expend={expend} setExpend={setExpend} />
        </div>
        <Body />
        <BottomNav />
      </div>
    </>
  );
}

export default Page;
