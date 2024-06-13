import img from "../../assets/working/working.png";

const Cooking = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt="" className="w-48" />
      <h1 className="text-4xl mt-5">We are working on it!</h1>
      <p className=" mt-2 font-semibold">to make it for best user experience</p>
    </div>
  );
};

export default Cooking;
