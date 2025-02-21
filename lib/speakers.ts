// /lib/speakers.ts

export type Speaker = {
    name: string;
    img?: string;
    bio?: string;
    link?: string;
    id?: string;
    sessionIds: string[];
};

export const speakers: Speaker[] = [
    {
        name: "Jack Wang",
        id: "8a34ea",
        bio: "TWNOG Chair",
        sessionIds: []
    },
    {
        name: "",
        id: "d1a35d",
        bio: "",
        sessionIds: []
    },
    {
        name: "Yin Chao",
        id: "4c42a9",
        bio: `Chao Yin Loong has more than 20 years in the video and network industry.
      He started his career at MediaCorp Singapore where he implemented the first DVB-T network in South East Asia.
      He has worked at Cisco Systems implementing various OTT video streaming infrastructure for customers.
      
      Currently he is a Principal Solution Architect with Tencent CDN Edge One and Video-On Demand product architecture team. 
      He has helped customer architect solutions to protect both their web and video streaming infrastructure. 
      He also has experience in API security and fingerprinting solutions.`,
        img: "/assets/speakers/4c42a9.jpg",
        sessionIds: ["ab0b95"]
    },
    {
        name: "小易",
        id: "26c993",
        link: "https://steveyi.net/",
        img: "/assets/speakers/26c993.jpg",
        bio: `I am TsungYi Yu, also known as SteveYi.

My interests include Internet Governance research, Network Technologies, and virtualization design. I am deeply involved in the Internet governance field and have participated in numerous domestic and international conferences, such as APNIC 54/56, the ICANN APAC-TWNIC Engagement Forum, and the Taiwan Internet Governance Forum (TWIGF). I am very passionate about my areas of interest, whether it’s public policy or the information sector, and I always invest a lot of time in engaging deeply in every activity. I have also served as a speaker at many of these conferences.

In terms of technical expertise, I specialize in Networking SRE (Site Reliability Engineering) and Deployment, and I have considerable experience with On-Premise Kubernetes. If you have any related questions or would like to discuss these topics, feel free to contact me by email!

<li>steveyi</li>
`,
        sessionIds: ["c11a30", "ab0b95"]
    },
    {
        name: "",
        id: "c11bff",
        bio: "",
        sessionIds: []
    },
    {
        name: "",
        id: "e1ee6a",
        bio: "",
        sessionIds: []
    },
    {
        name: "",
        id: "eb8533",
        bio: "",
        sessionIds: []
    },
    {
        name: "",
        id: "d0b79d",
        bio: "",
        sessionIds: []
    },
    {
        name: "",
        id: "2e75dd",
        bio: "",
        sessionIds: []
    },
    {
        name: "",
        id: "041f27",
        bio: "",
        sessionIds: []
    }
];
