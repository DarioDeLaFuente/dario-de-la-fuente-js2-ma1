import { getProducts } from "../js/fetch.js";
import { initFilter } from "../js/search.js";

getProducts();

export function updateProductList(products) {
  let markup = "";
  if (products && Array.isArray(products)) {
    products.forEach((product) => {
      markup += `
      <div class="product">
      <div class="product-name">${product.title}</div>
      <div class="product-price">Pric:${product.price},-</div>
      </div>
      `;
    });
  } else {
    products = [];
  }
  document.querySelector(".api-output").innerHTML = markup;
  if (document.querySelector(".api-output").innerHTML === "") {
    document.querySelector(".api-output").innerHTML = `
    <div class="product">
    <div class="product-list-results"> No results found. </div>
    </div>
    `;
  }
}

const products = getProducts().then((products) => {
  console.log("update:2", products);
  updateProductList(products);
  initFilter(products);
});
