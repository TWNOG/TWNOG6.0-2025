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
        name: "小易",
        id: "26c993",
        link: "https://steveyi.net/",
        // img: "/assets/speakers/26c993.jpg",
        bio: "小易是一位學生，擁有非常豐富的網路經驗！目前興趣是網路治理研究、網際網路技術及虛擬化等等。之前曾在跨國公司擔任 SRE 實習生，設計 CI/CD 及維運 Kubernetes。目前則是在進行 SDN/NFV 相關的技術研究。",
        sessionIds: ["c11a30"]
    },
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
        bio: "Chao Yin Loong has more than 20 years in the video and network industry. He started his career at MediaCorp Singapore where he implemented the first DVB-T network in South East Asia. He has worked at Cisco Systems implementing various OTT video streaming infrastructure for customers. Currently he is a Principal Solution Architect with Tencent CDN Edge One and Video-On Demand product architecture team. He has helped customer architect solutions to protect both their web and video streaming infrastructure. He also has experience in API security and fingerprinting solutions.",
        sessionIds: []
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
