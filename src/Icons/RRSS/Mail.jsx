import * as React from "react"

const Mail = ({stroke}) => (
  <svg
    width={29}
    height={29}
    viewBox="0 0 24 24"
    strokeWidth={1.52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#000"
  >
    <path
      d="m9 9 4.5 3L18 9M3 13.5h2m-4-3h4"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 7.5V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-.5"
      stroke={stroke}
      strokeLinecap="round"
    />
  </svg>
)

export default Mail
