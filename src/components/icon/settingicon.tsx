import React from "react";
import { detail } from "../types";

function Settingicon({h,w,c}:detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <g>
          <g>
            <path
              fill={c}
              fillRule="evenodd"
              d="M10.895 3.007c-.672-1.13-2.143-1.55-3.303-.865l-1.725.987a2.649 2.649 0 00-.976 3.616v.001c.375.647.316 1.06.2 1.263-.118.203-.446.461-1.191.461a2.656 2.656 0 00-2.65 2.65v1.76a2.656 2.656 0 002.65 2.65c.745 0 1.073.258 1.19.46.117.204.176.617-.199 1.264a2.65 2.65 0 00.977 3.617l1.725.987c1.159.685 2.63.265 3.302-.864l.114-.198c.375-.647.764-.803 1-.803.234 0 .62.155.99.8l.002.003.11.19.004.008c.672 1.129 2.143 1.55 3.302.864l1.725-.987a2.647 2.647 0 00.98-3.613l-.003-.004c-.375-.647-.316-1.06-.2-1.263.118-.204.446-.461 1.191-.461a2.656 2.656 0 002.65-2.65v-1.76a2.656 2.656 0 00-2.65-2.65c-.745 0-1.073-.258-1.19-.46-.117-.204-.176-.617.199-1.264a2.65 2.65 0 00-.977-3.617l-1.724-.987c-1.16-.685-2.63-.265-3.303.865l-.114.197c-.375.647-.764.804-1 .804-.234 0-.62-.156-.99-.801l-.002-.003-.11-.19-.004-.007zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
              clipRule="evenodd"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Settingicon;