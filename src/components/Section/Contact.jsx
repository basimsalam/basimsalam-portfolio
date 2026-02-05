import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // 👈 Replace with your Web3Forms access key
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      alert("❌ Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-white text-gray-900 dark:bg-black dark:text-white">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span className="text-gray-600 dark:text-gray-300">basimnnas@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400 text-xl" />
                <span className="text-gray-600 dark:text-gray-300">+966 506536605</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <span className="text-gray-600 dark:text-gray-300">Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex gap-6 pt-4">
                <a
                  href="https://github.com/basimsalam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl hover:text-blue-400 transition" />
                </a>
                <a
                  href="https://www.linkedin.com/in/basimsalam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
                </a>
                <a
                  href="https://instagram.com/basim_salam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl hover:text-blue-400 transition" />
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                placeholder="Your Name"
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500 dark:placeholder-gray-400"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="your@email.com"
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500 dark:placeholder-gray-400"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                placeholder="Your message..."
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500 dark:placeholder-gray-400"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded font-medium transition ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
