import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const handleScroll = () => {
        const scrollButton = document.getElementById('scrollButton');

        scrollButton.addEventListener('click', () => {
            const viewportHeight = window.innerHeight;
            window.scrollBy({
                top: viewportHeight,
                left: 0,
                behavior: 'smooth' // Optional: for smooth scrolling
            });
        });
    }