import React from "react";
import { detail } from "../types";

function Staticon({h,w,c}:detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g stroke={c} strokeLinecap="round" strokeWidth="4">
        <path d="M12 19v-8M17 19v-4M7 19V6"></path>
      </g>
    </svg>
  );
}

export default Staticon;