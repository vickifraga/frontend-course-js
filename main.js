const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIconMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-container')



navEmail.addEventListener('click', toggleDesktopMenu);
menuIconMobile.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleShoppingCart);



function toggleDesktopMenu(){
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    if (isShoppingCartOpen){
        shoppingCart.classList.add('inactive');
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
   
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    } 
    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    } 
    shoppingCart.classList.toggle('inactive');
}