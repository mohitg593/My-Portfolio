import { certifications } from "../lib/data";
import { FaEye } from "react-icons/fa";

export const CertificationsSection = () => {
    
    return (
        <>
            <section id="cert" className="py-24 px-4 relative min-h-screen">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My{" "}
                        <span className="text-primary">Certifications</span>
                    </h2>

                    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-12 mt-12">
                        {certifications.map((cert) => (
                            <div
                                key={cert.id}
                                className="group bg-card rounded-lg shadow-xs card-hover flex flex-row items-center justify-between"
                            >
                                <div className="rounded-lg h-20 p-3 overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-1"> {cert.name}</h3>

                                </div>
                                <div className="px-4">
                                    <a href={cert.url} target="_blank">
                                        <FaEye size={25} className="inline hover:fill-primary"></FaEye>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>



                {/* Modal Container */}
                {/* {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative bg-card  border-black ">
                            <div className="flex justify-between items-center p-4 border-primary border-b-3">
                                <h3 className="lg:text-xl font-bold text-muted-foreground text-md">
                                    {selectedCert.title}
                                </h3>
                                <button
                                    onClick={handleCloseCertModal}
                                    className="text-muted-foreground text-3xl hover:text-primary transition-colors"
                                >
                                    &times;
                                </button>
                            </div>

                            <div className="flex flex-col">
                                <div className="w-full flex justify-center bg-card px-4">
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        className="w-full h-full object-cover mt-5"
                                    />
                                </div>
                                <div className="lg:p-8 p-6">
                                    <p className="text-muted-foreground mb-6 lg:text-base text-xs text-justify">
                                        {selectedCert.image}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}
            </section>
        </>
    )
}