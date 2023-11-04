const showProduct_img = document.querySelector(".showProduct-img");

export function createThumbnail(imageSRC) {
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