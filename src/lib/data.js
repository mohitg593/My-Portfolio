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
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#contact" },
    { name: "Work Experience", href: "#contact" },
    { name: "Education", href: "#contact" },
    { name: "Contact", href: "#contact" },
];

export const projects = [
    {
        id:1,
        title: "Passport Sewa Project 2.0",
        description:"PSP",
        image:"./public/images/psp.png",
        tags:["HTML", "CSS","React"],
        demoUrl: "https://www.passportindia.gov.in/psp",
    },
    {
        id:2,
        title: "MEADOWS",
        description:"PSP",
        image:"./public/images/meadows.jpeg",
        tags:["HTML", "CSS","React"],
        demoUrl: "https://videshapps.gov.in/videsh/",
        githubUrl:"",
    },
    {
        id:3,
        title: "Passport Sewa Project 2.0",
        description:"PSP",
        image:"././",
        tags:["HTML", "CSS","React"],
        demoUrl: "",
        githubUrl:"cn",
    },
    {
        id:4,
        title: "Passport Sewa Project 2.0",
        description:"PSP",
        image:"../public/images/tailwind.png",
        tags:["HTML", "CSS","React"],
        demoUrl: "",
        githubUrl:"",
    },
]