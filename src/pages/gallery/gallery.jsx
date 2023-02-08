import Emergence from "emergence.js";
import Footer from "../../components/footer/footer";
import ImageEight from "../../assets/gallery/8.jpg";
import ImageEighteen from "../../assets/gallery/18.jpg";
import ImageEleven from "../../assets/gallery/11.jpg";
import ImageFifteen from "../../assets/gallery/15.jpg";
import ImageFive from "../../assets/gallery/5.jpg";
import ImageFour from "../../assets/gallery/4.jpg";
import ImageFourteen from "../../assets/gallery/14.jpg";
import ImageNine from "../../assets/gallery/9.jpg";
import ImageNineteen from "../../assets/gallery/19.jpg";
import ImageOne from "../../assets/gallery/1.jpg";
import ImageSeven from "../../assets/gallery/7.jpg";
import ImageSeventeen from "../../assets/gallery/17.jpg";
import ImageSix from "../../assets/gallery/6.jpg";
import ImageSixteen from "../../assets/gallery/16.jpg";
import ImageTen from "../../assets/gallery/10.jpg";
import ImageThirteen from "../../assets/gallery/13.jpg";
import ImageThree from "../../assets/gallery/3.jpg";
import ImageTwelve from "../../assets/gallery/12.jpg";
import ImageTwenty from "../../assets/gallery/20.jpg";
import ImageTwentyOne from "../../assets/gallery/21.jpg";
import ImageTwentyThree from "../../assets/gallery/23.jpg";
import ImageTwentyTwo from "../../assets/gallery/22.jpg";
import ImageTwo from "../../assets/gallery/2.jpg";
import { onMount } from "solid-js";

let emergence = Emergence(this);

const Gallery = () => {
  let imageUrls = [
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive,
    ImageSix,
    ImageSeven,
    ImageEight,
    ImageNine,
    ImageTen,
    ImageEleven,
    ImageTwelve,
    ImageThirteen,
    ImageFourteen,
    ImageFifteen,
    ImageSixteen,
    ImageSeventeen,
    ImageEighteen,
    ImageNineteen,
    ImageTwenty,
    ImageTwentyOne,
    ImageTwentyTwo,
    ImageTwentyThree,
  ];

  onMount(() => {
    var wrapper = document.querySelector(".galleryContainer");

    console.log(wrapper);

    emergence.init({
      container: wrapper,
    });

    emergence.engage();
  });

  return (
    <div class="flex flex-col w-full h-full galleryContainer">
      <div class="flex flex-col w-full h-auto items-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 w-full md:w-3/5 p-2">
          {imageUrls &&
            imageUrls.map((imageUrl) => (
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg cursor-pointer"
                data-emergence="hidden"
                src={imageUrl}
                onClick={() => {
                  window.location.href = imageUrl;
                }}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
