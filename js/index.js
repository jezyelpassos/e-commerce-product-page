import { createThumbnail } from "./createImg.js"
import { toggleLightbox } from "./toggleLightBox.js";

const showProduct_img = document.querySelector(".showProduct-img");
const thumbNailsImages = document.querySelector(".thumbNails-images");
const iconClose = document.querySelector(".icon_close");
const cart = document.querySelector(".cart");
// const areaCarrinhoVazio = document.querySelector(".area-carrinho");

let arrayImages = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

arrayImages.forEach((image) => {
  const thumbnail = createThumbnail(image);
  thumbNailsImages.appendChild(thumbnail);
});

showProduct_img.addEventListener("click", toggleLightbox);
iconClose.addEventListener("click", toggleLightbox);