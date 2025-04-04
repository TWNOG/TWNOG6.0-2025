// /lib/agenda.ts

export type Agenda = {
    id: string;
    time?: string;
    name?: string;
    type?: string;
    location?: string;
    description?: string;
    presentation?: string;
    slido?: string;
};

export const agenda: Agenda[] = [
    {
        id: "0f3e1b",
        time: "08:30 - 09:00",
        name: "Registration",
        type: "Break",
        location: "402",
        description: "Registration for the conference.",
    },
    {
        id: "054b12",
        time: "09:00 - 09:20",
        name: "Welcome Remark",
        type: "Keynote",
        location: "402",
        description: "Welcome remarks for the conference, explaining the event schedule and important notes.",
    },
    {
        id: "c11a30",
        time: "09:20 - 09:40",
        name: "The functions in IX Route Server at present, then future...",
        type: "Presentation",
        location: "402",
        description: "This presentation will provide JPIX updates first, what JPIX did about our Route Server and statistics we can see on our Route Server.\r\nAfter introducing the basic functions of IX route servers, I would like to have a discussion for making our multilateral peering on IX route server better.",
    },
    {
        id: "bea9e5",
        time: "09:40 - 10:05",
        name: "The RouteViews Project: Update",
        description: "RouteViews was initiated in 1995 at the University of Oregon to allow network operators see what their routing tables looked like from an external perspective. Over the years since, this community project has set up collectors in strategic locations around the world, allowing network operators a rich view of their routing announcements, and researchers a valuable resource for tracking the growth and variations in the global Internet infrastructure.\n\r\nThis presentation introduces the new team behind RouteViews, and shares the new latest developments in the project, now operated on behalf of the global Internet community by the Network Startup Resource Center (NSRC). Some of the developments are a new Peering Policy, How to use the RouteViews system as a network operator and what are we working on for the future.",
    },
    {
        id: "ab0b95",
        time: "10:05 - 10:25",
        name: "Building data centres based on open standards",
        type: "Presentation",
        location: "402",
        description: "Data centers are undergoing a transformation driven by the push for standardisation and the shift away from proprietary solutions. This effort seeks to eliminate vendor lock-in, enhance interoperability, and foster innovation across the industry.\r\n  By reviewing emerging technologies, this talk emphasises how standardisation enhances scalability, reduces costs, and ensures a more sustainable and adaptable data center ecosystem.",
    },
    {
        id: "02e348",
        time: "10:30 - 10:50",
        name: "Break",
        type: "Break"
    },
    {
        id: "c603ad",
        time: "10:50 - 11:10",
        name: "Analyzing network reliability up to 800G - Impact of SNR thresholds on BER for Coherent (16QAM) and Non-Coherent (PAM4) high speed transceivers under environmental variations",
        type: "Presentation",
        location: "402",
        description: "This presentation investigates the proximity to a low Signal-to-Noise Ratio (SNR) threshold that can still maintain a tolerable Bit Error Rate (BER) in 100G / 400G / 800G network links. Additionally, we account for factors such as temperature and cable length to predict the duration for which a reliable network connection can be sustained between transceivers. The analysis, based on data retrieved using a Flexbox, focuses on comparing the reliability of coherent (16QAM) and non-coherent (PAM4) transceivers, with a detailed discussion on the implications of these technologies on network performance. \r\nMade by FLEXOPTIX Research - Gerhard and Thomas.",
    },
    {
        id: "36c72a",
        time: "11:10 - 11:25",
        name: "AI Networking",
        type: "Presentation",
        location: "402",
        description: "Today, AI applications is broader to the world, particular in Generative AI.\r\nIt consume lots of GPU resource and need the large network to interconnect GPU communication.\n\r\nArista is sophisticated in HPC/AI large network, and providing a large/stable/visibility network to support customer business to grow up.",
    },
    {
        id: "421a22",
        time: "11:25 - 11:40",
        name: "Cloud Networking",
        type: "Presentation",
        location: "402",
        description: "Intorduce what is Cloud Networking and the service application and deployment examples",
    },
    {
        id: "3fa4d4",
        time: "11:40 - 11:55",
        name: "Traffic Optimization for LINE Taiwan Users",
        type: "Presentation",
        location: "402",
        description: "This presentation will present on the optimization for LINE service in Taiwan.\n In detail, we will introduce the network design, peering, new year traffic trend and operation, LINE CDN service.",
    },
    {
        id: "8f797b",
        time: "11:55 - 12:00",
        name: "PEERING PERSONALS",
        type: "Presentation",
        location: "402",
        description: "TBD",
    },
    {
        id: "820995",
        time: "12:00 - 13:20",
        name: "Lunch Break",
        type: "Break",
    },
    {
        id: "e284f9",
        time: "13:20 - 13:40",
        name: "Unleashing the power of containerization for network testing and development",
        type: "Presentation",
        location: "402",
        description: "TBD",
    },
    {
        id: "6cc2d0",
        time: "13:40 - 14:05",
        name: "DNS & DNSSEC operational best practices - Sleep better at night with KINDNS in your network!",
        type: "Presentation",
        location: "402",
        description: "The Domain Name System (DNS) is a critical part of the Internet infrastructure.  DNS translates the domain names of websites and email addresses that people can remember to the IP addresses that computers can understand.  It is a large distributed system with many moving parts.\n\r\nKINDNS is simple framework for stable and secure DNS operations.  The KINDNS guidelines are current best practices for DNS operators to improve the security and reliability of their operations."
    },
    {
        id: "2f0af7",
        time: "14:05 - 14:25",
        name: "DNS Under Siege: Protecting Against Advanced Threats",
        type: "Presentation",
        location: "402",
        description: "Domain Name System (DNS) plays a foundational role in a Communication Service Provider (CSP) environment, such as telecoms, ISPs, or other network-based service providers, in order for CSP to efficiently route user requests and providing secure internet access. However, protecting DNS in a Communication Service Provider (CSP) network is challenging due to the critical nature of DNS services, the high volume of traffic, and the variety of threats targeting DNS infrastructure.\n\r\nThis presentation will cover the DDoS attacks to DNS resolvers and authoritative servers, its impact and challenges for CSPs, and finally, strategies for defending against the DNS DDoS attack."
    },
    {
        id: "1e4ec4",
        time: "14:25 - 14:40",
        name: "Threats Faced by Taiwan Telecom and their users",
        type: "Presentation",
        location: "402",
        description: "Telecom sector has been long as a major target of various cyber-attacks because of its position as an information flow center. As one of the world’s leading tech hubs, Taiwan’s telecom sector is especially facing a growing number of challenges, from cyberattacks and evolving regulatory pressures to the complex landscape shaped by global geopolitics.\n\r\nIn today’s session, we will start by exploring the threat landscape of Taiwanese telecom sector. It includes a strategic overview of telecom industry, motivations to attract threat actors, technical dissect and corresponding attack vectors. We will provide real-world case studies of state sponsored attacks that showcase the implications of the ongoing threats. \n\r\nA significant part of our discussion will focus on the emerging concept of the ORB (Operation Relab Box) network, a botnet structure network composed of various compromised devices. ORB Network has been widely adopted by various state sponsored threat actors and can effectively hinder traceback by investigators. We will introduce the concept, mechanism, and use cases in various phases of cyber-attacks, to help audience master such kind of novel threats. \n\r\nBy the end of our session, we hope to provide audiences with a clearer understanding of the current threats and the counter measure: a proactive cyber defense drive by cyber threat intelligence.",
    },
    {
        id: "328a5c",
        time: "14:40 - 14:55",
        name: "One Fingerprint to rule them all",
        type: "Presentation",
        location: "402",
        description: "DDOS attacks are becoming very common against network operators. They are many mitigation techniques at the network layer. This talk aims to show a unique and effective method using fingerprint technology across the whole stack and also its use in client side and server side technologies.",
    },
    {
        id: "b98908",
        time: "15:00 - 15:20",
        name: "Break",
        type: "Break",
    },
    {
        id: "4c8828",
        time: "15:20 - 15:40",
        name: "Network operation challenges in Taiwan",
        type: "Presentation",
        location: "402",
        description: "Discuss our network operation challenges in Taiwan and provide some suggestion and comment.",
    },
    {
        id: "96b1f8",
        time: "15:40 - 16:00",
        name: "Liquid Cooling Systems for High Power Data Center",
        type: "Presentation",
        location: "402",
        description: "The emerging AI, quantum computing require much higher power and cooling systems support. This create challenges to the traditional data center infrastructure design.  This paper will discuss, in particular, the emerging liquid cooling systems, we will discuss the main approaches, each pros and cons.",
    },
    {
        id: "9d1b78",
        time: "16:00 - 16:15",
        name: "AI-Driven IT Management",
        type: "Presentation",
        location: "402",
        description: "Out-of-band management is critical for ensuring network resiliency and minimizing downtime in environments running generative AI workloads, where uninterrupted data processing and model training are paramount. By establishing a dedicated management channel that remains operational even when the primary network is compromised or congested, out-of-band solutions allow IT teams to remotely monitor, diagnose, and remediate issues in real time. This immediate visibility and control help prevent small incidents from escalating into major disruptions, maintain service continuity for resource-intensive AI applications, and streamline troubleshooting by providing secure, isolated access to hardware and software components. In turn, organizations can ensure higher availability, faster recovery, and robust performance—key factors for hosting the demanding and continuous operations of generative AI systems.",
    },
    {
        id: "930903",
        time: "16:15 - 16:25",
        name: "PEERING PERSONALS",
        type: "Presentation",
        location: "402",
        description: "TBD",
    },
    {
        id: "0c8763",
        time: "16:25 - 16:30",
        name: "Lightning Talk",
        type: "Presentation",
        location: "402",
        description: "TBD"
    },
    {
        id: "babd97",
        time: "16:30 - 17:00",
        name: "Bridging the Talent Gap: How Can Global and Local Companies Attract and Nurture Top Internet Industry Talent in Taiwan?",
        type: "Presentation",
        location: "402",
        description: "Taiwan’s internet industry is growing rapidly, attracting both global and local companies looking for top talent. However, many companies face challenges in recruiting and retaining skilled professionals, while job seekers often struggle to navigate career opportunities in this evolving field.\n\r\nThis panel discussion brings together industry experts, HR professionals, and students to explore how companies can attract and nurture the right talent in Taiwan. We’ll discuss industry demands, essential skills, recruitment challenges, and career development strategies, offering valuable insights for both employers and aspiring professionals.",
    },
];
