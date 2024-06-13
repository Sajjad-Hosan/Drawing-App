import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const fillRef = useRef(null);
  // ------------------------
  const [expend, setExpend] = useState(true);
  const [color, setColor] = useState("#000");
  const [background, setBackground] = useState("#219C90");
  const [selectTool, setSelectTool] = useState("bru");
  const [fill, setFill] = useState(false);
  const [width, setWidth] = useState(14);
  const [eraser, setErase] = useState(20);
  const [opa, setOpa] = useState(1);
  const [back, setBack] = useState(1);

  window.onload = () => {
    const width = parseInt(localStorage.getItem("stroke"));
    const eraser = parseInt(localStorage.getItem("eraser"));
    const fill = localStorage.getItem("fill");
    const background = localStorage.getItem("background");
    const color = localStorage.getItem("color");
    // -------------------
    setColor(color);
    setWidth(width);
    setErase(eraser);
    setFill(fill);
    setBackground(background);
  };
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
