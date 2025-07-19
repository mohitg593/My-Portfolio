import { Navbar } from "../components/Navbar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"

export const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <ThemeToggle />
                {/* Background Effects */}
                <StarBackground />

                {/* Navbar */}
                <Navbar />

                <main>
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                </main>
            </div>

        </>
    )
}