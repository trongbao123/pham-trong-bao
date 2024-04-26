import * as React from "react"
const ProductIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <path
            fill="#8787B1"
            d="M12 15h3v-3h-3m0-1.5h3v-3h-3M7.5 6h3V3h-3M12 6h3V3h-3m-4.5 7.5h3v-3h-3m-4.5 3h3v-3H3M3 15h3v-3H3m4.5 3h3v-3h-3M3 6h3V3H3v3Z"
        />
    </svg>
)
export default ProductIcon
