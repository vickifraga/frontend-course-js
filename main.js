const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIconMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-container');
const productCardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');



navEmail.addEventListener('click', toggleDesktopMenu);
menuIconMobile.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    if (isShoppingCartOpen){
        shoppingCart.classList.add('inactive');
    }
    if (isProductDetailOpen){
        productDetailContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    if (isShoppingCartOpen){
        shoppingCart.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
   
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    } 
    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    } 
    if (isProductDetailOpen){
        productDetailContainer.classList.add('inactive');
    } 
    shoppingCart.classList.toggle('inactive');
}

function openProductDetailAside() {
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    if (isShoppingCartOpen){
        shoppingCart.classList.add('inactive');
    }
    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    } 
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Couch',
    price: 189,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=658&q=80"
});
productList.push({
    name: 'Dinning table',
    price: 279,
    image: "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Mirror',
    price: 24,
    image: "https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Frames',
    price: 37,
    image: "https://images.pexels.com/photos/4185946/pexels-photo-4185946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Mini Sofa',
    price: 153,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
});
productList.push({
    name: 'Bedside Table',
    price: 189,
    image: "https://images.pexels.com/photos/4440214/pexels-photo-4440214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Kids Furniture',
    price: 458,
    image: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Girls'bed",
    price: 32,
    image: "https://images.pexels.com/photos/763148/pexels-photo-763148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Office Funiture",
    price: 452,
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Couch',
    price: 189,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=658&q=80"
});

//Agregar las tarjetas de Producto al HTML
function renderProducts(productArrays){
    for (product of productArrays) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const cartIcon = document.createElement('img');
        cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(cartIcon);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        productCardContainer.appendChild(productCard);
    }
}

renderProducts(productList)
