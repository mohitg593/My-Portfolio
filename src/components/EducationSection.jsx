import { education } from "../lib/data"

export const EducationSection = () => {
    return (
        <>
            <section id="education" className="py-24 px-4 relative min-h-screen">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My{" "}
                        <span className="text-primary">Education</span>
                    </h2>
                    {/* {education.map((edu, index) => (
                        <>
                            <div className="md:min-w-full">
                                <div className="flex flex-row mx-45 justify-center items-center gap-10 pt-5">
                                    <img src={edu.img} className="w-20" fill="var(--color-primary)" />
                                    <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full">
                                        <div className="h-fit px-5 py-8 overflow-hidden text-left">
                                            <div className="flex justify-between">
                                                <h3 className="text-xl font-bold">
                                                    {edu.degree}
                                                </h3>
                                                <h3 className="text-xl font-bold">
                                                    {edu.date}
                                                </h3>
                                            </div>
                                            <div className="flex justify-between">
                                                <p>{edu.school}</p>
                                                <p>{edu.grade}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))} */}
                    <div className="grid grid-cols-1 gap-8">
                        {education.map((edu, key) => (
                            <>
                                <div key={key} className="flex flex-row items-center justify-center gap-8">
                                    <div className="overflow-hidden">
                                        <img src={edu.img} className="w-20" />
                                    </div>
                                    <div className="h-fit py-8 group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full">
                                        <div className="overflow-hidden mx-10">
                                            <div className="flex justify-between font-semibold text-xl ">
                                                <h3>{edu.degree}</h3>
                                                <p className="text-muted-foreground">
                                                    {edu.date}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden mx-10 pt-2">
                                            <div className="flex justify-between">
                                                <h3>{edu.school}</h3>
                                                <p className="text-muted-foreground">
                                                    Grade: {edu.grade}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>

                        ))}
                    </div>
                </div>



            </section>
        </>
    )
}