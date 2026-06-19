const teamMembers = [
    {
        id: 1,
        slug: "basil-udotai",
        link: "http://localhost:3000/attorney/basil-udotai",
        name: "Basil Udotai Esq.",
        role: "Founding Partner & Lead Consultant",
        image: "/images/team/basil-udotai.jpeg",
        introduction: "Nigeria’s “Father of Technology Law”",
        bio: `Basil Udotai is the Lead Consultant and Founding Partner of Johnson & Wilner LLP. He is widely 
        recognized as Nigeria’s “Father of Technology Law” for his pioneering contributions to the development 
        of legal and regulatory frameworks in cybersecurity, data protection, and the digital economy.\n\n
        With a distinguished career spanning over two decades in both public service and private practice, 
        Basil previously served as Director of Cybersecurity at the Office of the National Security Adviser (ONSA), 
        where he played a central role in shaping Nigeria’s national cybersecurity strategy. He also served as 
        General Counsel and Legal Adviser to the National Information Technology Development Agency (NITDA), 
        driving key initiatives in internet governance, data privacy, and technology policy.|\n\n Among his notable
         achievements is his instrumental role in the harmonization and drafting of the Cybercrimes (Prohibition, 
         Prevention, etc.) Act 2015, as well as providing strategic legal counsel on major national technology 
         infrastructure projects. He has advised various government agencies and international organizations on 
         technology law, regulatory compliance, and digital transformation.\n\nAt Johnson & Wilner LLP, Basil leads 
         the firm’s Technology Policy and Cybersecurity practice. He advises both local and international clients on 
         complex regulatory matters, digital economy policy, high-stakes technology transactions, and strategic legal 
         solutions at the intersection of law, technology, and business. He is passionate about innovation management 
         and continues to bridge the gap between emerging technologies and sound legal governance.
        `,
        experiences: [
            "Former Director of Cybersecurity, Office of the National Security Adviser (ONSA)",
            "Former General Counsel, National Information Technology Development Agency (NITDA)",
            "Pioneer Head of the Directorate for Cybersecurity",
            "Key architect of the Cybercrimes Act 2015",
            "Legal advisor on major national technology infrastructure projects",
            "Pioneer in internet governance and data protection policy in Nigeria",
        ],
        expertise: ["Technology Policy", "Cybersecurity", "Data Governance", "Digital Regulation"],
        email: "basil@johnsonandwilner.com",
        phone: "+234 816 005 1310",
        linkedin: "https://www.linkedin.com/in/basiludotai/",
        mainPartner: true,
    },
    {
        id: 2,
        slug: "rotimi-ogunyemi",
        link: "http://localhost:3000/attorney/rotimi-ogunyemi",
        name: "Rotimi Ogunyemi",
        role: "Strategic Partner, AI & Emerging Technologies",
        image: "/images/team/rotimi-ogunyemi.jpg",
        introduction: "Nigeria’s “Father of Technology Law”",
        bio: "Rotimi Ogunyemi is the Lead Consultant at Johnson & Wilner LLP. He served as the Director of Cybersecurity at the Office of the National Security Adviser...",
        experiences: [
            "Former Director of Cybersecurity, Office of the National Security Adviser",
            "Former General Counsel, National Information Technology Development Agency (NITDA)",
            "Pioneer Head of the Directorate for Cybersecurity"
        ],
        expertise: ["Technology Policy", "Cybersecurity", "Data Governance", "Digital Regulation"],
        email: "rotimi@johnsonandwilner.com",
        phone: "+234 816 005 1310",
        linkedin: "https://linkedin.com/in/rotimiogunyemi",
        mainPartner: true,
    },
    {
        id: 3,
        slug: "senator-ihenyen",
        link: "http://localhost:3000/attorney/senator-ihenyen",
        name: "Senator Ihenyen",
        role: "Strategic Partner, Payment Systems & FinTech",
        image: "/images/team/senator-ihenyen.jpg",
        introduction: "Nigeria’s “Father of Technology Law”",
        bio: "Senator Ihenyen is the Lead Consultant at Johnson & Wilner LLP. He served as the Director of Cybersecurity at the Office of the National Security Adviser...",
        experiences: [
            "Former Director of Cybersecurity, Office of the National Security Adviser",
            "Former General Counsel, National Information Technology Development Agency (NITDA)",
            "Pioneer Head of the Directorate for Cybersecurity"
        ],
        expertise: ["Technology Policy", "Cybersecurity", "Data Governance", "Digital Regulation"],
        email: "senator@johnsonandwilner.com",
        phone: "+234 816 005 1310",
        linkedin: "https://linkedin.com/in/senatorihenyen",
        mainPartner: true,
    },
    {
        id: 4,
        slug: "joseph-nwobike",
        link: "http://localhost:3000/attorney/joseph-nwobike",
        name: "Dr. Joseph Nwobike, SAN",
        role: "Of Counsel",
        image: "/images/team/joseph-nwobike-2.jpeg",
        introduction: "Nigeria’s “Father of Technology Law”",
        bio: "Dr. Joseph Nwobike is the Lead Consultant at Johnson & Wilner LLP. He served as the Director of Cybersecurity at the Office of the National Security Adviser...",
        experiences: [
            "Former Director of Cybersecurity, Office of the National Security Adviser",
            "Former General Counsel, National Information Technology Development Agency (NITDA)",
            "Pioneer Head of the Directorate for Cybersecurity"
        ],
        expertise: ["Technology Policy", "Cybersecurity", "Data Governance", "Digital Regulation"],
        email: "joseph@johnsonandwilner.com",
        phone: "+234 816 005 1310",
        linkedin: "https://linkedin.com/in/josephnwobike",
        mainPartner: true,
    },
    {
        id: 5,
        slug: "edidiong-idiong",
        link: "http://localhost:3000/attorney/edidiong-idiong",
        name: "Edidiong Idiong",
        role: "Of Counsel",
        image: "/images/team/edidiong-idiong.jpg",
        introduction: "Nigeria’s “Father of Technology Law”",
        bio: "Edidiong Idiong is the Lead Consultant at Johnson & Wilner LLP. He served as the Director of Cybersecurity at the Office of the National Security Adviser...",
        experiences: [
            "Former Director of Cybersecurity, Office of the National Security Adviser",
            "Former General Counsel, National Information Technology Development Agency (NITDA)",
            "Pioneer Head of the Directorate for Cybersecurity"
        ],
        expertise: ["Technology Policy", "Cybersecurity", "Data Governance", "Digital Regulation"],
        email: "edidiong@johnsonandwilner.com",
        phone: "+234 816 005 1310",
        linkedin: "https://linkedin.com/in/abdulmalikmuhaimin",
        mainPartner: true,
    },
    {
        id: 6,
        slug: "muhaimin-abdulmalik",
        link: "http://localhost:3000/attorney/muhaimin-abdulmalik",
        name: "Muhaimin Abdulmalik",
        role: "Affiliate Counsel",
        image: "/images/team/malik-muhaimin.jpeg",
        introduction: "Nigeria’s “Father of Technology Law”",
        bio: `I build privacy programmes from scratch and operate them at the level a data-driven company actually 
        needs. \n\n As a data protection and technology lawyer based in Abuja, I've spent six years at the intersection 
        of regulatory compliance, AI governance, and fintech advisory across Nigerian, European, and US privacy frameworks. 
        I established and lead the privacy and data protection practice at Chesslaw Consult, where I design end-to-end 
        compliance programmes: NDPA 2023 audits, DPIAs, AI governance frameworks, DSR workflows, third-party vendor risk 
        assessments, and board-level privacy reporting simultaneously, across multiple clients, in multiple jurisdictions.\n\n
        I hold a CIPP/E certification and I understand the NDPA the way most practitioners understand GDPR from the inside, operationally, not just theoretically. I know what the NDPC is actually doing in enforcement, what the gaps in the guidance still are, and how a company needs to position itself before those gaps close.`,
        experiences: [
            "Led the privacy programme for a US incorporated company with cross boarder operations (GDPR + NDPA + US law): mapped 19 processing activities, raised 22 findings including an autonomous AI pipeline processing biometric data without human oversight, redesigned the AI workflow with the engineering team, and closed all findings in 10 weeks.",
            "Served as core counsel to the Bureau of Public Procurement in a World Bank-funded e-GP technology dispute (≈$6.2M / ₦9.3B), reviewing international procurement instruments and leading cross-examination of key witnesses.",
            "Designed and delivered a technology contract management curriculum for the BPP's legal and IT departments a direct precedent for building internal legal playbooks for a government institution.",
            "Speaker at the 7th Privacy Symposium Africa 2025 on biometric data and digital ID governance. Regular speaker and facilitator at NIALS, EdgeRise DPCO webinars, DPLAN, and NDPA enforcement forums.",
        ],
        expertise: ["Technology Policy", "Cybersecurity", "Data Governance", "Digital Regulation"],
        email: "mulik@johnsonandwilner.com",
        phone: "+234 814 182 5161",
        linkedin: "https://www.linkedin.com/in/muhaiminabdulmalik",
        mainPartner: true,
    },
    {
        id: 7,
        slug: "fortune-ugwumba",
        link: "http://localhost:3000/attorney/fortune-ugwumba",
        name: "Fortune Ugwumba",
        role: "Senior Associate",
        image: "/images/team/fortune-ugwumba.jpeg",
        introduction: "Fortune is a Senior Associate at Johnson & Wilner LLP, specializing in technology law, data governance, and digital regulation across African markets.",
        bio: `Fortune Ugwumba is a technology lawyer specializing in technology transactions, data governance, 
        digital economy regulation, and emerging technology policy in Africa. With over six years’ post-qualification 
        experience, his practice sits at the intersection of law, innovation, and digital policy, advising on how 
        legal and regulatory frameworks can enable secure, rights-respecting, and innovation-driven digital 
        ecosystems.\n\n He holds a Bachelor of Laws (LL.B) from the University of Abuja and was called to the Nigerian 
        Bar.\n\n Fortune currently serves as a Senior Associate at Johnson & Wilner LLP, a business and technology 
        law firm based in Abuja. In this role, he advises private sector clients, public institutions, and 
        technology-driven enterprises on regulatory compliance, digital infrastructure governance, and the legal 
        implications of adopting frontier technologies across African markets.\n\n His work focuses particularly 
        on the design and implementation of governance frameworks that address data protection, cross-border data 
        flows, digital sovereignty considerations, and the responsible deployment of emerging technologies including 
        artificial intelligence.`,
        experiences: [
            "Structuring and advisory on technology infrastructure concession arrangements with implications for national digital systems and data control.",
            "Advising on technology transfer protocols and cross-border regulatory considerations, including IP risk.",
            "Supporting organizations in the development and implementation of internal technology governance and data management policies.",
            "Providing regulatory compliance advisory on the adoption and deployment of emerging technologies, with particular focus on risk mitigation and alignment with evolving legal standards.",
            "Advising startups and growth-stage companies on navigating regulatory obligations in data-driven business models"
        ],
        expertise: ["Data Governance and Privacy", "Data Governance & Privacy", "AI and Emerging Technology", "Technology Policy"],
        email: "fortune@johnsonandwilner.com",
        phone: "+234 813 005 0395",
        linkedin: "https://linkedin.com/in/fortuneugwumba",
        mainPartner: true,
    },
    {
        id: 8,
        slug: "favour-nwadibie",
        link: "http://localhost:3000/attorney/favour-nwadibie",
        name: "Favour Nwadibie",
        role: "Associate",
        image: "/images/team/favour-nwadibie.jpeg",
        introduction: "Favour is an Associate at Johnson & Wilner LLP, specialising in business and technology law.",
        bio: `Favour Nwadibie is a multi-talented legal practitioner specialising in business and technology law. Her 
        professional experience spans regulatory compliance, technology contracts, data protection and privacy, digital 
        platform governance and technology policy.\n\n She graduated with First Class Honours from the Nigerian Law School 
        and was recognised as the Best Graduating Student, Faculty of Law, University of Calabar, Class of 2023. She 
        currently serves as an Associate at Johnson & Wilner LLP, a business and technology law firm based in Abuja. In 
        this role, she advises clients across both public and private sectors on data protection compliance, technology 
        contract risks, regulatory obligations, and the legal architecture required to operate responsibly in Nigeria's 
        digital economy. \n\n Her work increasingly focuses on helping organizations navigate complex regulatory 
        environments while leveraging technology responsibly and sustainably. She is passionate about the role of 
        law and policy in shaping Africa's digital future and regularly engages in research, writing, and public 
        conversations on technology law and governance.`,
        experiences: [
            "Advising on technology and digital infrastructure projects involving public institutions and private enterprises.",
            "⁠Supporting clients in identifying and managing legal and regulatory risks associated with technology adoption and digital transformation initiatives.",
            "Drafting, reviewing and negotiation of technology agreements, and advising clients on commercial transactions.",
            "⁠Assisting clients in navigating regulatory compliance obligations across technology, corporate, and innovation-driven sectors.",
            "Advising on technology procurement processes, contract structuring, and regulatory compliance obligations.",
            "⁠Conducting legal research and regulatory analysis on emerging technologies, Artificial Intelligence, digital platforms, and innovation-focused business models.",
        ],
        expertise: ["Technology Contracts", "Cybersecurity", "Data Governance & Privacy", "Digital Regulation"],
        email: "favour@johnsonandwilner.com",
        phone: "+234 806 493 6802",
        linkedin: "https://linkedin.com/in/favournwadibie",
        mainPartner: true,
    },
    {
        id: 9,
        slug: "Lauretta-umeh",
        link: "http://localhost:3000/attorney/lauretta-umeh",
        name: "Lauretta Oluchi Umeh",
        role: "Associate",
        image: "/images/team/lauretta-umeh.jpeg",
        introduction: "Nigeria’s “Father of Technology Law”",
        bio: `
        Lauretta Oluchi Umeh is an Associate at Johnson & Wilner LLP, a business and technology law firm, where she 
        advises startups, brands, and creators on the legal foundations that enable them to build, operate, and 
        grow with confidence.\n\n Her practice spans intellectual property law, corporate structuring, tech law, and 
        commercial contracts, with a particular focus on supporting early-stage businesses and creative entrepreneurs 
        navigating Nigeria's evolving legal and regulatory landscape.\n\n Lauretta holds a Bachelor of Laws from the
         University of Abuja (2023) and was called to the Nigerian Bar in 2025 following completion of the Nigerian 
         Law School programme. She brings a sharp research background and a practical, business-oriented approach 
         to legal advisory — translating complex legal requirements into clear, actionable guidance for her clients.
        `,
        experiences: [
            "Advised startups on business registration requirements, regulatory compliance, and optimal business structure selection, enabling founders to make informed decisions at the formation stage.",
            "Drafted and reviewed founders' agreements, establishing clear governance structures and protecting the interests of all founding parties from the outset.",
            "Advised creators and creative entrepreneurs on intellectual property rights, including copyright ownership, licensing arrangements, and strategies for protecting their work in digital and commercial contexts.",
            "⁠Provided legal research and consulting support to brands and creators on contractual rights and compliance obligations."
        ],
        expertise: ["Technology Policy"],
        email: "lauretta@johnsonandwilner.com",
        phone: "+2349067384770",
        linkedin: "https://linkedin.com/in/laurettatumeh",
        mainPartner: true,
    },

    // Add more members here...
];

module.exports = teamMembers;   // For CommonJS compatibility