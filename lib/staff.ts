// /lib/sponsors.ts

export type Staff = {
    name: string;
    img?: string;
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
            sha256: "08441bfb959f5d66e66576ab381f8202229feabd22c0b8334d7fec7b5eabdc03",
        },
        {
            name: "油成",
            link: "https://imych.one",
            sha256: "e14de3db1b266a70e8f8fe82ce478337ede3bb3e375bda0b5671e8d5956c7051",
        },
        {
            name: "小弘",
            sha256: "e7afb871d870a3e08ce9996498d308a9"
        },
    ],

};
