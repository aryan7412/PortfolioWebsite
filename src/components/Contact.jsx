"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle } from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_88fayvk",
      "template_l8b7u2w",
      form.current,
      "HRapQoyxW9m_IAHdN"
    ).then(
      () => {
        setIsSent(true);
        setTimeout(() => setIsSent(false), 4000);
        form.current.reset();
      },
      (error) => {
        console.error("FAILED...", error.text);
      }
    );
  };

  return (
    <section id="contact" className="text-black relative w-[70%] mx-auto">
      {/* Pop-up success message */}
      {isSent && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl text-center animate-fadeInUp w-[90%] sm:w-[400px]">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-1">Message Sent!</h3>
            <p className="text-gray-600 text-sm">Thanks for reaching out. I'll get back to you shortly.</p>
          </div>
        </div>
      )}

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Let's work together</h2>
          <p className="mb-2 hover:text-gray-600">📧 aryan7412ss@gmail.com</p>
          <p className="mb-2 hover:text-gray-600">📞 +91 12345 67890</p>
          <p className="hover:text-gray-600">🔗 linkedin.com/in/aryan-samal</p>
        </div>

        {/* Right Side: Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="md:w-1/2 space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              required
              className="w-1/2 p-3 rounded border border-gray-300"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your email"
              required
              className="w-1/2 p-3 rounded border border-gray-300"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows="5"
            className="w-full p-3 rounded border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:opacity-90 transition"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
