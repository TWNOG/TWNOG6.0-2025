// /lib/sponsors.ts

export type Staff = {
    name: string;
    img: string;
    link?: string;
    sha256?: string;
};

export type StaffData = {
    [level: string]: Staff[];
};

export const staff: StaffData = {
    host: [
        {
            name: "小易",
            img: "/assets/twnog.png",
            sha256: "636ffb648cf0eb979f6d3449c6aced1f",
        },
    ],
    network: [
        {
            name: "石頭",
            img: "/assets/twnog.png",
        },
        {
            name: "油成",
            img: "/assets/twnog.png",
            link: "https://imych.one",
            sha256: "bf5797545199284bfc73b5a372f49f8c",
        },
        {
            name: "小弘",
            img: "/assets/twnog.png",
            sha256: "e7afb871d870a3e08ce9996498d308a9"
        },
    ],

};
