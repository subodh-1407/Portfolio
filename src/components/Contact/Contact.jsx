import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0bki1kj",  // Replace with your EmailJS Service ID
        "template_9btwbig",  // Replace with your EmailJS Template ID
        form.current,
        "65eezYTm5bHw12kU8"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          form.current.reset(); // Reset form fields after sending
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
      className="py-14 md:py-20 lg:py-24 px-[7vw] lg:px-portfolio"
    >
      {/* Toast Container */}
      <ToastContainer />

      <div className="grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 md:justify-items-stretch md:gap-12">
        <div className="text-center md:text-left">
          <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#f0f5ff]">CONTACT</h2>
          <p className="text-[#a9b9d0] mt-4 text-lg font-semibold">
            I&rsquo;d love to hear from you&mdash;reach out for any opportunities or questions!
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-lg md:justify-self-end bg-[#152238] p-4 sm:p-6 rounded-lg shadow-lg border border-[#304862]">
          <h3 className="text-xl font-semibold text-[#f0f5ff] text-center">
            Connect With Me <span className="ml-1">🚀</span>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#0b1220] text-[#f0f5ff] border border-[#41607d] focus:outline-none focus:border-[#7dd3fc]"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#0b1220] text-[#f0f5ff] border border-[#41607d] focus:outline-none focus:border-[#7dd3fc]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#0b1220] text-[#f0f5ff] border border-[#41607d] focus:outline-none focus:border-[#7dd3fc]"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#0b1220] text-[#f0f5ff] border border-[#41607d] focus:outline-none focus:border-[#7dd3fc]"
            />

            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#7dd3fc] to-[#b2e7ff] py-3 text-[#0b1220] font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
