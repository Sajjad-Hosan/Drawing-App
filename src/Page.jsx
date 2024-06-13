import "./index.css";
import Controls from "./components/Controls/Controls";
import Navbar from "./components/Navbar/Navbar";
import SideColor from "./components/SideColor/SideColor";
import Body from "./components/Body/Body";
import BottomNav from "./components/BottomNav/BottomNav";
import useAuth from "./hooks/useAuth";

// TODO: tooltip position chnage - erasertooltip,brushtooltip
// TODo: prop-types install
// TODO: alert install
function Page() {
const {expend} = useAuth();
  return (
    <>
      <Controls />
      <SideColor />
      <div className="w-full h-[640px] relative flex-col justify-between overflow-hidden">
        <div
          className={`absolute z-30 w-full transition-all duration-300 ${
            expend ? "top-0" : "-top-32"
          }`}
        >
          <Navbar />
        </div>
        <Body />
        <div className="absolute bottom-1 right-2 md:relative">
        <BottomNav />
        </div>
      </div>
    </>
  );
}

export default Page;
