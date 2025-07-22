export const skills = [

    //Programming Languages
    { name: "Python", category: "programming languages", src: "../public/images/python.png" },
    { name: "JavaScript", category: "programming languages", src: "../public/images/js.png" },
    { name: "TypeScript", category: "programming languages", src: "../public/images/ts.png" },
    { name: "Object Oriented Programming", category: "programming languages", src: "../public/images/code.jpg" },

    // Frontend

    { name: "React", category: "frontend", src: "../public/images/react.png" },
    { name: "Redux", category: "frontend", src: "../public/images/redux.png" },
    { name: "HTML", category: "frontend", src: "../public/images/html.png" },
    { name: "CSS", category: "frontend", src: "../public/images/css.png" },
    { name: "Bootstrap", category: "frontend", src: "../public/images/bootstrap.png" },
    { name: "Tailwind CSS", level: 90, category: "frontend", src: "../public/images/tailwind.png" },
    { name: "Responsive Web Design", category: "frontend", src: "../public/images/rwd.png" },
    { name: "Material UI", category: "frontend", src: "../public/images/mui.png" },

    /* // Backend
    { name: "Node.js", category: "backend", src: "../public/images/node.png" },
    { name: "Express", category: "backend", src: "../public/images/express.png" },
    { name: "MongoDB", category: "backend", src: "../public/images/mongo.png" }, */

    //Version Control
    { name: "Git", category: "version control", src: "../public/images/git.png" },
    { name: "GitHub", category: "version control", src: "../public/images/github.png" },
    { name: "Gitlab", category: "version control", src: "../public/images/gitlab.png" },
    { name: "Bitbucket", category: "version control", src: "../public/images/bb.png" },

    //API Communication
    { name: "Postman", category: "api communication", src: "../public/images/postman.png" },
    { name: "Fetch", category: "api communication", src: "../public/images/fetch.png" },
    { name: "RESTful APIs", category: "api communication", src: "../public/images/rest.png" },


    // Tools
    { name: "VS Code", category: "tools", src: "../public/images/vscode.png" },
    { name: "Jupyter Notebook", category: "tools", src: "../public/images/jupyter.svg" },

    // Soft Skills
    { name: "Team Leadership", category: "soft skills", src: "../public/images/leader.png" },
    { name: "Time Management", category: "soft skills", src: "../public/images/time.png" },
    { name: "Effective Communication", category: "soft skills", src: "../public/images/comm.png" },
    { name: "Agile (Kanban and Scrum)", category: "soft skills", src: "../public/images/agile.png" },
    { name: "Continuous Learning", category: "soft skills", src: "../public/images/cont.png" },
    { name: "Problem Solving", category: "soft skills", src: "../public/images/solving.png" },
];



export const categories = ["all", "programming languages", "frontend", "version control", "api communication", "tools", "soft skills"]

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
        description: "This is the Passport Portal of Government of India. The existing portal was completely revamped and built using modern technologies. This project aims to deliver seamless passport experience to citizens and enure faster and timely delivery of services.",
        image: "./public/images/psp.png",
        tags: ["HTML", "CSS", "React"],
        demoUrl: "https://www.passportindia.gov.in/psp",
    },
    {
        id: 2,
        title: "MEADOWS - Ministry of External Affairs Digital Online Working System",
        description: "This project aims to digitise various procedures of the organisation. It is developed using React, HTML and CSS. It enables employee management through APAR filing, leave records management, procurement for various sections, etc.",
        image: "./public/images/meadows.jpeg",
        tags: ["HTML", "CSS", "React"],
        demoUrl: "https://videshapps.gov.in/videsh/",
    },
]


export const education = [
    {
        id: 0,
        img: "./public/images/sbs.png",
        school: "Shaheed Bhagat Singh State Technical Campus, Ferozepur",
        date: "2018 - 2022",
        grade: "9.24 CGPA",
        degree: "B.Tech - Computer Science and Engineering",
    },
    {
        id: 1,
        img: "./public/images/bfps.png",
        school: "Baba Farid Public School, Faridkot",
        date: "2016 - 2017",
        grade: "96.8%",
        degree: "Class 12th",
    },
    {
        id: 2,
        img: "./public/images/bfps.png",
        school: "Baba Farid Public School, Faridkot",
        date: "2014 - 2015",
        grade: "10 CGPA",
        degree: "Class 10th",
    },
];

export const experience = [
    {
        id: 0,
        img: "./public/images/mea.png",
        role: "Frontend Developer",
        company: "Ministry of External Affairs",
        duration: "February, 2024 - Present",
        desc: `1. Leading the frontend development of internal portals, ensuring responsive, scalable, and user-friendly interfaces using React.js, JavaScript (ES6+), HTML5, and CSS3.
                2. Designed and implemented 50+ dynamic screens, maintaining UI consistency and improving user experience across departments.
                3. Integrated 100+ RESTful APIs with efficient state management using Redux and Context API, enabling seamless data interaction across modules.
                4. Assigned as Team Lead, managing task allocation, mentoring junior developers, and ensuring on-time delivery of high-priority projects.
                5. Collaborated closely with backend, QA, and product teams in an Agile environment to align development with business objectives.`,
    },
    {
        id: 0,
        img: "./public/images/tcs.png",
        role: "Systems Engineer",
        company: "Tata Consultancy Services (TCS)",
        duration: "July, 2022 - November, 2023",
        desc: "- B.Tech - Computer Science and Engineering\
        kfkfkfk\
        ",
    },
    {
        id: 2,
        img: "./public/images/infosys.svg",
        role: "Systems Engineer Trainee",
        company: "Infosys",
        duration: "February, 2022 - May, 2022",
        desc: "B.Tech - Computer Science and Engineering",
    },
];


export const certifications = [
    {
        id: 0,
        name: "AZ900: Azure Fundamentals - Microsoft",
        image: "./public/images/microsoft.jpg",
        url: "https://www.credly.com/badges/1c8859dc-4628-4493-8b48-55ed69a18306?source=linked_in_profile"
    },
    {
        id: 1,
        name: "CRUD Operations in MongoDB - MongoDB",
        image: "./public/images/mongodb.jpg",
        url: "https://www.credly.com/badges/d6b0155c-9850-4953-8ec7-1fc99a9ab657/linked_in_profile"
    },
    {
        id: 2,
        name: "AWS Educate Introduction to Cloud 101- Amazon Web Services",
        image: "./public/images/aws.jpg",
        url: "https://www.credly.com/badges/b8529bda-cd6e-4029-a36b-136b422f9068/linked_in_profile"
    },
    {
        id: 3,
        name: "Javascript (Basic) - Hackerrank",
        image: "./public/images/hackerrank.jpg",
        url: "https://www.hackerrank.com/certificates/21a6cc340261"
    },
    {
        id: 4,
        name: "CSS (Basic) - Hackerrank",
        image: "./public/images/hackerrank.jpg",
        url: "https://www.hackerrank.com/certificates/439e983c027c"
    },
    {
        id: 5,
        name: "Python (Basic) - Hackerrank",
        image: "./public/images/hackerrank.jpg",
        url: "https://www.hackerrank.com/certificates/28e90ace3639"
    },
    {
        id: 6,
        name: "Problem Solving (Basic) - Hackerrank",
        image: "./public/images/hackerrank.jpg",
        url: "https://www.hackerrank.com/certificates/589b99360e3b"
    },

]