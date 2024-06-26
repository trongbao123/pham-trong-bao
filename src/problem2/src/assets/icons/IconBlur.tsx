import * as React from "react"
const IconBlur = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <circle cx={12} cy={12} r={12} fill="#1E1E1E" />
        <path
            fill="#fff"
            d="M8.13 8.235c0 .926 1.823 1.68 4.072 1.68s4.073-.754 4.073-1.68c0-.927-1.824-1.68-4.073-1.68-2.249 0-4.073.753-4.073 1.68Z"
        />
        <path
            fill="#fff"
            d="M12.221 13.15c-2.909 0-5.268-.912-5.268-2.038 0-.624.727-1.183 1.867-1.555.814.425 2.033.696 3.401.696 1.368 0 2.587-.271 3.401-.696 1.142.374 1.867.931 1.867 1.555.003 1.126-2.357 2.038-5.268 2.038Z"
        />
        <path
            fill="#fff"
            d="M12.18 17.016c-3.837 0-6.948-1.108-6.948-2.594 0-.775.848-1.474 2.204-1.966 1.058.68 2.834 1.027 4.848 1.027 1.965 0 3.703-.424 4.77-1.075 1.28.488 2.074 1.167 2.074 1.915 0 1.489-3.11 2.693-6.948 2.693Z"
        />
    </svg>
)
export default IconBlur
