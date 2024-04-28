// REACT
import * as React from "react"
// TYPES
import { SVGPropType } from "@/types";


export const PaintBrushSVG = ({ width, height, fill}: SVGPropType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
    fill={fill}
  >
    <path d="M36 8V6c0-1.1-.9-2-2-2H10c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-2h2v8H18v22c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V24h16V8h-6z" />
  </svg>
);
