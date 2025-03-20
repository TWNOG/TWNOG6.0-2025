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
  cohost: [
    {
      name: "資訊聯盟",
      img: "/assets/sponsor/isaroc.svg",
      link: "https://isaroc.org/",
    },
  ],
  titanium: [
  ],
  platinum: [
    {
      name: "Chunghwa Telecom",
      img: "/assets/sponsor/cht.svg",
      link: "https://www.cht.com.tw",
    },
    {
      name: "Chunghwa Telecom",
      img: "/assets/sponsor/cht_cdn.svg",
      link: "https://www.cht.com.tw",
    },
    {
      name: "JPIX",
      img: "/assets/sponsor/jpix.svg",
      link: "https://www.jpix.ad.jp/",
    },
    {
      name: "Nokia",
      img: "/assets/sponsor/nokia.png",
      link: "https://www.nokia.com/",
    },
    {
      name: "APNIC",
      img: "/assets/sponsor/apnic.svg",
      link: "https://apnic.net/",
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
    {
      name: "Opengear",
      img: "/assets/sponsor/opengear.svg",
      link: "https://opengear.com/",
    },
    {
      name: "Equinix",
      img: "/assets/sponsor/equinix.svg",
      link: "https://www.equinix.com/",
    },
    {
      name: "BBIX",
      img: "/assets/sponsor/bbix.svg",
      link: "https://www.bbix.net/",
    },
    {
      name: "Sky Digital",
      img: "/assets/sponsor/sky.svg",
      link: "https://imcloud.tw/",
    },
    {
      name: "Kentik",
      img: "/assets/sponsor/kentik.svg",
      link: "https://www.kentik.com/",
    },
    {
      name: "Amazon Web Service",
      img: "/assets/sponsor/aws.png",
      link: "https://aws.amazon.com/",
    },
    {
      name: "Cymru",
      img: "/assets/sponsor/cymru.png",
      link: "https://www.team-cymru.com/",
    },
  ],
  // cymru.png
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
    {
      name: "TWAREN (Taiwan Advanced Research & Education Network)",
      img: "/assets/sponsor/twaren.svg",
      link: "https://www.twaren.net/",
    },
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
      img: "/assets/sponsor/he.webp",
      link: "https://he.net/",
    },
    {
      name: "National Center for High-performance Computing",
      img: "/assets/sponsor/nchc.svg",
      link: "https://www.nchc.org.tw/",
    },
    {
      name: "福爾摩沙開放網際網路交換中心",
      img: "/assets/sponsor/fox.svg",
      link: "https://www.fox.net.tw/",
    },
  ],
  special_thanks: [
    {
      name: "方格子創意",
      img: "/assets/sponsor/lighthouse.svg",
      link: "https://lighthousecc.tw/",
    },
  ]
};
