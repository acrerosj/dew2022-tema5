const TBODY = document.querySelector('tbody');

const cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];


PRODUCTS.forEach(p => {
  let row = `
  <tr>
    <td>${p.id}</td>
    <td>${p.name}</td>
    <td>${p.price}</td>
    <td>${p.stock}</td>
    <td>
      <span onclick="decrementProduct(${p.id})">-</span>
      <span id='prod-${p.id}'>0</span>
      <span onclick="addProduct(${p.id})">+</span>
    </td>
  </tr>  
  `;
  TBODY.insertAdjacentHTML('beforeend',row);
});

updateCart();

function addProduct(id) {
  let product = cart.find(p => p.id == id);
  if (product) {
    product.amount++;
    updateProduct(product.id, product.amount);
  } else {
    let newProduct = {
      id: id,
      amount: 1
    };
    cart.push(newProduct);  
    updateProduct(newProduct.id, newProduct.amount);
  }
  console.log(cart);
//  localStorage.setItem('cart', cart);
//  localStorage['cart'] = cart;
  localStorage.cart = JSON.stringify(cart);
  //updateCart();
}

function decrementProduct(id) {
  let product = cart.find(p => p.id == id);
  if (product) {
    product.amount--;
    updateProduct(product.id, product.amount);
    if (product.amount==0) {
      cart.splice(cart.indexOf(product),1);
    }
  }
}


function getCart() {
  let cart2 = JSON.parse(localStorage.cart);
  console.log(cart2);
  console.log(typeof(cart2));
}

function updateProduct(id, amount) {
  console.log(id, amount);
  let spanAmount = document.getElementById('prod-'+id);
  spanAmount.textContent = amount;
}

function updateCart() {
  cart.forEach(p => updateProduct(p.id, p.amount));
}