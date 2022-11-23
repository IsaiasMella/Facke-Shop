import * as React from "react"

const Arrow = ({ stroke }) => (
    <svg
        width={29}
        height={29}
        strokeWidth={1.52}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000"
    >
        <path
            d="m9 6 6 6-6 6"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default Arrow