export function showCart(cartBotton, cart) {
  cartBotton.addEventListener("click", function() {
     cart.style.display = cart.style.display === "none" ? "block" : "none";
  })
}