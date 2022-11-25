import * as React from "react"

const SvgComponent = ({ stroke }) => (
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
            d="m2.695 7.185 9 4 .61-1.37-9-4-.61 1.37zM12.75 21.5v-11h-1.5v11h1.5zm-.445-10.315 9-4-.61-1.37-9 4 .61 1.37z"
            fill="#000"
        />
        <path
            d="M3 17.11V6.89a.6.6 0 0 1 .356-.548l8.4-3.734a.6.6 0 0 1 .488 0l8.4 3.734A.6.6 0 0 1 21 6.89v10.22a.6.6 0 0 1-.356.548l-8.4 3.734a.6.6 0 0 1-.488 0l-8.4-3.734A.6.6 0 0 1 3 17.11z"
            stroke={ stroke }
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="m7.5 4.5 8.644 3.842a.6.6 0 0 1 .356.548v3.61"
            stroke={ stroke }
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default SvgComponent
