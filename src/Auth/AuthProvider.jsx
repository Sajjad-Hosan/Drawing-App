import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const fillRef = useRef(null);
  // ------------------------
  const [expend, setExpend] = useState(true);
  const [color, setColor] = useState(localStorage.getItem("color"));
  const [background, setBackground] = useState(
    localStorage.getItem("background")
  );
  const [selectTool, setSelectTool] = useState("bru");
  const [fill, setFill] = useState(localStorage.getItem("fill"));
  const [width, setWidth] = useState(parseInt(localStorage.getItem("stroke")));
  const [eraser, setErase] = useState(parseInt(localStorage.getItem("eraser")));
  const [opa, setOpa] = useState(1);
  const [back, setBack] = useState(1);

  useEffect(() => {
    if (selectTool === "bru") {
      setWidth(width);
    } else if (selectTool === "pci") {
      setWidth(4);
    } else if (selectTool === "pen") {
      setWidth(1);
    }
  }, [selectTool, width]);
  const [more, setMore] = useState("");
  const [right, setRight] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [show, setShow] = useState(false);

  console.log(fill);
  const handleFill = () => {
    setFill(fillRef.current.checked);
    localStorage.setItem("fill", fillRef.current.checked);
  };

  const contextValue = {
    fillRef,
    fill,
    selectTool,
    setSelectTool,
    right,
    setRight,
    bottom,
    setBottom,
    show,
    setShow,
    more,
    setMore,
    eraser,
    setErase,
    color,
    setColor,
    width,
    setWidth,
    handleFill,
    opa,
    setOpa,
    back,
    setBack,
    expend,
    setExpend,
    background,
    setBackground,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
