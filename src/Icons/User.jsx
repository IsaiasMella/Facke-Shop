import * as React from "react"

const User = ({ stroke, widthUser = 29, heightUser = 29 }) => (
    <svg
        width={widthUser}
        height={heightUser}
        strokeWidth={1.52}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000"
    >
        <path
            d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default User