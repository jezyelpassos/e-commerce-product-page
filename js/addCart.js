const areaCarrinhoVazio = document.querySelector(".area-carrinhoVazio");
const IconeCarrinho = document.querySelector(".textCart");
let quantidadeItensCarrinho = 0;

export function addCart() {
  const areaCarrinho = document.createElement("div");
  areaCarrinho.classList.add("areaIten-carrinho");
  areaCarrinho.innerHTML = ` <div class="area-conteudo_carrinho">
  <div class="area-conteudo_carrinho__itens">
     <img class="area-img_conteudo" src="./images/image-product-1-thumbnail.jpg" alt="conteudo carrinho">
     <span class="area-conteudo_texto">
       Fall Limited Edition Sneakers <br> 125.00 x 3 $375.00
     </span>
     <img class="btn-deletar" src="./images/icon-delete.svg" alt="deletar">
  </div>
</div>
`;
  areaCarrinhoVazio.appendChild(areaCarrinho);
  const btnDeletar = areaCarrinho.querySelector(".btn-deletar");

  btnDeletar.addEventListener("click", () => deleteItem(areaCarrinho));
  // console.log(quantidadeItensCarrinho++);
  quantidadeItensCarrinho++;
  atualizaContador();
}

function deleteItem(item) {
  areaCarrinhoVazio.removeChild(item);
  quantidadeItensCarrinho--;
  atualizaContador();
}

function atualizaContador() {
  IconeCarrinho.innerText = quantidadeItensCarrinho > 0 ? quantidadeItensCarrinho : "";
}
