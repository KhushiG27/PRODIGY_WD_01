const heroImage = document.getElementById('heroImage');
const dishes = document.querySelectorAll('.dish');
const cartCount = document.querySelector('.cart-Count');
const Addtocart = document.querySelectorAll('.Add-to-cart');
const hambugerbutton = document.getElementById('hamburger');
const navbar = document.getElementById('nav');

let cart = [];

//start spinning animation

window.addEventListener('load',() => {
    heroImage.classList.add('spin');
})

dishes.forEach(dish =>{
    dish.addEventListener('click', () =>{

      const newImagesrc = dish.getAttribute('data-img');

      heroImage.classList.remove('spin');

      heroImage.src = newImagesrc;

      void heroImage.offsetWidth;

      heroImage.classList.add('spin');
    });
});

Addtocart.forEach(button =>{
    button.addEventListener('click', (e) =>{
      e.stopPropagation();
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));

      cart.push({name , price});
      updatecartCount();
    })
})

function updatecartCount() {
    cartCount.textContent = cart.length;
}

hambugerbutton.addEventListener('click' , () => {
    navbar.classList.toggle('active');
})
