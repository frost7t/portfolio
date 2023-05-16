import { useState } from "react";

export default function CardForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col items-center  h-full py-10 lg:py-20">
        <h1 className="text-2xl mb-4">Send me an email</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:items-center"
        >
          <div className="flex flex-col w-full mb-4 ">
            <label htmlFor="name" className="mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-8 py-2 border border-gray-300 rounded-lg w-full lg:w-96"
              required
            />
            <label htmlFor="email" className="mt-1 mb-1">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg w-full lg:w-96"
              required
            />
          </div>
          <div className="flex flex-col w-full  ml-0 md:ml-4">
            <label htmlFor="message" className="mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4  border border-gray-300 rounded-lg h-16 w-full lg:w-96"
            ></textarea>
            <button
              type="submit"
              className="mt-5 lg:mt-2 md:ml-auto mb-3 bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-900 self-end w-full md:w-auto"
            >
              Send email
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
