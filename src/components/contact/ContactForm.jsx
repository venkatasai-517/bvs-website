import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full space-y-2 md:space-y-4 mb-8">
      <div className="flex flex-col">
        <label htmlFor="fullName" className="font-bold text-lg mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          required
          className="md:w-4/5 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 "
          placeholder="Morla Sai Pradeep"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-bold text-lg mb-1">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          required
          className="md:w-4/5 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 "
          placeholder="pradeep@gmail.com"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="company" className="font-bold text-lg mb-1">
          Institution/Company
        </label>
        <input
          type="text"
          id="company"
          required
          className="md:w-4/5 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 "
          placeholder="BVS"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="company" className="font-bold text-lg mb-1">
          Write your Query
        </label>
        <textarea
          id="company"
          required
          className="md:w-4/5 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 overflow-y-scroll "
          placeholder="enter here"
        ></textarea>
      </div>
      <div className="flex md:justify-start justify-center items-center w-full">
        <button className="w-3/5 p-4 bg-green-300 hover:bg-green-500 shadow-sm hover:shadow-lg transition duration-150 ease-in hover:-translate-y-1 hover:text-white font-bold rounded-full ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
