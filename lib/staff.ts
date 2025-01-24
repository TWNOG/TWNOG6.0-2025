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
    msg: [
        {
            name: "William Lu",
            img: "/assets/twnog.png",
        },
        {
            name: "Kams Yueng",
            img: "/assets/twnog.png",
        },
        {
            name: "Jack Wang",
            img: "/assets/twnog.png",
        },
        {
            name: "Louk Chi",
            img: "/assets/twnog.png",
        },
        {
            name: "小易",
            sha256: "636ffb648cf0eb979f6d3449c6aced1f",
            link: "https://steveyi.net/"
        },
        {
            name: "Yong-Tin",
            img: "/assets/twnog.png",
        },
        {
            name: "Jack Kwok",
            img: "/assets/twnog.png",
        },
        {
            name: "Makito Lay",
            sha256: "4a9fb526820f71be7df7dd8822b3c29a443e9a2b6397d6153e460525fd18486c",
        },
    ],
    infra: [
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
        {
            name: "小易",
            sha256: "636ffb648cf0eb979f6d3449c6aced1f",
            link: "https://steveyi.net/"
        },
        {
            name: "Brian Jhan",
            img: "/assets/twnog.png",
        },
        {
            name: "Makito Lay",
            sha256: "4a9fb526820f71be7df7dd8822b3c29a443e9a2b6397d6153e460525fd18486c",
        },
        {
            name: "Yi Kuo",
            sha256: "520438a37ad035a7bd2ddd1ca0999863",
        }
    ],
    image: [
        {
            name: "小弘",
            sha256: "e7afb871d870a3e08ce9996498d308a9"
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
