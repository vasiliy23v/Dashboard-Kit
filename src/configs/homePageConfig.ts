import vec1 from "../images/1.svg"
import vec2 from "../images/2.svg"
import vec4 from "../images/4.svg"
import vec7 from "../images/7.svg"

export type ConfigItem = { title: string,iconSrc:string, isActive:boolean, path:string }
export const NAVIGATION_CONFIG: ConfigItem[]  = [
    {
        title: "Overview",
        iconSrc: vec1,
        isActive: true,
        path: '/',

    },
    {
        title: "Tickets",
        iconSrc: vec2,
        isActive: false,
        path: '/tickets',
    },
    {
        title: "Contacts",
        iconSrc: vec4,
        isActive: false,
        path: '/contacts',
    },
    {
        title: "Settings",
        iconSrc: vec7,
        isActive: false,
        path: '/settings',
    },

]