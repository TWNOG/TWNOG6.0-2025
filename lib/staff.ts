// /lib/staff.ts

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
            sha256: "a92633a1784e8d4fa137838db2f60b13481b320a370ec9c9a745e02ffbf71e7f",
        },
        {
            name: "Kams Yeung",
            sha256: "920ff150fbafd58ce44c8b204c1cf0afa0592ef8dff6aab05ec9528105a84acb",
        },
        {
            name: "Jack Wang",
            sha256: "cfe375873089983546297545f9d53707433ab4bdcaf39e0f3ed1c675cbea6287",
        },
        {
            name: "Louk Chi",
            sha256: "d89be084cbff2f20df01c25423771cbfa9dfc6a10ce924350a4cfebd969f3e82",
        },
        {
            name: "小易",
            sha256: "636ffb648cf0eb979f6d3449c6aced1f",
            link: "https://steveyi.net/",
        },
        {
            name: "Yong-Tin",
            sha256: "b6e1404d87bbd1acea4f4a213ef6061a3113c19de6e08c841b216e3649d0f7ff",
        },
        {
            name: "Jack Kwok",
            sha256: "1326dbb6a8beeb206e2750babba773881476b3d7bcc8f9a0bcdc9c85a7c2b9a5",
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
            sha256: "e7afb871d870a3e08ce9996498d308a9",
        },
        {
            name: "小易",
            sha256: "636ffb648cf0eb979f6d3449c6aced1f",
            link: "https://steveyi.net/",
        },
        {
            name: "Brian Jhan",
            sha256: "90f53dc4897b548484c9d1a8d45a397053ee0e14da9c8996481896bd77ea773e",
        },
        {
            name: "Makito Lay",
            sha256: "4a9fb526820f71be7df7dd8822b3c29a443e9a2b6397d6153e460525fd18486c",
        },
        {
            name: "Yi Kuo",
            sha256: "520438a37ad035a7bd2ddd1ca0999863",
        },
        {
            name: "Wei-Ting",
            sha256: "1764af732f88bf9512bd4770276f15330de39149100404288949352677816201",
        },
    ],
    image: [
        {
            name: "小弘",
            sha256: "e7afb871d870a3e08ce9996498d308a9",
        },
        {
            name: "御痕",
            sha256: "54fc23d386050bddbdf318272137a2fc7e42856e61bda71647b7be1942a3b262",
        },
        {
            name: "Brian Jhan",
            sha256: "90f53dc4897b548484c9d1a8d45a397053ee0e14da9c8996481896bd77ea773e",
        },
        {
            name: "竺原",
            sha256: "078d4f7476d88199377c8a84a1a260f10b860269ebc83889ced05a29bf0d72ed",
            link: "https://zhuyuan.tw",
        },
    ],
};
