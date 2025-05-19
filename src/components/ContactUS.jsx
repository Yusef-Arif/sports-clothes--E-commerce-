import Button from "./Button";

const ContactUS = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-main py-6 px-4 md:px-10 rounded-3xl w-full gap-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-start text-white mb-4 md:mb-0">
        STAY UPTO DATE ABOUT <br className="hidden sm:block" /> OUR LATEST
        OFFERS
      </h1>
      <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
        <div className="flex items-center bg-graybg rounded-2xl py-3 px-4 w-full sm:w-auto">
          <i className="fa-solid fa-envelope mr-2"></i>
          <input
            type="email"
            placeholder="Enter your email address"
            className="border-none outline-none bg-graybg w-full sm:w-auto"
          />
        </div>
        <Button text="Subscribe" />
      </div>
    </div>
  );
};

export default ContactUS;