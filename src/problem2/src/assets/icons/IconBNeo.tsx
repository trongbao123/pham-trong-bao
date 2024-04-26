import * as React from "react"
const IconBNeo = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <circle cx={12} cy={12} r={12} fill="url(#a)" />
        <path
            fill="#fff"
            d="M18.26 17.753 13.363 5.911C13.086 5.299 12.675 5 12.134 5h-.433c-.541 0-.952.299-1.228.91L8.34 11.07H6.728a.884.884 0 0 0-.877.878v.01a.886.886 0 0 0 .877.878h.866L5.56 17.753c-.038.108-.06.22-.06.336 0 .276.086.493.239.66.153.169.373.251.65.251a.868.868 0 0 0 .504-.168c.156-.108.265-.265.35-.444l2.24-5.556h1.553a.884.884 0 0 0 .878-.877v-.022a.886.886 0 0 0-.877-.877h-.83l1.71-4.26 4.66 11.588c.086.18.194.336.35.444a.878.878 0 0 0 .505.168c.276 0 .492-.082.65-.25.156-.168.238-.384.238-.66a.783.783 0 0 0-.06-.333Z"
        />
        <defs>
            <linearGradient
                id="a"
                x1={20.947}
                x2={3.091}
                y1={4.472}
                y2={19.496}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#B6509E" />
                <stop offset={1} stopColor="#2EBAC6" />
            </linearGradient>
        </defs>
    </svg>
)
export default IconBNeo
