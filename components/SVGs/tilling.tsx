// REACT
import * as React from "react"
// TYPES
import { SVGPropType } from "@/types";


export const TillingSVG = ({ width, height, fill}: SVGPropType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
    fill={fill}
  >
    <g fill="#241F20">
      <path d="M0 0h12v12H0zM18 0h12v12H18zM36 0h12v12H36zM0 18h12v12H0zM18 18h12v12H18zM36 18h12v12H36zM0 36h12v12H0zM18 36h12v12H18zM36 36h12v12H36z" />
    </g>
  </svg>
)
