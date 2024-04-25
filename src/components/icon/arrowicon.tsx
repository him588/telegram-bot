import React from "react";
import { detail } from "../types";

function Arrowicon({h,w,c}:detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 17L17 7m0 0H8m9 0v9"
      ></path>
    </svg>
  );
}

export default Arrowicon;