import * as React from "react"
const IconEvmox = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#000"
                d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
            />
            <mask
                id="b"
                width={16}
                height={17}
                x={4}
                y={3}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "alpha",
                }}
            >
                <path
                    fill="#231F20"
                    d="m19.99 16.569-1.945-7.571-5.75-5.498v4.357l3.74 6.732 3.955 1.98Zm-8.285-8.712V3.5l-5.75 5.498-1.945 7.57 3.955-1.979 3.74-6.732Zm-3.64 7.272-3.977 1.995 7.911 2.376 7.911-2.376-3.955-1.98-7.89-.015Z"
                />
            </mask>
            <g mask="url(#b)">
                <path
                    fill="#fff"
                    d="M12.118 21.92c5.252 0 9.51-4.263 9.51-9.522 0-5.26-4.258-9.522-9.51-9.522-5.253 0-9.51 4.263-9.51 9.522s4.257 9.522 9.51 9.522Z"
                />
                <g filter="url(#c)">
                    <path
                        fill="#FF002E"
                        d="M21.627 6.934c0 4.095-3.316 7.415-7.405 7.415-4.09 0-7.406-3.32-7.406-7.415 0-4.095 3.316-7.414 7.406-7.414s7.405 3.32 7.405 7.414Z"
                    />
                </g>
                <g filter="url(#d)">
                    <path
                        fill="#FF002E"
                        d="M7.752 23.012c4.09 0 7.405-3.32 7.405-7.414 0-4.095-3.316-7.415-7.405-7.415-4.09 0-7.405 3.32-7.405 7.415 0 4.095 3.315 7.414 7.405 7.414Z"
                    />
                </g>
                <g filter="url(#e)">
                    <path
                        fill="#FFB900"
                        d="M20.925 24.339c4.09 0 7.405-3.32 7.405-7.415 0-4.095-3.315-7.414-7.405-7.414s-7.405 3.32-7.405 7.414c0 4.095 3.316 7.415 7.405 7.415Z"
                    />
                </g>
                <g filter="url(#f)">
                    <path
                        fill="#2280FF"
                        d="M3.464 14.817c4.09 0 7.406-3.32 7.406-7.414 0-4.096-3.316-7.415-7.406-7.415S-3.94 3.308-3.94 7.403c0 4.095 3.316 7.414 7.405 7.414Z"
                    />
                </g>
            </g>
        </g>
        <defs>
            <filter
                id="c"
                width={29.259}
                height={29.278}
                x={-0.408}
                y={-7.705}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur
                    result="effect1_foregroundBlur_4218_1139"
                    stdDeviation={3.612}
                />
            </filter>
            <filter
                id="d"
                width={29.259}
                height={29.278}
                x={-6.878}
                y={0.959}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur
                    result="effect1_foregroundBlur_4218_1139"
                    stdDeviation={3.612}
                />
            </filter>
            <filter
                id="e"
                width={29.259}
                height={29.278}
                x={6.296}
                y={2.285}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur
                    result="effect1_foregroundBlur_4218_1139"
                    stdDeviation={3.612}
                />
            </filter>
            <filter
                id="f"
                width={29.259}
                height={29.278}
                x={-11.165}
                y={-7.237}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur
                    result="effect1_foregroundBlur_4218_1139"
                    stdDeviation={3.612}
                />
            </filter>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default IconEvmox;
