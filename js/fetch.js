export async function getProducts() {
  const loadingIndicator = document.querySelector(".loading-indicator");
  if (loadingIndicator) {
    loadingIndicator.style.display = "block";
  }

  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return products;
  } catch (error) {
    //console.log("Error", error);
    const apiOutputElement = document.querySelector(".error-indicator");
    if (apiOutputElement && !apiOutputElement.innerHTML) {
      apiOutputElement.innerHTML = `
      <div class="error-conteiner">
          <div class="error-results">
              An error occurred while fetching the products:
          </div>
          <div class="error-message-results">
               ${error.message}
          </div>
      </div>
    `;
    }
  } finally {
    document.querySelector(".loading-indicator").style.display = "none";
  }
}
