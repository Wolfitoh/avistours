import { createLucideIcon, type IconNode } from "lucide-react"

const islandIconNode = [
    ["path", { d: "M2 19c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0", key: "water" }],
    ["path", { d: "M5 16c1.5-2.5 3.8-3.7 7-3.7 3.2 0 5.5 1.2 7 3.7", key: "shore" }],
    ["path", { d: "M12 12.3V4", key: "trunk" }],
    ["path", { d: "M12 5.5C9.9 3.5 7.6 3.8 6 5.2c2.1 1.2 4 1.6 6 1", key: "left-palm" }],
    ["path", { d: "M12 5.5c2.1-2 4.4-1.7 6 .3-2.1 1.2-4 1.6-6 1", key: "right-palm" }],
    ["path", { d: "M12 8c-1.8-1.4-3.6-1.1-5 .3 1.9.8 3.5.9 5 .3", key: "lower-palm" }],
] satisfies IconNode

export const IslandIcon = createLucideIcon("Island", islandIconNode)

type CrocodileIconProps = {
    size?: number
}

export function CrocodileIcon({ size = 24 }: CrocodileIconProps) {
    return (
        <svg
            aria-hidden="true"
            className="shrink-0"
            width={size * 1.8}
            height={size}
            viewBox="3 27 66 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M46 52s17 2 19 0v-1s3-3 1-4s-5 0-5 0s-2.917-1.333-6.458-4.667c0 0-1.542-1.333-3.542.667c0 0-2-3-8-3s-24 1-24 1s-6-1 0-3s11-2 12 0c0 0-2.667-8.417-17.333-5.208C13.667 32.792 1 36 8 48c0 0 2 4 8 4z" />
            <path d="M23 47s-4.812 4-3.406 5S23 55 23 55h4l-3.032-3S26 51 27 49s0-3.24 0-3.24M40 47s-4.812 4-3.406 5S40 55 40 55h4l-3.032-3S43 51 44 49s0-3.24 0-3.24" />
            <path d="M29 52h4" />
        </svg>
    )
}
