// /lib/speakers.ts

export type Speaker = {
    name: string;
    img?: string;
    bio?: string;
    link?: string;
    id?: string;
    org?: string;
    sessionIds: string[];
};

export const speakers: Speaker[] = [
    {
        id: "947198",
        name: "Yin Chao",
        bio: "Chao Yin Loong has more than 20 years in the video and network industry. He started his career at MediaCorp Singapore where he implemented the first DVB-T network in South East Asia. He has worked at Cisco Systems implementing various OTT video streaming infrastructure for customers. Currently he is a Principal Solution Architect with Tencent CDN Edge One and Video-On Demand product architecture team. He has helped customer architect solutions to protect both their web and video streaming infrastructure. He also has experience in API security and fingerprinting solutions.",
        img: "/assets/speakers/947198.jpeg",
        org: "Tencent",
        sessionIds: ["328a5c"]
    },
    {
        id: "a4b848",
        name: "Sam Sham",
        bio: "Sam is the head of Asia Operations in RETN AS9002 for Asia region since 2018. He specializes in IP/DWDM operations and peering/network planning strategy. Within 5 years. the capacity of RETN in Asia has been increased from a few of 10Gs to near 1T in total.",
        img: "/assets/speakers/a4b848.jpg",
        org: "RETN",
        sessionIds: ["4c8828"]
    },
    {
        id: "51e0f3",
        name: "Philip Paeps",
        bio: "Philip Paeps (“Trouble”) is a consultant based in Hong Kong. He provides research and development on low-level software and operating systems, particularly in an embedded or real-time context. His main interests are bootloaders, device drivers, security and high-performance networking. He can also be convinced to teach courses and workshops on a variety of networking-related topics.\n\r\nIn his so-called free time, Philip is a FreeBSD committer contributing mainly to the kernel and a member of the FreeBSD security team. He was one of the main organisers of FOSDEM, the largest annual open source software conference in Europe, from the early 2000s until 2015. He denies having any involvement with amateur radio or tabletop role playing games.",
        img: "/assets/speakers/51e0f3.jpeg",
        org: "Alternative Enterprises",
        sessionIds: ["6cc2d0", "bea9e5"]
    },
    {
        id: "d6cca4",
        name: "Paresh Khatri",
        bio: "Paresh Khatri is the CTO and Chief Architect for the IP Networks Division for Nokia Corporation in APAC.  In this role, Paresh is responsible for formulating platform and architecture strategies to meet the varied demands of operators in the Asia-Pacific region.  He has been responsible for architectural design for the largest IP transformation projects in the region, and is now working closely with service providers as they address the growing demand for scale and new services that will be enabled by the evolution to 5G/6G, AI workloads and the metaverse. \n\r\nParesh’s areas of expertise include the entire range of IP/MPLS technologies and applications, from the network core to the access network.  His current areas of interest include 5G transport, coherent routing, network slicing, segment routing and other SDN technologies.\n\r\nParesh has more than 27 years of experience with both service providers and vendors in building carrier-grade IP/MPLS networks.\n\r\nParesh is a regular speaker at industry conferences in the APAC region and also actively participates in a number of telecommunications industry standards bodies. \n\r\nParesh holds a Bachelors of Electronic Systems Engineering (First Class Honours) and a Bachelor of Information Technology from the Queensland University of Technology.",
        img: "/assets/speakers/d6cca4.jpg",
        org: "Nokia",
        sessionIds: ["babd97"]
    },
    {
        id: "d4f24f",
        name: "Diane Lee",
        bio: "With 20+ years of networking and data communication experience, worked with service providers in North America and APAC on various solutions.",
        org: "Nokia",
        sessionIds: ["e284f9"]
    },
    {
        id: "4a91ef",
        name: "Masataka Mawatari",
        bio: "Masataka Mawatari is chief engineer at JPIX.  He is in charge of the IX network operation and route server.\r\nHe contributes to JANOG, APIX as a Steering Committee and the other engineers' communities.",
        img: "/assets/speakers/4a91ef.jpg",
        org: "JPIX",
        sessionIds: ["c11a30"]
    },
    {
        id: "9b3894",
        name: "Charles Li",
        bio: "Charles Li is the Chief Analyst at TeamT5. He leads the TeamT5 analyst team in threat intelligence research. He has been studying cyber attacks and campaign tracking for more than 10 years. His research interests include vulnerability research, reverse engineering and APT attacks. He often publishes research and gives training courses at security conferences.",
        org: "TeamT5",
        sessionIds: ["1e4ec4"]
    },
    {
        id: "66a8a3",
        name: "Gerry Lu",
        bio: "",
        org: "Arista",
        sessionIds: ["36c72a"]
    },
    {
        id: "cf09c2",
        name: "Stanley Tee",
        bio: "From 2014 to 2016, Stanley Tee served as Chairman of the Singapore Association of Hong Kong (SAHK), an organization that fosters recreation, social integration, and networking for Singaporeans in Hong Kong while promoting Singapore’s developments to the local community. Stanley has a distinguished career spanning the semiconductor, telecommunications, and cybersecurity industries, with a focus on solution sales in the Asian market. His expertise lies in business development, market expansion, and tackling complex challenges. Known for his integrity, loyalty, and honesty, Stanley has built a strong reputation among colleagues and clients alike. With over 25 years of experience across various industries, including semiconductor and telecommunications, Stanley continues to make a significant impact in both business and community service.",
        img: "/assets/speakers/cf09c2.jpg",
        org: "Nexusguard",
        sessionIds: ["babd97"]
    },
    {
        id: "96ca22",
        name: "Lim Chin Chye",
        bio: "Chin Chye is VP, Connectivity & Ecosystem Partnership at Zenlayer. He leads the cloud interconnect, IP peering, connectivity and partnership activities in Africa, APAC and Middle East regions. Chin Chye has 20 years of telecommunication experience with various global and regional providers such as Fujitsu, StarHub, PCCW Global and Zenlayer.",
        img: "/assets/speakers/96ca22.png",
        org: "Zenlayer",
        sessionIds: ["421a22"]
    },
    {
        id: "9f4d2e",
        name: "Bastien Claeys",
        bio: "",
        org: "Nokia",
        sessionIds: ["ab0b95"]
    },
    {
        id: "c94563",
        name: "Daiki Yamada",
        bio: "",
        org: "LINE",
        sessionIds: ["3fa4d4"]
    },
    {
        id: "9b4c48",
        name: "Vincent Boon",
        bio: "Vincent Boon has over 30 years of experience in the IT and networking industry, working with enterprise and data center customers within Asia Pacific. His focus has been in DCIM, Infrastructure, Access and Power Solutions, working with clients such as Smart Nation, Tata Communications, Standard Chartered Bank, Equinix and many more. Technology has always been a keen interest and his previous roles within technology companies have involved him working closely with product and engineering teams in providing productive solutions to customers. He joined Opengear at the beginning of 2018 and brings his expertise to assist customers on the next generation Out-of-Band solutions and Network Automation for managing IT infrastructure, First Day, Worst Day and Everyday.",
        img: "/assets/speakers/9b4c48.jpg",
        org: "Opengear",
        sessionIds: ["9d1b78"]
    },
    {
        id: "489943",
        name: "Thomas Weible",
        bio: "Thomas Weible is the creative brain of FLEXOPTIX. A real rebel who dreams up innovations such as the FLEXBOX. He dives deep into the inner life of optics and loves experimenting on real-life problems with our customers. For more than 15 years he has been part of the internet community and has specialized in optical networking.",
        img: "/assets/speakers/489943.jpg",
        org: "FLEXOPTIX",
        sessionIds: ["c603ad"]
    },
    {
        id: "e013ab",
        name: "Ivan Tsay",
        bio: "I’m Ivan Tsay, the Director of the Development Department at Nexusguard Limited. I lead a dynamic and innovative team focused on developing cybersecurity and network defense solutions, specializing in DNS security and DDoS protection. With a strong background in programming and network security, I am passionate about enhancing digital resilience and ensuring the reliability of our security services.",
        org: "Nexusguard",
        sessionIds: ["2f0af7"]
    },
    {
        id: "e83cf9",
        name: "Yik Ho Kwok",
        bio: "Experienced in network product management and technical evaluation, with deep knowledge of Taiwan’s network industry and infrastructure. Skilled in IP resource management, network planning, and industry collaboration with Google, Facebook, and AWS. Proficient in network technologies and market trends, ensuring balanced technical and business evaluations.",
        org: "TWM",
        sessionIds: ["babd97"]
    },
    {
        id: "95238e",
        name: "Leo Lee",
        bio: "",
        img: "/assets/speakers/95238e.jpg",
        org: "EPI",
        sessionIds: ["96b1f8"]
    },
    {
        id: "385cd4",
        name: "Yuanxiang Miao",
        bio: "Peering Manager at JPIX.",
        img: "/assets/speakers/385cd4.png",
        org: "JPIX",
        sessionIds: ["babd97"]
    },
    {
        id: "a39c17",
        name: "Scott Fisher",
        bio: "Scott Fisher has worked at Team Cymru for 13 years in various leadership roles in Operations and Engineering. Currently he is a Senior Security Evangelist on the Community Outreach team, working with network operator community to better protect their networks. Prior to working at TC, Scott worked in the telecommunication space managing AAA/RADIUS, MMSC, SMSC, and gateway services.",
        img: "/assets/speakers/a39c17.jpg",
        org: "Team Cymru",
        sessionIds: ["1e4ec4"]
    }
];
