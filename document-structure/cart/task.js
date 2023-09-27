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
      const cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.dataset.id = productId;

      const cartProductImage = document.createElement('img');
      cartProductImage.classList.add('cart__product-image');
      cartProductImage.src = productImage;

      const cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = quantityValue.textContent;

      cartProduct.appendChild(cartProductImage);
      cartProduct.appendChild(cartProductCount);
      
      cartProducts.appendChild(cartProduct);
    }
  };

  const addToCartButton = product.querySelector('.product__add');
  addToCartButton.addEventListener('click', addToCart);

  const increaseButton = product.querySelector('.product__quantity-control_inc');
  increaseButton.addEventListener('click', increaseQuantity);

  const decreaseButton = product.querySelector('.product__quantity-control_dec');
  decreaseButton.addEventListener('click', decreaseQuantity);
});
