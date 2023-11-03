const showProduct_img = document.querySelector(".showProduct-img");
const thumbNailsImages = document.querySelector(".thumbNails-images");

let arrayImages = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

for (const image of arrayImages) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `./images/${image}`);
  newImage.setAttribute("alt", `./images/${image}`);

  newImage.classList.add("thumbnail");

  thumbNailsImages.appendChild(newImage);
  newImage.addEventListener("click", (e) => {
    showProduct_img.src = e.target.src;
    showProduct_img.alt = e.target.alt;
  });
}
