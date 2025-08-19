import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const TELEGRAM_BOT_TOKEN = "BOT_TOKENINGIZNI_BU_YERGA_QO'YING";
  const TELEGRAM_CHAT_ID = "CHAT_ID_ISHLATISH";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessageToTelegram = async (text) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const params = {
      chat_id: TELEGRAM_CHAT_ID,
      text: text,
      parse_mode: "HTML",
    };
    const searchParams = new URLSearchParams(params);

    try {
      const res = await fetch(`${url}?${searchParams.toString()}`);
      const data = await res.json();
      return data.ok;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ success: false, message: "Iltimos, barcha maydonlarni to‘ldiring." });
      return;
    }

    const message = `
<b>Yangi xabar:</b>
Ismi: ${form.name}
Email: ${form.email}
Xabar: ${form.message}
    `;

    setStatus({ success: null, message: "Yuborilmoqda..." });

    const success = await sendMessageToTelegram(message);

    if (success) {
      setStatus({ success: true, message: "Xabaringiz yuborildi. Rahmat!" });
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus({ success: false, message: "Xabar yuborishda xatolik yuz berdi." });
    }
  };

  return (
    <div
      id="contact"
      ref={ref}
      className={`min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-700 via-white to-pink-700 p-6 transition-transform duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        boxShadow: isVisible
          ? "0 15px 40px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)"
          : "none",
        transformOrigin: "bottom center",
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-10 flex flex-col md:flex-row gap-12">
        {/* Left Info Section */}
        <div className="flex-1 text-black">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight">Aloqa qiling</h2>
          <p className="text-lg leading-relaxed mb-8">
            Agar sizda loyiha g‘oyasi, hamkorlik yoki shunchaki salomlashish istagi bo‘lsa,
            menga bemalol yozishingiz mumkin. Men sizning xabaringizni intiqlik bilan kutaman.
          </p>
          <div className="space-y-5 text-lg">
            <p className="flex items-center gap-4">📧 <span>shoyadbekshoyadbek97@gmail.com</span></p>
            <p className="flex items-center gap-4">📱 <span>+998 95 821 82 23</span></p>
            <p className="flex items-center gap-4">🌐 <span>https://shaxsiy-sayt.vercel.app/</span></p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-indigo-50 rounded-2xl shadow-inner p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              value={form.name}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email manzilingiz"
              value={form.email}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Xabaringiz..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Xabar yuborish
            </button>
          </form>
          {status && (
            <p
              className={`mt-6 text-center font-semibold ${
                status.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
