import { A } from "@solidjs/router";
import CanLogo from "../../assets/can.png";
import Footer from "../../components/footer/footer";
import GlassLogo from "../../assets/glass-bottle.png";
import ImageOne from "../../assets/gallery/6.jpg";
import ImageThree from "../../assets/gallery/2.jpg";
import ImageTwo from "../../assets/gallery/4.jpg";
import PaperLogo from "../../assets/paper.png";
import PlasticLogo from "../../assets/bottle.png";

const Home = () => {
  return (
    <div class="flex flex-col w-full h-full">
      <div class="flex flex-col space-y-5 justify-center items-center w-full h-auto bg-brownish">
        <div
          id="carouselExampleControls"
          class="carousel slide relative w-full border-b-8 border-white shadow-2xl shadow-brownishDarker"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner relative overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <div class="w-full h-[200px] md:h-[500px]">
                <img src={ImageOne} class="block w-full -translate-y-30 md:-translate-y-60" />
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <div class="w-full h-[200px] md:h-[500px]">
                <img src={ImageTwo} class="block w-full -translate-y-30 md:-translate-y-60" />
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <div class="w-full h-[200px] md:h-[500px]">
                <img src={ImageThree} class="block w-full -translate-y-30 md:-translate-y-60" />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="flex flex-col space-y-5 justify-center items-center w-full h-auto py-10 bg-brownish">
        <div class="text-4xl font-semibold w-3/5 text-center">
          Nathi Africa Just Recycling
        </div>
        <div class="w-16 h-1 bg-gray-800"></div>
        <div class="text-md text-gray-800 font-semibold italic w-3/5 text-center">
          Nathi Africa is 100% wholly owned by Gcwabaza Holdings Proprietary
          Limited, a company duly registered and incorporated in year 2006 in
          terms of the statutes of the RSA.
        </div>
        <div class="text-md font-semibold w-3/5 text-center">
          To build and unleash in perpetuity a dynamic company engaging in
          responsible waste management and recycling. We shall collect various
          fully recyclable material substrates such as glass, paper, cans and
          board, HDPE, amongst other materials. This is being sourced through
          reclaimers, households and establishments. We strive for balanced
          growth, job creation, wealth creation and value add, thereby forming a
          nimble and truly world class company.
        </div>
        <A
          href="/aboutUs"
          class="flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 transition-all duration-300 ease-in-out text-brownish cursor-pointer"
        >
          More About Nathi Africa
        </A>
      </div>
      <div class="flex flex-col space-y-5 justify-center items-center w-full h-auto py-10">
        <div class="text-4xl font-semibold w-3/5 text-center">What We Do</div>
        <div class="w-16 h-1 bg-lime-500"></div>
        <div class="flex flex-col md:flex-row items-center md:items-start md:justify-center w-full md:w-3/5 h-auto space-y-5 md:space-y-0 md:space-x-5">
          <div class="flex flex-col items-center space-y-10 w-44">
            <div class="flex flex-col justify-center items-center rounded-full w-32 h-32 bg-lime-500">
              <img src={PlasticLogo} class="w-16 h-16" />
            </div>

            <div class="flex flex-col space-y-2">
              <div class="font-semibold text-center">Plastic Recycling</div>
              <div class="text-center">
                We recycle plastics such as{" "}
                <span class="font-semibold">PET</span> and{" "}
                <span class="font-semibold">HDPE</span>.
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center space-y-10 w-44">
            <div class="flex flex-col justify-center items-center rounded-full w-32 h-32 bg-lime-500">
              <img src={GlassLogo} class="w-16 h-16" />
            </div>

            <div class="flex flex-col space-y-2">
              <div class="font-semibold text-center">Glass Recycling</div>
              <div class="text-center">
                We recycle all glass in bottle form. This ranges from your beer
                bottles to glass bottles like tomato sauce bottles and more.
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center space-y-10 w-44">
            <div class="flex flex-col justify-center items-center rounded-full w-32 h-32 bg-lime-500">
              <img src={CanLogo} class="w-16 h-16 pl-4" />
            </div>

            <div class="flex flex-col space-y-2">
              <div class="font-semibold text-center">Can Recycling</div>
              <div class="text-center">
                We recycle any can containers. This ranges from beer cans to
                cans used for things like bake beans, soup, etc.
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center space-y-10 w-56">
            <div class="flex flex-col justify-center items-center rounded-full w-32 h-32 bg-lime-500">
              <img src={PaperLogo} class="w-16 h-16" />
            </div>

            <div class="flex flex-col space-y-2">
              <div class="font-semibold text-center shrink-0">
                Paper & Cardboard Recycling
              </div>
              <div class="text-center">
                We recycle all types of paper and cardboard. This ranges from
                paper used in the office to cardboard boxes.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
