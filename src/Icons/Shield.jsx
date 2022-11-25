import * as React from "react"

const Shield = ({ stroke }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="shield"
        width={29}
        height={29}
        viewBox="0 0 24 24"
        strokeWidth={1.52}
        stroke={stroke}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m9 12 2 2 4-4" />
        <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6 12 12 0 0 0 12 3" />
    </svg>
)

export default Shield
