const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
  const productId = product.dataset.id;
  const quantityValue = product.querySelector('.product__quantity-value');

  const increaseQuantity = () => {
    let quantity = parseInt(quantityValue.textContent);
    if (quantity < 1) {
      quantity = 1;
    } else {
      quantity += 1;
    }
    quantityValue.textContent = quantity;
  };

  const decreaseQuantity = () => {
    let quantity = parseInt(quantityValue.textContent);
    if (quantity > 1) {
      quantity -= 1;
    }
    quantityValue.textContent = quantity;
  };

  const addToCart = () => {
    const productInCart = Array.from(cartProducts.children).find(cartProduct => cartProduct.dataset.id === productId);

    const productImage = product.querySelector('.product__image').getAttribute('src');

    if (productInCart) {
      const cartProductCount = productInCart.querySelector('.cart__product-count');
      const productQuantity = parseInt(quantityValue.textContent);
      let cartProductQuantity = parseInt(cartProductCount.textContent);
      cartProductQuantity += productQuantity;
      cartProductCount.textContent = cartProductQuantity;
    } else {
      const cartProduct = `
        <div class="cart__product" data-id="${productId}">
          <img class="cart__product-image" src="${productImage}" alt="Product Image">
          <div class="cart__product-count">${quantityValue.textContent}</div>
        </div>
      `;
      cartProducts.insertAdjacentHTML('beforeend', cartProduct);
    }
  };

  const addToCartButton = product.querySelector('.product__add');
  addToCartButton.addEventListener('click', addToCart);

  const increaseButton = product.querySelector('.product__quantity-control_inc');
  increaseButton.addEventListener('click', increaseQuantity);

  const decreaseButton = product.querySelector('.product__quantity-control_dec');
  decreaseButton.addEventListener('click', decreaseQuantity);
});
