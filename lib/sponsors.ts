// /lib/sponsors.ts

export type Sponsor = {
  name: string;
  img: string;
  link: string;
};

export type SponsorsData = {
  [level: string]: Sponsor[];
};

export const sponsors: SponsorsData = {
  host: [
    {
      name: "TWNOG 台灣網路維運社群",
      img: "/assets/twnog.svg",
      link: "https://twnog.net/",
    },
    {
      name: "OCF 開放文化基金會",
      img: "/assets/sponsor/ocf.svg",
      link: "https://ocf.tw/",
    },
  ],
  titanium: [
  ],
  platinum: [
    {
      name: "APNIC",
      img: "/assets/sponsor/apnic.svg",
      link: "https://apnic.net/",
    },
    {
      name: "JPIX",
      img: "/assets/sponsor/jpix.svg",
      link: "https://www.jpix.ad.jp/",
    },
  ],
  gold: [
    {
      name: "FLEXOPTIX GmbH",
      img: "/assets/sponsor/flexoptix.svg",
      link: "https://www.flexoptix.net/"
    },
    {
      name: "CHIEF 是方",
      img: "/assets/sponsor/chief.svg",
      link: "https://www.chief.com.tw/",
    },
    {
      name: "seiko",
      img: "/assets/sponsor/seiko.svg",
      link: "https://www.seiko-sol.co.jp/",
    },
    {
      name: "Arista Network",
      img: "/assets/sponsor/arista.svg",
      link: "https://www.arista.com/en/",
    },
    {
      name: "殷諾科技",
      img: "/assets/sponsor/inno-tech.png",
      link: "https://www.inno-tech.com.tw/",
    },
  ],
  silver: [
    {
      name: "ICANN",
      img: "/assets/sponsor/icann.svg",
      link: "https://www.icann.org/",
    }
  ],
  workshop: [
    {
      name: "Google",
      img: "/assets/sponsor/google.svg",
      link: "https://peering.google.com/",
    },
    {
      name: "APNIC",
      img: "/assets/sponsor/apnic.svg",
      link: "https://apnic.net/",
    },
  ],
  internet: [
    // {
    //   name: "TWAREN (Taiwan Advanced Research & Education Network)",
    //   img: "/assets/sponsor/twaren.png",
    //   link: "https://www.twaren.net/",
    // },
    // {
    //   name: "國立臺灣大學計算機及資訊網路中心",
    //   img: "/assets/sponsor/ntu.png",
    //   link: "https://www.cc.ntu.edu.tw/",
    // },
    // {
    //   name: "國立臺灣大學醫學院附設醫院資訊室",
    //   img: "/assets/sponsor/ntu.png",
    //   link: "https://www.ntuh.gov.tw/mis/Index.action",
    // },
    // {
    //   name: "國立臺灣大學醫學院資訊組",
    //   img: "/assets/sponsor/ntumi.png",
    //   link: "https://www.mc.ntu.edu.tw/ntumi/Index.action",
    // },
    // {
    //   name: "台灣智慧光網",
    //   img: "/assets/sponsor/taifo.png",
    //   link: "https://www.taifo.com.tw/",
    // },
    {
      name: "CHIEF 是方",
      img: "/assets/sponsor/chief.svg",
      link: "https://www.chief.com.tw/",
    },
    {
      name: "TPIX",
      img: "/assets/sponsor/tpix.svg",
      link: "https://www.tpix.net.tw/",
    },
    {
      name: "Hurricane Electric",
      img: "/assets/sponsor/he.png",
      link: "https://he.net/",
    },
    // {
    //   name: "福爾摩沙開放網際網路交換中心",
    //   img: "/assets/sponsor/fox.png",
    //   link: "https://www.fox.net.tw/",
    // },
  ]
};
