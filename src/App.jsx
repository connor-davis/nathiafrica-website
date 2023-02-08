import { A, Route, Routes, useLocation } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";

import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Gallery from "./pages/gallery/gallery";
import Home from "./pages/home/home";
import Logo from "./assets/logo.png";
import News from "./pages/news/news";
import Post from "./pages/news/post";
import ProductsAndServices from "./pages/productsAndServices/productsAndServices";

function App() {
  const location = useLocation();

  const [navShown, setNavShown] = createSignal(false);

  onMount(() => {});

  return (
    <div class="flex flex-col w-screen h-screen bg-gray-100 overflow-y-auto">
      {navShown() && <div class="md:hidden absolute flex flex-col w-screen h-screen bg-gray-900 border-b-8 border-lime-400 z-50">
        <div class="self-end flex flex-col w-10 h-10 justify-center items-center text-white hover:text-black hover:bg-lime-400" onClick={() => setNavShown(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

        </div>
        <div class="flex flex-col w-full h-full">
        <A
            href="/"
            class={`flex flex-col w-full h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
            onClick={() => setNavShown(false)}
          >
            Home
          </A>
          <A
            href="/aboutUs"
            class={`flex flex-col w-full h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/aboutUs"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
            onClick={() => setNavShown(false)}
          >
            About Us
          </A>
          <A
            href="/gallery"
            class={`flex flex-col w-full h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/gallery"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
            onClick={() => setNavShown(false)}
          >
            Gallery
          </A>
          <A
            href="/news"
            class={`flex flex-col w-full h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/news"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
            onClick={() => setNavShown(false)}
          >
            News
          </A>
          <A
            href="/productsAndServices"
            class={`flex flex-col w-full h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/productsAndServices"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
            onClick={() => setNavShown(false)}
          >
            Products And Services
          </A>
          <A
            href="/contactUs"
            class={`flex flex-col w-full h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/contactUs"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
            onClick={() => setNavShown(false)}
          >
            Contact Us
          </A>
        </div>
        </div>}
      <div class="flex flex-col w-full h-auto">
        <div class="flex w-full justify-center items-center p-5">
          <div class="hidden md:flex md:flex-col space-y-3 w-64 h-full">
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
          <img src={Logo} class="w-60 h-44" />
          <div class="hidden md:flex md:flex-col w-64 h-full"></div>
        </div>
        <div class="flex md:hidden justify-end items-center w-full h-auto border-b-8 border-lime-400 bg-gray-800">
          <div class="flex flex-col w-auto h-auto transition-all duration-300 ease-in-out px-4 py-4 text-white hover:bg-lime-400 hover:text-black" onClick={() => setNavShown(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div class="hidden md:flex justify-center items-center w-full h-auto border-b-8 border-lime-400 bg-gray-800">
          <A
            href="/"
            class={`flex flex-col w-auto h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
          >
            Home
          </A>
          <A
            href="/aboutUs"
            class={`flex flex-col w-auto h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/aboutUs"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
          >
            About Us
          </A>
          <A
            href="/gallery"
            class={`flex flex-col w-auto h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/gallery"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
          >
            Gallery
          </A>
          <A
            href="/news"
            class={`flex flex-col w-auto h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/news"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
          >
            News
          </A>
          <A
            href="/productsAndServices"
            class={`flex flex-col w-auto h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/productsAndServices"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
          >
            Products And Services
          </A>
          <A
            href="/contactUs"
            class={`flex flex-col w-auto h-auto transition-all duration-300 ease-in-out px-8 py-4 ${
              location.pathname === "/contactUs"
                ? "bg-lime-400 text-black"
                : "text-white hover:bg-lime-500 hover:text-black"
            }`}
          >
            Contact Us
          </A>
        </div>
      </div>

      <Routes>
        <Route path="/" element={Home} />
        <Route path="/aboutUs" element={About} />
        <Route path="/gallery" element={Gallery} />
        <Route path="/news" element={News} />
        <Route path="/news/:id" element={Post} />
        <Route path="/productsAndServices" element={ProductsAndServices} />
        <Route path="/contactUs" element={Contact} />
      </Routes>
    </div>
  );
}

export default App;
