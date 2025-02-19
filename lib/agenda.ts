// /lib/agenda.ts

export type Agenda = {
    id: string;
    time?: string;
    name?: string;
    type?: string;
    location?: string;
    description?: string;
};

export const agenda: Agenda[] = [
    {
        id: "054b12",
        time: "09:00 - 09:20",
        name: "Welcome Remark",
        type: "Keynote",
        location: "402",
        description: "大會開幕致詞，說明本次活動流程與注意事項。",
    },
    {
        id: "c11a30",
        time: "09:30 - 10:50",
        name: "Session A",
        type: "Presentation",
        location: "402",
        description: "TBD",
    },
    {
        id: "bea9e5",
        time: "10:50 - 11:10",
        name: "Coffee Break",
    },
    {
        id: "ab0b95",
        time: "11:10 - 12:30",
        name: "One Fingerprint to rule them all",
        type: "Presentation",
        location: "402",
        description: "DDOS attacks are becoming very common against network operators. They are many mitigation techniques at the network layer. This talk aims to show a unique and effective method using fingerprint technology across the whole stack and also its use in client side and server side technologies.",
    },
    {
        id: "02e348",
        time: "12:30 - 13:30",
        name: "Lunch Break",
    },
    {
        id: "c603ad",
        time: "13:30 - 15:00",
        name: "Session C",
        type: "Presentation",
        location: "402",
        description: "TBD",
    },
    {
        id: "36c72a",
        time: "15:00 - 15:20",
        name: "Coffee Break",
    },
    {
        id: "421a22",
        time: "15:20 - 17:00",
        name: "Session D",
        type: "Presentation",
        location: "402",
        description: "TBD",
    },
    { id: "3fa4d4", time: "TBD", name: "Peering Personal" },
    { id: "8f797b", time: "TBD", name: "Close Remark" },
];
