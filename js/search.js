import { updateProductList } from "../js/script.js";

export function initFilter(products) {
  const input = document.querySelector(".price-filter");
  input.addEventListener("keyup", function (event) {
    console.log("product:", event);

    const filterValue = event.target.value.trim();

    const filteredProducts = products.filter(function (product) {
      if (product.price <= filterValue) {
        return true;
      }
    });
    console.log(filteredProducts);
    updateProductList(filteredProducts);
  });
}
