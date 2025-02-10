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
      img: "/assets/twnog.png",
      link: "https://twnog.net/",
    },
    {
      name: "OCF 開放文化基金會",
      img: "/assets/sponsor/ocf.svg",
      link: "https://ocf.tw/",
    }
  ],
  titanium: [
  ],
  platinum: [
  ],
  gold: [
    {
      name: "CHIEF 是方",
      img: "/assets/sponsor/chief.png",
      link: "https://www.chief.com.tw/",
    },
    {
      name: "seiko",
      img: "/assets/sponsor/seiko.svg",
      link: "https://www.seiko-sol.co.jp/",
    },
    // {
    //   name: "FLEXOPTIX GmbH",
    //   img: "",
    //   link: "https://www.flexoptix.net/"
    // },
  ],
  silver: [
    {
      name: "ICANN",
      img: "/assets/sponsor/icann.jpg",
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
      img: "/assets/sponsor/apnic.png",
      link: "https://apnic.net/",
    }
  ],
};
