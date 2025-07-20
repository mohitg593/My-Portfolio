import { Navbar } from "../components/Navbar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { EducationSection } from "../components/EducationSection"
import { WorkExperienceSection } from "../components/WorkExperienceSection"
import { CertificationsSection } from "../components/CertificationsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Home = () => {
    
    return (
        <>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                {/* Background Effects */}
                <StarBackground />

                {/* Navbar */}
                <Navbar />

                <main>
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <WorkExperienceSection />
                    <EducationSection />
                    <ProjectsSection />
                    <CertificationsSection />
                    <ContactSection />
                    <Footer />
                </main>
            </div>
        </>
    )
}