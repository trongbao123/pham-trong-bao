import * as React from "react"
const IconZill = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <circle cx={12} cy={12} r={12} fill="#49C1BF" />
        <path
            fill="#80D4D2"
            fillRule="evenodd"
            d="m6 5.055 9.554 4.43L18 8.432 8.485 4 6 5.055Z"
            clipRule="evenodd"
        />
        <path
            fill="#BFE9E8"
            fillRule="evenodd"
            d="M15.554 9.476 18 8.42v2.358l-2.446 1.055V9.476Z"
            clipRule="evenodd"
        />
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M6 5.057v2.385l6.613 3.074L6 13.655v2.35l9.554 4.424v-2.366L9.065 15.04l6.489-3.195V9.488L6 5.058Z"
            clipRule="evenodd"
        />
        <path
            fill="#BFE9E8"
            fillRule="evenodd"
            d="M15.554 20.411 18 19.356v-7.37l-2.446 1.067v7.358Z"
            clipRule="evenodd"
            opacity={0.8}
        />
    </svg>
)
export default IconZill
