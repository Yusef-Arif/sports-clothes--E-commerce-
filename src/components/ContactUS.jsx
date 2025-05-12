import Button from "./Button";

const ContactUS = () => {
  return (
    <div className="flex items-center justify-between bg-main py-5 px-7 rounded-3xl w-[80%] ml-5">
      <h1 className="text-4xl font-extrabold text-start text-white">
        STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
      </h1>
      <div>
        <div className="flex items-center justify-center bg-graybg rounded-2xl py-5 px-8 gap-3 mb-2">
          <i class="fa-solid fa-envelope"></i>
          <input
            type="email"
            placeholder="Enter your email address"
            className="border-none outline-none"/>
        </div>
        <Button text="Subscribe to Newsletter"/>
      </div>
    </div>
  );
}

export default ContactUS