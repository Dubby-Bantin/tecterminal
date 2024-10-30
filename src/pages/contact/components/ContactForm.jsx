import FormInput from "./FormInput";

const ContactForm = () => {
  return (
    <div className="absolute bg-white shadow-md rounded-lg p-6 w-11/12 sm:w-[36rem] lg:w-[50rem] flex flex-col items-center">
      <h1 className="font-semibold text-4xl text-center mb-6">GET IN TOUCH</h1>
      <form className="w-full flex flex-col items-center space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
          <FormInput name="firstname" type="text" label="FIRST NAME" />
          <FormInput name="lastname" type="text" label="LAST NAME" />
          <FormInput name="email" type="email" label="EMAIL" />
          <FormInput name="tel" type="tel" label="PHONE NUMBER" />
        </div>
        <div className="w-full">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            MESSAGE
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Your message here..."
            className="w-full h-24 rounded-md border bg-transparent px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primaryBlue text-white py-2 px-10 rounded-md transition duration-150 ease-in-out hover:bg-primaryBlue-dark"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
