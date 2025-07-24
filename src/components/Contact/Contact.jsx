import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4uy6w9d",
        "template_nquicku",
        form.current,
        "Av5Vy1u7p5_P_BNkB"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 px-6 sm:px-10 lg:px-24 text-white"
    >
      <ToastContainer />

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">CONTACT</h2>
        <div className="w-20 sm:w-32 h-1 bg-[#6b0f1a] mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-300 mt-4 text-base sm:text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-screen-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-transparent border border-[#661a47] p-6 sm:p-8 rounded-lg shadow-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
          Connect With Me 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4 text-sm sm:text-base"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-transparent text-white border border-[#661a47] focus:outline-none focus:border-[#b91372] placeholder-white"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-transparent text-white border border-[#661a47] focus:outline-none focus:border-[#b91372] placeholder-white"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-transparent text-white border border-[#661a47] focus:outline-none focus:border-[#b91372] placeholder-white"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-transparent text-white border border-[#661a47] focus:outline-none focus:border-[#b91372] placeholder-white"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6b0f1a] to-[#b91372] py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
