
export const WorkExperienceSection = () => {
    return (
        <>
            <section id="work" className="py-24 px-4 relative min-h-screen">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My{" "}
                        <span className="text-primary">Work Experience</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-8">
                        <div className="flex flex-row items-center justify-center gap-8">
                            <div className="overflow-hidden">
                                <img src="./public/images/mea.png" className="w-20 h-20" />
                            </div>
                            <div className="h-fit py-8 group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full">
                                <div className="overflow-hidden mx-10">
                                    <div className="flex justify-between font-semibold text-xl ">
                                        <h3>Frontend Developer</h3>
                                        <p className="text-muted-foreground">
                                            February, 2024 - Present
                                        </p>
                                    </div>
                                </div>
                                <div className="overflow-hidden mx-10">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold">Ministry of External Affairs</h3>

                                    </div>
                                    <div className="text-muted-foreground text-left pt-4">
                                        Role Description:
                                        <p>1. Leading the frontend development of internal portals, ensuring responsive, scalable, and user-friendly interfaces using React.js, JavaScript (ES6+), HTML5, and CSS3.
                                            <br />2. Designed and implemented 50+ dynamic screens, maintaining UI consistency and improving user experience across departments.
                                            <br />3. Integrated 100+ RESTful APIs with efficient state management using Redux and Context API, enabling seamless data interaction across modules.
                                            <br />4. Assigned as Team Lead, managing task allocation, mentoring junior developers, and ensuring on-time delivery of high-priority projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-8">
                            <div className="overflow-hidden">
                                <img src="./public/images/tcs.png" className="w-20 h-20" />
                            </div>
                            <div className="h-fit py-8 group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full">
                                <div className="overflow-hidden mx-10">
                                    <div className="flex justify-between font-semibold text-xl ">
                                        <h3>Systems Engineer</h3>
                                        <p className="text-muted-foreground">
                                            July, 2022 - November, 2023
                                        </p>
                                    </div>
                                </div>
                                <div className="overflow-hidden mx-10">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold">Tata Consultancy Services (TCS)</h3>

                                    </div>
                                    <div className="text-muted-foreground text-left pt-4">
                                        Role Description:
                                        <p>1. Collaborated with 5+ cross-functional teams to gather and implement project requirements, ensuring smooth coordination and timely delivery.
                                            <br />2. Designed and developed 30+ responsive and reusable UI screens using React.js, ensuring consistent UI/UX across multiple modules.
                                            <br />3. Integrated 50+ RESTful APIs with the frontend to enable dynamic, data-driven functionality across the application.
                                            <br />4. Led a team of 5 developers to build a key module from scratch, meeting tight deadlines while demonstrating strong team leadership and time management skills.
                                            <br />5. Collaborated closely with backend, QA, and product teams in an Agile environment to align development with business objectives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-8">
                            <div className="overflow-hidden">
                                <img src="./public/images/infosys.svg" className="w-20 h-20" />
                            </div>
                            <div className="h-fit py-8 group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full">
                                <div className="overflow-hidden mx-10">
                                    <div className="flex justify-between font-semibold text-xl ">
                                        <h3>Systems Engineer Trainee</h3>
                                        <p className="text-muted-foreground">
                                            February, 2022 - May, 2022
                                        </p>
                                    </div>
                                </div>
                                <div className="overflow-hidden mx-10">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold">Infosys</h3>

                                    </div>
                                    <div className="text-muted-foreground text-left pt-4">
                                        Role Description:
                                        <p>1. Developed a book exchange web application with 10+ screens using React JS
                                            <br/>2. Worked as team lead for the project
                                            <br/>3. Undertook requirements gathering and building use cases for the project
                                            <br/>4. Used Git for version control and code repository among team members
                                            <br/>5. Developed and Integrated 20+ APIs with the front end
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