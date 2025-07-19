import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "../lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navItems } from "../lib/data";


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300 bg-background/95", isScrolled ? "py-3 bg-background/80 shadow-xs" : "")}
        >
            <div className="container flex items-center justify-between ">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <img src="favicon.ico" className="w-18" />
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <>
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-bold active:color-red-500"
                            >
                                {item.name}
                            </a>
                        </>
                    ))}
                    <a href=""><FaLinkedin className="my-auto hover:text-primary" size={25} /></a>
                    <a href=""><FaGithub className="my-auto mx-auto hover:text-primary" size={25} /></a>
                </div>

                {/* mobile nav */}

                <button onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <span className="flex gap-6 justify-center">
                            <a href=""><FaLinkedin className="my-auto mx-auto hover:text-primary" size={25} /></a>
                            <a href=""><FaGithub className="my-auto mx-auto cursor-pointer hover:text-primary" size={25} /></a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};