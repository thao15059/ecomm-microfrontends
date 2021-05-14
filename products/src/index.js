import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const nameProduct = faker.commerce.productName();
  products += `<div>${nameProduct}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;
