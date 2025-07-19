import { useState } from "react"
import { categories, skills } from "../lib/data"
import { cn } from "../lib/utils"

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <>
            <section id="skills" className="py-24 px-4 min-h-screen relative bg-secondary/30 ">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My <span className="text-primary">Skills</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category, key) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "button font-bold px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer hover:bg-secondary",
                                    activeCategory === category
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary/70 text-foreground hover:bg-secondary hover:text-primary"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="justify-center flex flex-wrap gap-4">
                        {filteredSkills.map((skill, key) => (
                            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover hover:bg-primary/40 hover:text-white">
                                <div className="text-center ">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    <img src={skill.src} width={50} height={30} className="mx-auto my-auto"></img>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}