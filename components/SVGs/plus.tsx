// REACT
import * as React from "react"
// TYPES
import { SVGPropType } from "@/types";


export const PlusSymbolSVG = ({ width, height, fill}: SVGPropType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
  >
    <path fill="none" d="M0 0h50v50H0z" />
    <path
      fill="none"
      stroke={fill}
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M9 25h32M25 9v32"
    />
  </svg>
)
