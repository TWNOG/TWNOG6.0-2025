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
    titanium: [
    ],
    platinum: [
    ],
    gold: [
      {
        name: "是方",
        img: "assets/sponsor/chief.png",
        link: "https://www.chief.com.tw/",
      },
      {
        name: "seiko",
        img: "assets/sponsor/seiko.svg",
        link: "https://www.seiko-sol.co.jp/",
      }
    ],
    silver: [
      {
        name: "ICANN",
        img: "assets/sponsor/icann.jpg",
        link: "https://www.icann.org/",
      }
    ],
  };
  