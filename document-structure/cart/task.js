const products = document.querySelectorAll('.product');
const cart = {};
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
    const cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
    const productImage = product.querySelector('.product__image').getAttribute('src');
    
    if (cartProduct) {
      const cartProductCount = cartProduct.querySelector('.cart__product-count');
      
      let cartProductQuantity = parseInt(cartProductCount.textContent);
      let productQuantity = parseInt(quantityValue.textContent);
      
            
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
      
      let cartContainer = document.querySelector('.cart');
      cartContainer.appendChild(cartProduct);
    }
  };
  
  const addToCartButton = product.querySelector('.product__add');
  addToCartButton.addEventListener('click', addToCart);
 
  const increaseButton = product.querySelector('.product__quantity-control_inc');
  increaseButton.addEventListener('click', increaseQuantity);

  const decreaseButton = product.querySelector('.product__quantity-control_dec');
  decreaseButton.addEventListener('click', decreaseQuantity);
});

const productAddButtons = document.querySelectorAll('.product__add');
productAddButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const product = event.target.closest('.product');
    const productId = product.getAttribute('data-id');
    const productTitle = product.querySelector('.product__title').textContent;
    const productImageSrc = product.querySelector('.product__image').getAttribute('src');
    const productCount = product.querySelector('.product__quantity-value').textContent;

    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.setAttribute('data-id', productId);

    const cartProductImage = document.createElement('img');
    cartProductImage.classList.add('cart__product-image');
    cartProductImage.setAttribute('src', productImageSrc);
    cartProduct.appendChild(cartProductImage);

    const cartProductCount = document.createElement('div');
    cartProductCount.classList.add('cart__product-count');
    cartProductCount.textContent = productCount;
    cartProduct.appendChild(cartProductCount);

    const cartProducts = document.querySelector('.cart__products');
    cartProducts.appendChild(cartProduct);
  });
});
