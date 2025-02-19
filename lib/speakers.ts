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
        sessionIds: ["054b12", "c11a30"]
    },
    {
        name: "Jack Wang",
        id: "8a34ea",
        bio: "TWNOG Chair",
        sessionIds: ["054b12"]
    },
    {
        name: "測試",
        id: "d1a35d",
        bio: "hahahahaha",
        sessionIds: ["054b12"]
    }
];
