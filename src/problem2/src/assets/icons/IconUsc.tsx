import * as React from "react"
const IconUsc = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <circle cx={12} cy={12} r={12} fill="#063C4F" />
        <path
            fill="url(#a)"
            d="M20.4 13.263c-.613 4.04-4.119 7.137-8.353 7.137C7.382 20.4 3.6 16.64 3.6 12c0-4.64 3.782-8.4 8.447-8.4 4.015 0 7.375 2.784 8.235 6.517a6.648 6.648 0 0 0-1.566-.18c-.559 0-1.088.064-1.559.178a4.737 4.737 0 0 0-4.665-3.862c-2.62 0-4.742 2.11-4.742 4.715s2.123 4.716 4.742 4.716a4.745 4.745 0 0 0 4.2-2.524 6.299 6.299 0 0 0 2.024.314c.61 0 1.183-.076 1.684-.21Z"
        />
        <path
            fill="url(#b)"
            d="M20.4 13.263c-.613 4.04-4.119 7.137-8.353 7.137C7.382 20.4 3.6 16.64 3.6 12c0-4.64 3.782-8.4 8.447-8.4 4.015 0 7.375 2.784 8.235 6.517a5.984 5.984 0 0 0-.255-.056 5.336 5.336 0 0 0-5.023-3.514c-2.946 0-5.335 2.376-5.335 5.306s2.389 5.305 5.335 5.305a5.333 5.333 0 0 0 5.126-3.83c.092-.02.182-.041.27-.065Z"
        />
        <path
            fill="url(#c)"
            fillOpacity={0.6}
            d="M6.6 11.46a6.9 6.9 0 0 0 13.539 1.888l-.015.003a5.334 5.334 0 0 1-5.12 3.807c-2.946 0-5.335-2.375-5.335-5.305 0-2.93 2.389-5.306 5.335-5.306 2.31 0 4.278 1.46 5.02 3.503.082.015.163.032.242.05A6.9 6.9 0 0 0 6.6 11.46Z"
        />
        <g fillOpacity={0.7} opacity={0.5}>
            <path
                fill="url(#d)"
                d="M12.888 19.863a8.176 8.176 0 0 0 3.797-2.974 5.344 5.344 0 0 0 2.38-1.594 7.868 7.868 0 0 1-6.177 4.568Z"
            />
            <path
                fill="url(#e)"
                d="M10.959 4.26a8.16 8.16 0 0 1 4.798 2.34c1.07.15 2.04.617 2.807 1.301a7.855 7.855 0 0 0-7.605-3.64Z"
            />
        </g>
        <defs>
            <radialGradient
                id="b"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="rotate(-57.38 19.897 3.924) scale(14.8237 28.5768)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.104} stopColor="#3A78B1" />
                <stop offset={0.52} stopColor="#4FC1C0" />
                <stop offset={1} stopColor="#8CF2FD" />
            </radialGradient>
            <radialGradient
                id="c"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(-7.01988 20.70008 -20.39211 -6.91544 20.46 .36)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.216} stopColor="#fff" stopOpacity={0.7} />
                <stop offset={0.891} stopColor="#fff" stopOpacity={0} />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </radialGradient>
            <radialGradient
                id="d"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="rotate(81.812 4.843 9.928) scale(16.8518 15.8881)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={0.301} stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </radialGradient>
            <radialGradient
                id="e"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="rotate(81.812 4.843 9.928) scale(16.8518 15.8881)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff" />
                <stop offset={0.301} stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </radialGradient>
            <linearGradient
                id="a"
                x1={16.9}
                x2={18.922}
                y1={7.722}
                y2={21.567}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#1F7494" />
                <stop offset={0.383} stopColor="#0E6585" />
                <stop offset={0.901} stopColor="#071F28" />
            </linearGradient>
        </defs>
    </svg>
)
export default IconUsc
