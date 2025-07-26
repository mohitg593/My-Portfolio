import { ArrowBigDown, ArrowDown, Download } from "lucide-react"
import { handleScroll } from "../lib/utils"

export const HeroSection = () => {

    return (
        <>
            <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl tracking-tight font-bold ">
                            <span className="opacity-0 animate-fade-in">Hi, I am</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1">{""} Mohit</span>
                            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">{""} Gupta</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 
                        animate-fade-in-delay-3">
                            I am a Front End Web Developer building responsive websites using modern frameworks and technologies.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="/resume.pdf" download={"Resume"}>
                                <button className="cosmic-button hover:bg-[#712cf9] hover:shadow-2xl focus:outline-2 
                            focus:outline-offset-2 focus:outline-[#712cf9] cursor-pointer"
                                    onClick={()=>window.open('/resume.pdf')}>
                                    Download Resume {""}<Download className="inline"></Download>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                    <button id="scrollButton" className="cursor-pointer" onClick={handleScroll}><ArrowDown className="h-5 w-5 text-primary"></ArrowDown></button>
                </div>
            </section>
        </>
    )
}