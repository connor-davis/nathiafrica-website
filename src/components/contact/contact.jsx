const ContactForm = ({ footer = false }) => {
  return (
    <div class="flex flex-col space-y-3">
      <div class={`text-4xl font-bold ${footer ? "text-white" : "text-black"}`}>Make An Enquiry</div>
      <div class={`text-xl ${footer ? "text-white" : "text-black"}`}>
        We would love to hear from you, for any information, please feel free to
        contact us.
      </div>

      <form
        class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
        action="https://formspree.io/f/xgeqbpgl"
        method="POST"
      >
        <div class="flex flex-col w-full space-y-2">
          <input
            class="bg-white border-l border-t border-r border-b border-brownish outline-none p-2"
            type="text"
            name="name"
            id="name"
            placeholder="Name *"
            required
          />
          <input
            class="bg-white border-l border-t border-r border-b border-brownish outline-none p-2"
            type="email"
            name="email"
            id="email"
            placeholder="Email *"
            required
          />
          <input
            class="bg-white border-l border-t border-r border-b border-brownish outline-none p-2"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
          <input
            class="bg-white border-l border-t border-r border-b border-brownish outline-none p-2"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
        </div>
        <div class="flex flex-col w-full space-y-2">
          <textarea
            class="w-full h-48 md:h-full bg-white border-l border-t border-r border-b border-brownish outline-none p-2"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            class="w-auto bg-brownish outline-none px-4 py-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
