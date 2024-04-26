import * as React from "react"
const IconWsth = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <circle cx={12} cy={12} r={11.5} fill="#fff" stroke="url(#b)" />
            <path
                fill="#FF0079"
                d="M11.998 20.5 17 13.442l-5.002 2.96L7 13.441l4.998 7.058Z"
            />
            <path
                fill="#424242"
                d="m11.998 3.5 4.999 8.31-4.998 2.961L7 11.811 11.998 3.5Z"
            />
        </g>
        <defs>
            <linearGradient
                id="b"
                x1={12}
                x2={12}
                y1={0}
                y2={24}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#464043" />
                <stop offset={1} stopColor="#FD0077" />
            </linearGradient>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default IconWsth
