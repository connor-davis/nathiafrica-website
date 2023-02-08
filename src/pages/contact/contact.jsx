import ContactForm from "../../components/contact/contact";
import Footer from "../../components/footer/footer";

let Contact = () => {
  return (
    <div class="flex flex-col items-center w-full h-full">
      <div class="flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto animate-fade-in duration-50 ease-in-out">
        <div class="flex flex-col space-y-5 pt-10 p-5">
          <div class="flex flex-col items-center w-full space-y-3">
            <div class="text-4xl font-semibold">How To Contact Us</div>
            <div class="w-16 h-1 bg-brownish"></div>
          </div>

          <div class="flex flex-col w-full space-y-5">
            <ContactForm />
          </div>

          <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-2">
            <div class="flex flex-col space-y-5 w-full">
              <div class="text-2xl font-bold">Our Address</div>
              <div class="flex flex-col space-y-5">
                <div>21 Buthelezi Road, Mpumalanga F, Hammarsdale</div>
                <div>Coordinates:</div>
                <div>-29.812530, 30.643365</div>
                <div class="flex flex-col space-y-2">
                  <div class="flex items-center space-x-3">
                    <div class="flex flex-col justify-center items-center w-8 h-8 bg-brownish rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>083 572 8355</div>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="flex flex-col justify-center items-center w-8 h-8 bg-brownish rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>thusi@nathiafrica.co.za</div>
                  </div>
                </div>
              </div>
            </div>
            <iframe
              class="w-full h-96"
              frameborder="0"
              style="border:0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAH8g_iKPrzzhPiO_wae4uXjU5sNwP-h9o&q=Hammarsdale Waste Beneficiation Centre"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
