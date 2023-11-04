const showProduct_img = document.querySelector(".showProduct-img");
const thumbNailsImages = document.querySelector(".thumbNails-images");
const main = document.querySelector("main");
const productImage = document.querySelector(".showProduct");
const showProductText = document.querySelector(".showProduct-text");
const iconClose = document.querySelector(".icon_close");
const cart = document.querySelector(".cart");
const areaCarrinhoVazio = document.querySelector(".area-carrinho");

let arrayImages = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

function createThumbnail(imageSRC) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `./images/${imageSRC}`);
  newImage.setAttribute("alt", `./images/${imageSRC}`);
  newImage.classList.add("thumbnail");

  newImage.addEventListener("click", (e) => {
    showProduct_img.src = e.target.src;
    showProduct_img.alt = e.target.alt;
  });
  return newImage
}

function toggleLightbox() {
  main.classList.toggle("lightbox");
  showProductText.style.display = showProductText.style.display === "none" ? "block" : "none";
  productImage.style.zIndex = main.classList.contains("lightbox") ? "10000" : "";
  iconClose.style.zIndex = main.classList.contains("lightbox") ? "10000" : "";
  iconClose.style.display = main.classList.contains("lightbox") ? "block" : "none";
}

arrayImages.forEach((image) => {
  const thumbnail = createThumbnail(image);
  thumbNailsImages.appendChild(thumbnail);
});

showProduct_img.addEventListener("click", toggleLightbox);
iconClose.addEventListener("click", toggleLightbox);