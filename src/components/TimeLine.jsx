import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
    const timeline = [
        {
            year: "2025",
            title: "Frontend Developer",
            company: "shoyadbek011",
            description:
                "Zamonaviy va responsive web ilovalar yaratish, React va TailwindCSS asosida ishlash.",
        },
        {
            year: "2024",
            title: "Web Design Intern",
            company: "WebKing_uz",
            description:
                "UI/UX dizayn prinsiplari bilan ishlash, figma maketlardan saytlar yaratish.",
        },
        {
            year: "2023",
            title: "HTML & CSS Bootcamp",
            company: "Andarov_blog",
            description:
                "Frontend asoslarini o‘rganish: HTML5, CSS3 va JavaScript fundamental bilimlari.",
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div className="bg-gray-50 py-16 min-h-screen">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
                    Mening sayohatim
                </h2>
                <div className="relative border-l-4 border-indigo-500">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className="mb-10 ml-6 relative"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.7 }}
                            variants={itemVariants}
                        >
                            <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 border-2 border-white top-3"></div>
                            <motion.div
                                className="bg-white p-6 rounded-xl shadow cursor-pointer"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span className="text-sm text-gray-500">{item.year}</span>
                                <h3 className="text-xl font-semibold text-gray-800 mt-1">
                                    {item.title}{" "}
                                    <a
                                        href={`https://t.me/${item.company}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-500"
                                    >
                                        @ {item.company}
                                    </a>

                                </h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
