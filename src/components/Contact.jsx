import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isError, setIsError] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setIsError("Failed to send email. Please fill all inputs!");
      return;
    }
    setIsError(null);
    setIsSending(true);

    emailjs
      .send(`${serviceId}`, `${templateId}`, formData, `${publicKey}`)
      .then((response) => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error" + error);
        toast.error("Failed to send email!");
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-20 p-4 flex flex-col items-center gap-4 max-w-4xl mx-auto"
      id="contact"
    >
      <Toaster />
      <h2 className="text-4xl sm:text-6xl text-center font-thin text-neutral-300">
        Lets Connect
      </h2>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="w-full mx-auto bg-neutral-900 p-6 rounded-lg shadow-lg"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-neutral-700 text-neutral-300 bg-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your valid email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-neutral-700 text-neutral-300 bg-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <textarea
            id="message"
            name="message"
            placeholder="Please enter your message here"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 rounded-lg border border-neutral-700 text-neutral-300 bg-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 text-neutral-100 font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default Contact;
