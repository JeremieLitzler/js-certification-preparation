// complete the challenge here 👇

// 1. Fetch All Products
const BASE_API = 'https://dummyjson.com/products';
// define the function so that it fetches the data
export async function fetchAllProducts() {
  fetch(BASE_API)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      for (const product of json.products) {
        renderProduct(product);
      }
    });
}

export async function fetchAllProductsV2() {
  const res = await fetch(BASE_API);
  return res.json();
}

// call the function
// fetchAllProducts();

const data = await fetchAllProductsV2();
for (const product of data.products) {
  renderProduct(product);
}
// then render the results to the screen

// 2. Fetch Single Product Details

// define the function so that it fetches the data
export async function fetchProductDetails(id) {
  const res = await fetch(`${BASE_API}/${id}`);
  if (!res.ok) {
    return {
      error: {
        message: res.statusText,
        status: res.status,
      },
    };
  }
  return res.json();
}

// fetch the product with the id of 2
const product = await fetchProductDetails(2);
//  then render it to the screen
renderProduct(product);

// 3. Error Handling

// update the fetchProductDetails to handle a not found response

// test it by a produce with id 9999
const productWithError = await fetchProductDetails(9999);
// render the error messaage
renderProduct(productWithError);

// There is no need to change the code here
function renderProduct(product) {
  console.log('renderProduct', product);
  const container = document.getElementById('productContainer');
  const newElement = document.createElement('div');
  if (product.error) {
    newElement.innerHTML = `
      <div class="error-message">
        <h2>Error</h2>
        <p><strong>${product.error.status}</strong> ${product.error.message}</p>
      </div>
    `;
  } else {
    newElement.innerHTML = `
      <div class="product-card">
        <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-description">${product.description}</p>
        <div class="flex justify-between items-center">
          <span class="product-price">$${product.price}</span>
          <span class="product-category">${product.category}</span>
        </div>
        <div class="product-rating">
          <span class="text-yellow-500">★</span>
          <span class="text-gray-600">${product.rating} (${product.stock} in stock)</span>
        </div>
      </div>
    `;
  }
  container.appendChild(newElement);
}
