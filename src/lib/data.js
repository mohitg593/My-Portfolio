export const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend", src: "../public/images/html.png" },
    { name: "JavaScript", level: 90, category: "frontend", src: "../public/images/js.png" },
    { name: "React", level: 90, category: "frontend", src: "../public/images/react.png" },
    { name: "TypeScript", level: 85, category: "frontend", src: "../public/images/ts.png" },
    { name: "Tailwind CSS", level: 90, category: "frontend", src: "../public/images/tailwind.png" },

    // Backend
    { name: "Node.js", level: 80, category: "backend", src: "../public/images/node.png" },
    { name: "Express", level: 75, category: "backend", src: "../public/images/express.png" },
    { name: "MongoDB", level: 70, category: "backend", src: "../public/images/mongo.png" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools", src: "../public/images/git.png" },
    { name: "GitHub", level: 90, category: "tools", src: "../public/images/github.png" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "Figma", level: 85, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
];

export const categories = ["all", "frontend", "backend", "tools"]

export const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work Experience", href: "#work" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#cert" },
    { name: "Contact", href: "#contact" },
];

export const projects = [
    {
        id: 1,
        title: "Passport Sewa Project 2.0",
        description: "PSP",
        image: "./public/images/psp.png",
        tags: ["HTML", "CSS", "React"],
        demoUrl: "https://www.passportindia.gov.in/psp",
    },
    {
        id: 2,
        title: "MEADOWS",
        description: "PSP",
        image: "./public/images/meadows.jpeg",
        tags: ["HTML", "CSS", "React"],
        demoUrl: "https://videshapps.gov.in/videsh/",
        githubUrl: "",
    },
    {
        id: 3,
        title: "Passport Sewa Project 2.0",
        description: "PSP",
        image: "././",
        tags: ["HTML", "CSS", "React"],
        demoUrl: "",
        githubUrl: "cn",
    },
    {
        id: 4,
        title: "Passport Sewa Project 2.0",
        description: "PSP",
        image: "../public/images/tailwind.png",
        tags: ["HTML", "CSS", "React"],
        demoUrl: "",
        githubUrl: "",
    },
]


export const education = [
    {
        id: 0,
        img: "glaLogo",
        school: "GLA University, Mathura",
        date: "Sept 2022 - July 2024",
        grade: "7.81 CGPA",
        degree: "Master of Computer Applications - MCA",
    },
    {
        id: 1,
        img: "Logo",
        school: "BSA College, Mathura",
        date: "Sept 2018 - Aug 2021",
        grade: "73.2%",
        degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
        id: 2,
        img: "",
        school: "Vatsalya Public School Govardhan, Mathura",
        date: "Apr 2017 - March 2018",
        grade: "78%",
        degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
        id: 3,
        img: "",
        school: "Vatsalya Public School Govardhan, Mathura",
        date: "Apr 2015 - March 2016",
        grade: "87.5%",
        degree: "CBSE(X), Science with Computer Application",
    },
];