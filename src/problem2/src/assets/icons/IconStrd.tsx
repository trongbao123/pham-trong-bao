import * as React from "react"
const IconStrd = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <circle cx={12} cy={12} r={12} fill="#4BDB4B" />
        <path
            fill="#000"
            d="M18.979 14.348c.6 1.1.2 2.5-.8 3.1-1.1.6-2.5.2-3.1-.8l-4.8-8.2c-.6-1.1-.2-2.5.9-3.1 1.1-.7 2.4-.3 3.1.8l4.7 8.2Z"
            opacity={0.4}
        />
        <path
            fill="#000"
            d="M9.548 16.648c-.6 1.1-2 1.5-3.1.8-1.1-.6-1.5-2-.8-3.1l4.7-8.2c.6-1.1 2-1.5 3.1-.8 1.1.6 1.5 2 .8 3.1l-4.7 8.2Z"
            opacity={0.65}
        />
        <path
            fill="#000"
            d="M14.55 7.3c0 1.3-2.3 4.5-2.3 4.5s-2.2-3.2-2.2-4.5c0-1.3 1-2.3 2.3-2.3 1.3 0 2.2 1.1 2.2 2.3Z"
        />
    </svg>
)
export default IconStrd
