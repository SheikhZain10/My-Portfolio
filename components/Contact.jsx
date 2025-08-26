import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const form = new FormData(event.target);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');

    const endpoint = 'https://formsubmit.co/ajax/sheikzain1355@gmail.com';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _captcha: false,
        _subject: 'New portfolio inquiry',
      }),
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully");
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message || 'Failed to send message');
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-6">
      <div className="text-center mb-8">
        <h4 className="text-lg font-outfit mb-2 text-gray-500 dark:text-gray-400">
          Connect with me
        </h4>
        <h2 className="text-5xl font-outfit text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300 font-outfit">
          I'd love to hear from you! If you have any questions or feedback,
          please use the form below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 dark:bg-black/10 backdrop-blur-xl border border-gray-300/30 dark:border-gray-600/30 rounded-3xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                className="w-full p-3 bg-gray-50/90 dark:bg-gray-700/20 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-400 focus:border-transparent transition-all duration-300"
                type="text"
                placeholder="Enter your full name"
                required
              />
              <input
                name="email"
                className="w-full p-3 bg-gray-50/90 dark:bg-gray-700/20 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-400 focus:border-transparent transition-all duration-300"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <textarea
              name="message"
              className="w-full p-3 bg-gray-50/90 dark:bg-gray-700/20 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-gray-400 focus:border-transparent transition-all duration-300 resize-none"
              rows={4}
              placeholder="Tell me about your project or just say hello..."
              required
            ></textarea>

            <div className="flex justify-center pt-2">
              <button
                className={`w-full sm:w-max flex items-center justify-center gap-2 border border-gray-700 rounded-full py-2 px-4 sm:px-20 mx-auto dark:bg-black/50 bg-slate-100/50 hover:dark:bg-black hover:bg-slate-100 hover:scale-110 duration-400 cursor-pointer transition-all ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                type="submit"
              >
                Send Message
                <Image
                  src={
                    isDarkMode
                      ? assets.right_arrow_bold_dark
                      : assets.right_arrow_bold
                  }
                  alt="Send"
                  className="w-5"
                />
              </button>
            </div>

            {result && (
              <div className="text-center pt-2">
                <p className="text-gray-600 dark:text-gray-300">{result}</p>
              </div>
            )}
          </form>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="https://wa.me/923034871146?text=Hi%20Zain%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-3 w-full sm:w-max text-center border border-gray-700 rounded-full py-2 px-4 sm:px-10 mx-auto dark:bg-black/30 bg-slate-100/40 hover:dark:bg-black hover:bg-slate-100 hover:scale-110 duration-400 cursor-pointer transition-all ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
