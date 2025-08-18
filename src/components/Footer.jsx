import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 py-8 mt-16 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
       
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Ibrohimov. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
