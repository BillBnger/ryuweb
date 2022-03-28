import React, { useEffect, useRef, useState } from "react";
import CollectionBg from "../../assets/images/collection-bg.png";
import "./collection.css";

export const Collection = () => {
  const [counter, setCounter] = useState(500);
  const timer = useRef(null); // we can save timer in useRef and pass it to child

  useEffect(() => {
    timer.current = setInterval(() => setCounter((v) => v - 1), 20);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div
      className="container-fluid section"
      id="collection"
      style={{
        background: `white url("${CollectionBg}") repeat scroll ${counter}px 0px`,
        minHeight: "600px",
      }}
    ></div>
  );
};
