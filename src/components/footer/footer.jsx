import ContactForm from "../contact/contact";

const Footer = () => {
  return (
    <div class="flex flex-col justify-center items-center w-full h-auto p-5 bg-gray-900 border-t-8 border-lime-400">
      <div class="flex flex-col w-full h-full justify-center items-center p-5">
        <ContactForm footer={true} />
      </div>
      <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center w-full md:w-3/5 border-t border-gray-800 pt-5 pb-10 text-white">
        <div>&copy; Nathi Africa Just Recycling</div>
        <div>Developed by LoneWolf Software</div>
      </div>
    </div>
  );
};

export default Footer;
