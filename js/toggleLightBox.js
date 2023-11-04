const showProduct_img = document.querySelector(".showProduct-img");
const main = document.querySelector("main");
const productImage = document.querySelector(".showProduct");
const showProductText = document.querySelector(".showProduct-text")
const iconClose = document.querySelector(".icon_close");

export function toggleLightbox() {
  main.classList.toggle("lightbox");
  showProductText.style.display = showProductText.style.display === "none" ? "block" : "none";
  productImage.style.zIndex = main.classList.contains("lightbox") ? "10000" : "";
  iconClose.style.zIndex = main.classList.contains("lightbox") ? "10000" : "";
  iconClose.style.display = main.classList.contains("lightbox") ? "block" : "none";
}
