import { useState } from "react";
import Logo from "../assets/images/contact-form/maharlika-logo.jpg";
import AppButton from "./AppButton";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <section className="flex flex-col md:flex-row md:w-full bg-[#4E4E4E]">
      <div className="w-4/5 md:w-2/5 mx-auto md:mx-0">
        <img src={Logo} alt="Maharlika Diva Dancers logo" />
      </div>
      <div className="md:mx-auto py-8 md:pt-16 md:px-36">
        <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <form onSubmit={onSubmit} className="space-y-8 w-full px-4">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="block p-2 w-full md:w-96 text-sm"
              type="text"
              id="name"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block p-2 w-full text-sm"
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              rows="6"
              className="block p-2.5 w-full text-sm"
              id="message"
              required
            />
          </div>
          <button type="submit">
            <AppButton text={formStatus} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
