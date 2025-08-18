import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        className="max-w-4xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Matn qismi */}
        <div className="flex-1 space-y-6 text-gray-800">
          <h2 className="text-4xl font-bold">Men haqimda</h2>
          <p className="text-lg leading-relaxed">
            Salom! Men frontend developer bo‘lib, zamonaviy va funksional interfeyslar yaratishga e’tibor qarataman.
            Kodim — toza, dizaynim — intuitiv, foydalanuvchi tajribasi esa asosiy maqsadimdir.
          </p>
          <p className="text-lg leading-relaxed">
            Loyihalarimda innovatsion yondashuv, interaktiv tuzilmalar va silliq animatsiyalarga alohida e'tibor beraman.
          </p>
        </div>

        {/* Illyustratsiya (faqat sm ekran va undan kattaroqda ko‘rinadi) */}
        <motion.div
          className="flex-1 max-w-md mx-auto hidden sm:block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <img
            src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/illustrations-brooklyn/development/development/coding-4-jf93daddqlq75dqmxtj2p9.png"
            alt="Professional coding illustration"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
