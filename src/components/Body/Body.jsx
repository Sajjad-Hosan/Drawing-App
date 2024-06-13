import React, { useCallback, useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Body = () => {
  const {
    selectTool,
    color,
    fill,
    width,
    setSelectTool,
    shape,
    setShape,
    eraser,
    background,
  } = useAuth();
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [prevMouseX, setPrevMouseX] = useState(null);
  const [prevMouseY, setPrevMouseY] = useState(null);
  const [snapshot, setSnapshot] = useState(null);

  const setCanvasBackground = useCallback(() => {
    const ctx = ctxRef.current;
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }, [background]);
  useEffect(() => {
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();

    window.addEventListener("load", () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      setCanvasBackground();
    });

    return () => {
      window.removeEventListener("load", () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        setCanvasBackground();
      });
    };
  }, [setCanvasBackground]);

  const startDraw = useCallback(
    (e) => {
      setIsDrawing(true);
      setPrevMouseX(e.nativeEvent.offsetX);
      setPrevMouseY(e.nativeEvent.offsetY);
      const ctx = ctxRef.current;
      ctx.beginPath();
      ctx.lineWidth = selectTool === "era" ? eraser : width;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      setSnapshot(
        ctx.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
      );
    },
    [color, eraser, selectTool, width]
  );

  const drawing = (e) => {
    if (!isDrawing) return;
    const ctx = ctxRef.current;
    ctx.putImageData(snapshot, 0, 0);

    if (
      selectTool === "bru" ||
      selectTool === "era" ||
      selectTool === "pci" ||
      selectTool === "pen"
    ) {
      ctx.strokeStyle = selectTool === "era" ? background : color;
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    } else if (selectTool === "rec") {
      drawRect(e);
    } else if (selectTool === "cir") {
      drawCircle(e);
    } else if (selectTool === "tri") {
      drawTriangle(e);
    }
  };
  const drawRect = (event) => {
    const e = event.nativeEvent;
    const ctx = ctxRef.current;
    if (!fill) {
      return ctx.strokeRect(
        e.offsetX,
        e.offsetY,
        prevMouseX - e.offsetX,
        prevMouseY - e.offsetY
      );
    }
    // ctx.globalAlpha = 0.3
    // ctx.fillText('Hello, Canvas!', 50, 100);
    // ctx.strokeText('Hello, Canvas!', 50, 150);
    ctx.fillRect(
      e.offsetX,
      e.offsetY,
      prevMouseX - e.offsetX,
      prevMouseY - e.offsetY
    );
    return {
      type: "rect",
      x: e.offsetX,
      y: e.offsetY,
      width: prevMouseX - e.offsetX,
      height: prevMouseY - e.offsetY,
      color: color,
      fill: fill,
    };
  };
  const drawCircle = (event) => {
    const ctx = ctxRef.current;
    const e = event.nativeEvent;
    ctx.beginPath();
    let radius = Math.sqrt(
      Math.pow(prevMouseX - e.offsetX, 2) + Math.pow(prevMouseY - e.offsetY, 2)
    );
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
    fill ? ctx.fill() : ctx.stroke();
    return {
      type: "circle",
      x: prevMouseX,
      y: prevMouseY,
      radius: radius,
      color: color,
      fill: fill,
    };
  };
  const drawTriangle = (event) => {
    const ctx = ctxRef.current;
    const e = event.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
    ctx.closePath();
    fill ? ctx.fill() : ctx.stroke();
    return {
      type: "triangle",
      x1: prevMouseX,
      x2: e.offsetX,
      y1: prevMouseY,
      y2: e.offsetY,
      x3: prevMouseX - 2 * e.offsetX,
      color: color,
      fill: fill,
    };
  };
  const clearCanvas = () => {
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setCanvasBackground();
  };
  const saveImage = () => {
    const link = document.createElement("a");
    link.download = `${Date.now()}.png`;
    link.href = canvasRef.current.toDataURL();
    link.click();
  };
  if (selectTool === "down") {
    saveImage();
    setSelectTool("bru");
  } else if (selectTool === "clearAll") {
    clearCanvas();
  }
  return (
    <>
      <canvas
        ref={canvasRef}
        className="w-full md:h-[545px] h-full border-2 border-gray-500 z-10 rounded-xl"
        onMouseDown={startDraw}
        onMouseMove={drawing}
        onMouseUp={() => setIsDrawing(false)}
        onMouseLeave={() => setIsDrawing(false)}
      />
    </>
  );
};

export default Body;
