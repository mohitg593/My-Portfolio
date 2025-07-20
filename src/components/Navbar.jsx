import { Menu, Sun, X, Moon, Droplet } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "../lib/utils";
import { FaGithub, FaLinkedin, FaSun } from "react-icons/fa";
import { navItems } from "../lib/data";
import { ThemeContext } from "../Contexts/ThemeContext";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
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
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 font-bold active:color-red-500"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a href="https://linkedin.com/in/mohitg593" target="_blank"><FaLinkedin className="my-auto hover:text-primary" size={25} /></a>
                    <a href="https://github.com/mohitg593" target="_blank"><FaGithub className="my-auto mx-auto hover:text-primary" size={25} /></a>
                    <button title="Switch Theme" className="cursor-pointer"
                        onClick={toggleTheme}

                    >
                        {isDarkMode ? (
                            <FaSun className="h-6 w-6 text-yellow-300" />
                        ) : (
                            <Moon className="h-6 w-6 text-blue-900" fill="blue-900" />
                        )}
                    </button>


                    {/* <button title="Change Theme Color" className="cursor-pointer"
                        onClick={toggleTheme}

                    >
                        {isDarkMode ? (
                            <Droplet className="h-6 w-6 text-yellow-300" fill="orange"/>
                        ) : (
                            <Moon className="h-6 w-6 text-blue-900" />
                        )}
                    </button>
                    */}

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
                            <a href="https://linkedin.com/in/mohitg593" target="_blank"><FaLinkedin className="my-auto mx-auto hover:text-primary" size={25} /></a>
                            <a href="https://github.com/mohitg593" target="_blank"><FaGithub className="my-auto mx-auto cursor-pointer hover:text-primary" size={25} /></a>
                            <button title="Switch Theme"
                                onClick={toggleTheme}
                                className="cursor-pointer"
                            >
                                {isDarkMode ? (
                                    <FaSun className="h-6 w-6 text-yellow-300" />
                                ) : (
                                    <Moon className="h-6 w-6 text-blue-900" />
                                )}
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};