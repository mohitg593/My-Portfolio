import { Mail, Map, MapPin, Phone, Send, X } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaLocationArrow, FaTwitter } from "react-icons/fa"
import { cn } from "../lib/utils";
import { Form, FormLabel } from "react-bootstrap";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [disabledSend, setDisabledSend] = useState(true)
    const Toast = toast
    const formData = useRef();

    const handleSubmit = (e) => {

        setDisabledSend(true)
        setIsSubmitting(true)
        e.preventDefault()
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(form.email)) {
            Toast.error("Please enter a valid email address")

        }
        else {
            emailjs
                .sendForm('service_3076qwh', 'template_zn29wyn', formData.current, {
                    publicKey: 'Z7-CrgBbW3E1z28ZL',
                })
                .then(
                    () => {
                        Toast.success("Message sent successfully");
                        formData.current.reset();
                        setForm({ name: "", email: "", message: "" })
                    },
                    (error) => {
                        console.error("Error sending message:", error);
                        Toast.error(error.text + ": Failed to send message. Please try again.");
                    },
                );
        }
        setIsSubmitting(false)
        setDisabledSend(false)
    }

    useEffect(() => {
        if (form.name != "" && form.email != "" && form.message != "") {
            setDisabledSend(false)
        }
        else {
            setDisabledSend(true)
        }
    }, [form])

    const handleInputChange = (e) => {
        if (e.target.name == "name") {
            setForm({
                ...form,
                "name": e.target.value
            })
        }
        if (e.target.name == "email") {
            setForm({
                ...form,
                "email": e.target.value
            })
        }
        if (e.target.name == "message") {
            setForm({
                ...form,
                "message": e.target.value
            })
        }
    }

    return (
        <>
            <section id="contact" className="pt-24 px-4 relative bg-secondary/30 min-h-screen">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Get In <span className="text-primary"> Touch</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                        I'm always open to discussing new opportunities.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8 lg:my-20">
                            {/* <h3 className="text-2xl text-center font-semibold mb-6">
                                {" "}
                                Contact Information
                            </h3> */}

                            <div className="space-y-6 justify-center">
                                <div className="flex space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary" />{" "}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-left">Email</h4>
                                        <a
                                            href="mailto:mohitg593@gmail.com"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            mohitg593@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary" />{" "}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-left"> Phone</h4>
                                        <a
                                            href="tel:+919877569271"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +91 9877569271
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Map className="h-6 w-6 text-primary" />{" "}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-left"> Location</h4>
                                        <a className="text-muted-foreground transition-colors">
                                            Gurugram, India
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="font-medium mb-4"> Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="#" target="_blank">
                                        <img src="./public/images/linkedin.png" className="w-8 hover:scale-110" />
                                    </a>
                                    <a href="https://twitter.com/mohitg593" target="_blank">
                                        <img src="./public/images/twitter.jpg" className="w-8 hover:scale-110" />
                                    </a>
                                    <a href="https://instagram.com/__mohit_gupta__" target="_blank">
                                        <img src="./public/images/insta.png" className="w-8 hover:scale-110" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-card p-8 rounded-lg shadow-xs"
                            onSubmit={handleSubmit}
                        >
                            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                            <form ref={formData} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        {" "}
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-primary foucs:ring-2 focus:ring-primary"
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        {" "}
                                        Your Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-primary foucs:ring-2 focus:ring-primary"
                                        placeholder="abc@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        {" "}
                                        Your Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-primary foucs:ring-2 focus:ring-primary resize-none"
                                        placeholder="Hello, I'd like to talk about..."
                                    />
                                </div>

                                <button
                                    id="send_btn"
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={disabledSend}
                                    className={cn(
                                        !disabledSend ? "cosmic-button w-full flex items-center justify-center gap-2" : "send-btn w-full flex items-center justify-center gap-2"
                                    )}
                                >
                                    {isSubmitting ? "Sending..." : "Send"}
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}