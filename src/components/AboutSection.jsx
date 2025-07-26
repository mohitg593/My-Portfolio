import { Briefcase, Code, Download, Mail, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <>
            <section id="about" className="py-24 px-4 relative min-h-screen">
                {" "}
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary"> Me</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">
                                Front End Developer | Ex-TCSer | Ex-Infoscion
                            </h3>

                            <p className="text-muted-foreground">
                                Front-End Developer with 3+ years of professional experience designing and building responsive 
                                web applications using React, Redux, HTML, CSS, and JavaScript. Proven track record in 
                                delivering high-quality UI with seamless API integration, and delivering 100+ production 
                                screens across multiple government and enterprise grade projects. Passionate about clean, 
                                maintainable code, responsive design, and modern React practices. Strong communicator and 
                                collaborator with proven leadership skills, collaborating with cross-functional teams and 
                                meeting tight deadlines. Always eager to learn new technologies and deliver user-focused 
                                solutions.
                            </p>

                            <p className="text-muted-foreground">
                                Strong communicator and collaborator with experience leading cross-functional teams and meeting
                                tight deadlines. Always eager to learn new technologies and deliver user-focused solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    {" "}
                                    Get In Touch{"  "}<Mail className="inline"></Mail>
                                </a>

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="cosmic-button"
                                    download={"Resume"}
                                >
                                    Download Resume{"  "}<Download className="inline"></Download>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Web Development</h4>
                                        <p className="text-muted-foreground">
                                            Creating responsive websites and web applications with
                                            modern frameworks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                        <p className="text-muted-foreground">
                                            Designing intuitive user interfaces and seamless user
                                            experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                    </div>

                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Project Management</h4>
                                        <p className="text-muted-foreground">
                                            Leading projects from conception to completion with agile
                                            methodologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}