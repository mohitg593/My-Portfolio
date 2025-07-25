import { FaGithub } from "react-icons/fa"
import { projects } from "../lib/data"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useState } from "react";

export const ProjectsSection = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        document.documentElement.style.overflow = 'hidden';  // firefox, chrome
        document.body.scroll = "no"; // ie only
    };

    const handleCloseModal = () => {
        document.documentElement.style.overflow = 'auto';  // firefox, chrome
        document.body.scroll = "yes"; // ie only
        setSelectedProject(null);
    };
    return (
        <section id="projects" className="py-24 px-4 relative min-h-screen">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My{" "}
                    <span className="text-primary">Projects</span>
                </h2>
                {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    These are my projects
                </p> */}

                <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-12 mt-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg cursor-pointer shadow-xs card-hover"
                            onClick={() => handleOpenModal(project)}
                        >
                            <div className="h-48 overflow-hidden rounded-lg ">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>

                                <div className="flex flex-wrap gap-2 mb-4 mt-8">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            title="View project"
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        {project.githubUrl ?
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <FaGithub size={20} />
                                            </a>
                                            : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/mohitg593"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>



            {/* Modal Container */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black">
                    <div className="rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative bg-card  border-black ">
                        <div className="flex justify-between items-center p-4 border-primary border-b-3">
                            <h3 className="lg:text-xl font-bold text-muted-foreground text-md">
                                {selectedProject.title}
                            </h3>
                            <button
                                onClick={handleCloseModal}
                                className="text-muted-foreground text-3xl hover:text-primary transition-colors"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full flex justify-center bg-card px-4">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover mt-5"
                                />
                            </div>
                            <div className="lg:p-8 p-6">
                                <p className="text-muted-foreground mb-6 lg:text-base text-xs text-justify">
                                    {selectedProject.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject?.tags?.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 justify-center">
                                    {selectedProject.githubUrl &&
                                        <a
                                            href={selectedProject?.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-1/2 cosmic-button"
                                        >
                                            View Code
                                        </a>
                                    }
                                    <a
                                        href={selectedProject.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-1/2 cosmic-button"
                                    >
                                        View Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}