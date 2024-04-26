import * as React from "react"
const IconLunia = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <circle cx={12} cy={12} r={12} fill="url(#a)" />
        <path
            fill="url(#b)"
            d="M11.901 4.703v.007l.003 4.707.852 2.13-.85-.71v2.273c.004.006.009.01.013.017a16.287 16.287 0 0 0 5.027 4.188L11.9 4.703Z"
        />
        <path
            fill="url(#c)"
            d="M11.9 4.703v.007L11.9 9.417l-.852 2.13.85-.71v2.273c-.005.006-.01.01-.014.017a16.288 16.288 0 0 1-5.027 4.188l5.045-12.612Z"
        />
        <path
            fill="#F5CC02"
            d="M11.9 15.996a1.145 1.145 0 1 0 0-2.29 1.145 1.145 0 0 0 0 2.29Z"
        />
        <defs>
            <linearGradient
                id="a"
                x1={3.515}
                x2={20.487}
                y1={20.487}
                y2={3.515}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#102054" />
                <stop offset={1} stopColor="#1A45B8" />
            </linearGradient>
            <linearGradient
                id="b"
                x1={14.424}
                x2={14.424}
                y1={4.666}
                y2={17.45}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0.6} />
            </linearGradient>
            <linearGradient
                id="c"
                x1={9.38}
                x2={9.38}
                y1={17.361}
                y2={4.815}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0.6} />
            </linearGradient>
        </defs>
    </svg>
)
export default IconLunia;
