// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

// Mahalliy rasm import qilish
import portfolioImg from "../img/sayt4.png";
import ecommerceImg from "../img/sayt 1.png";
import taskImg from "../img/sayt2.png";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "React va Tailwind CSS yordamida yaratilgan zamonaviy portfolio.",
      image: portfolioImg,
      demo: "",
      github: "https://github.com/shoyatbek2011/shaxsiy-sayt",
    },
    {
      title: "MillatUmidi",
      description: "O'quv markaz uchun qilingan sayt",
      image: ecommerceImg,
      demo: "https://shoyatbek-millat-umidi.netlify.app",
      github: "http://github.com/YoqubovOzodbek12/millatumidi/tree/main",
    },
    {
      title: "Contact book",
      description: "Contactlaringizni saqlash uchun",
      image: taskImg,
      demo: "https://contact-book-one-eosin.vercel.app/",
      github: "https://github.com/shoyatbek2011/contact-book",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-6 text-center">
        
        <motion.h2
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg max-w-2xl mx-auto"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Mening sevimli ishlarim ko'rgazmasi — toza kod, chiroyli UI va ajoyib UX.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
