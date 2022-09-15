import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#1f2833] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/bde891db-668b-4692-99aa-e59314034990"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#66FCF1] text-[#c5c6c7]">
            Contact
          </p>
          <p className="text-[#c5c6c7] py-4">
            Submit the form below or shoot me an email -{" "}
            <a
              className="text-xl font-bold text-[#66FCF1]"
              href="mailto:rupertaranda@gmail.com"
              target="_blank"
            >
              rupertaranda@gmail.com
            </a>
          </p>
        </div>
        <input
          className="bg-[#b0fffa] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#b0fffa]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#b0fffa] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        />
        <button className="text-white border-2 hover:bg-[#66FCF1] hover:border-[#66FCF1] hover:text-black px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
