import { FaGraduationCap } from "react-icons/fa"

export const EducationSection = () => {
    return (
        <>
            <section id="education" className="py-24 px-4 relative min-h-screen">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My{" "}
                        <span className="text-primary">Education</span>
                    </h2>
                </div>
                <div className="flex flex-row mx-25 justify-center">
                    <FaGraduationCap size={50} fill="var(--color-primary)"/>
                    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover fit-content">
                        {"gsgsgg"}
                    </div>
                </div>
            </section></>
    )
}