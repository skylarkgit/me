import React from "react";
import { animateScroll } from "react-scroll";
import "./ScrollIcon.css";

function ScrollIcon() {
  return (
    <div
      onClick={() => animateScroll.scrollMore(window.innerHeight)}
      className="scroll-down"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default ScrollIcon;
