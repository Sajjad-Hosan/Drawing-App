import { FaQuestion, FaRightLong } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const Working = () => {
  const { show, setShow } = useAuth();
  return (
    <div
      onClick={() => setShow(!show)}
      className={`absolute w-full h-full justify-center items-center z-20 ${
        show ? "flex" : "hidden"
      }`}
    >
      <div
        className="card bg-error p-8 w-[500px] border space-y-4 text-center"
        onClick={() => setShow(!show)}
      >
        <h1 className="text-4xl mx-auto">
          <FaQuestion />
        </h1>
        <h2 className="text-xl">Working on it !</h2>
        <div className="flex justify-end">
          <button className="btn px-8 btn-neutral">
            Back <FaRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Working;
