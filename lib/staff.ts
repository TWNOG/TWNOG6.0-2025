// /lib/sponsors.ts

export type Staff = {
    name: string;
    img: string;
    link?: string;
    md5?: string;
};

export type StaffData = {
    [level: string]: Staff[];
};

export const staff: StaffData = {
    msg: [
        {
            name: "小易",
            img: "/assets/twnog.png",
            md5: "636ffb648cf0eb979f6d3449c6aced1f",
        },
    ],
    infra: [
        {
            name: "石頭",
            img: "/assets/twnog.png",
        },
        {
            name: "油成",
            img: "/assets/twnog.png",
            md5: "bf5797545199284bfc73b5a372f49f8c",
        },
        {
            name: "小弘",
            img: "/assets/twnog.png",
        },
        {
            name: "小易",
            img: "/assets/twnog.png",
            md5: "636ffb648cf0eb979f6d3449c6aced1f",
        },
        {
            name: "Brian Jhan",
            img: "/assets/twnog.png",
        },
        {
            name: "Makito Lay",
            img: "/assets/twnog.png",
        },
        {
            name: "Yi Kuo",
            img: "/assets/twnog.png",
        }
    ],
    image: [
        {
            name: "小弘",
            img: "/assets/twnog.png",
        },
        {
            name: "御痕",
            img: "/assets/twnog.png",
        },
        {
            name: "Brian Jhan",
            img: "/assets/twnog.png",
        }
    ],
};
