import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <>
            <div>
                <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center mx-auto">
                    <div className="text-center mx-auto">
                        <p className="text-primary text-xl">Mohit Gupta</p>
                        <p>
                            &copy; {new Date().getFullYear()} All rights reserved
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <a
                        href="#hero"
                        className="p-2 rounded-full bg-primary/30 hover:bg-primary/50 text-white transition-colors"
                    >
                        <ArrowUp size={20} />
                    </a>
                    </div>

                </footer>
            </div>
        </>
    )
}