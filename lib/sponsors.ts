// /lib/sponsors.ts

export type Sponsor = {
  name: string;
  img: string;
  link?: string;
};

export type SponsorsData = {
  [level: string]: Sponsor[];
};

export const sponsors: SponsorsData = {
  adviser: [
    {
      name: "臺北市政府資訊局",
      img: "/2025/assets/sponsor/doit_Taipei.svg",
      link: "https://doit.gov.taipei/",
    },
  ],
  host: [
    {
      name: "TWNOG 台灣網路維運社群",
      img: "/2025/assets/twnog.svg",
      link: "https://twnog.net/",
    },
    {
      name: "OCF 開放文化基金會",
      img: "/2025/assets/sponsor/ocf.svg",
      link: "https://ocf.tw/",
    },
  ],
  cohost: [
    {
      name: "資訊聯盟",
      img: "/2025/assets/sponsor/isaroc.svg",
      link: "https://isaroc.org/",
    },
  ],
  titanium: [
  ],
  platinum: [
    {
      name: "Chunghwa Telecom",
      img: "/2025/assets/sponsor/cht.svg",
      link: "https://www.cht.com.tw",
    },
    {
      name: "Chunghwa Telecom",
      img: "/2025/assets/sponsor/twix.png",
      link: "https://www.cht.com.tw/home/enterprise/products-services/internet-voice/enterprise-line/451",
    },
    {
      name: "Chunghwa Telecom",
      img: "/2025/assets/sponsor/cht_cdn.svg",
      link: "https://www.cht.com.tw",
    },
    {
      name: "JPIX",
      img: "/2025/assets/sponsor/jpix.svg",
      link: "https://www.jpix.ad.jp/",
    },
    {
      name: "Nokia",
      img: "/2025/assets/sponsor/nokia.png",
      link: "https://www.nokia.com/",
    },
    {
      name: "APNIC",
      img: "/2025/assets/sponsor/apnic.svg",
      link: "https://apnic.net/",
    },
    {
      name: "ISOC Taipei",
      img: "/2025/assets/sponsor/isoc_Taipei.svg",
    }
  ],
  gold: [
    {
      name: "FLEXOPTIX GmbH",
      img: "/2025/assets/sponsor/flexoptix.svg",
      link: "https://www.flexoptix.net/"
    },
    {
      name: "CHIEF 是方",
      img: "/2025/assets/sponsor/chief.svg",
      link: "https://www.chief.com.tw/",
    },
    {
      name: "seiko",
      img: "/2025/assets/sponsor/seiko.svg",
      link: "https://www.seiko-sol.co.jp/",
    },
    {
      name: "Arista Network",
      img: "/2025/assets/sponsor/arista.svg",
      link: "https://www.arista.com/en/",
    },
    {
      name: "殷諾科技",
      img: "/2025/assets/sponsor/inno-tech.png",
      link: "https://www.inno-tech.com.tw/",
    },
    {
      name: "Opengear",
      img: "/2025/assets/sponsor/opengear.svg",
      link: "https://opengear.com/",
    },
    {
      name: "Equinix",
      img: "/2025/assets/sponsor/equinix.svg",
      link: "https://www.equinix.com/",
    },
    {
      name: "BBIX",
      img: "/2025/assets/sponsor/bbix.svg",
      link: "https://www.bbix.net/",
    },
    {
      name: "Sky Digital",
      img: "/2025/assets/sponsor/sky.svg",
      link: "https://imcloud.tw/",
    },
    {
      name: "Kentik",
      img: "/2025/assets/sponsor/kentik.svg",
      link: "https://www.kentik.com/",
    },
    {
      name: "Amazon Web Service",
      img: "/2025/assets/sponsor/aws.svg",
      link: "https://aws.amazon.com/",
    },
    {
      name: "JPNAP",
      img: "/2025/assets/sponsor/jpnap.svg",
      link: "https://www.jpnap.net/en/",
    },
    {
      name: "DE-CIX",
      img: "/2025/assets/sponsor/decix.svg",
      link: "https://www.de-cix.net/",
    },
  ],
  silver: [
    {
      name: "ICANN",
      img: "/2025/assets/sponsor/icann.svg",
      link: "https://www.icann.org/",
    },
    {
      name: "Cymru",
      img: "/2025/assets/sponsor/cymru.png",
      link: "https://www.team-cymru.com/",
    },
  ],
  workshop: [
    {
      name: "Google",
      img: "/2025/assets/sponsor/google.svg",
      link: "https://peering.google.com/",
    },
    {
      name: "APNIC",
      img: "/2025/assets/sponsor/apnic.svg",
      link: "https://apnic.net/",
    },
  ],
  internet: [
    {
      name: "TWAREN (Taiwan Advanced Research & Education Network)",
      img: "/2025/assets/sponsor/twaren.svg",
      link: "https://www.twaren.net/",
    },
    // {
    //   name: "國立臺灣大學計算機及資訊網路中心",
    //   img: "/2025/assets/sponsor/ntu.png",
    //   link: "https://www.cc.ntu.edu.tw/",
    // },
    // {
    //   name: "國立臺灣大學醫學院附設醫院資訊室",
    //   img: "/2025/assets/sponsor/ntu.png",
    //   link: "https://www.ntuh.gov.tw/mis/Index.action",
    // },
    {
      name: "台灣智慧光網",
      img: "/2025/assets/sponsor/taifo.png",
      link: "https://www.taifo.com.tw/",
    },
    {
      name: "CHIEF 是方",
      img: "/2025/assets/sponsor/chief.svg",
      link: "https://www.chief.com.tw/",
    },
    {
      name: "TPIX",
      img: "/2025/assets/sponsor/tpix.svg",
      link: "https://www.tpix.net.tw/",
    },
    {
      name: "Hurricane Electric",
      img: "/2025/assets/sponsor/he.webp",
      link: "https://he.net/",
    },
    {
      name: "National Center for High-performance Computing",
      img: "/2025/assets/sponsor/nchc.svg",
      link: "https://www.nchc.org.tw/",
    },
    {
      name: "福爾摩沙開放網際網路交換中心",
      img: "/2025/assets/sponsor/fox.svg",
      link: "https://www.fox.net.tw/",
    },
    {
      name: "TWNIC",
      img: "/2025/assets/sponsor/twnic.svg",
      link: "https://www.twnic.tw/",
    },
  ],
  special_thanks: [
    {
      name: "方格子創意",
      img: "/2025/assets/sponsor/lighthouse.svg",
      link: "https://lighthousecc.tw/",
    },
  ]
};
