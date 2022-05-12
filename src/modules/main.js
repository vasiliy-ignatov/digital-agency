const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,     
    
    pagination: {
      el: '.swiper-pagination',
    },  
});

let servicesItems = document.querySelectorAll('.services__item');

for (servicesItem of servicesItems) {
  let servicesDesc = servicesItem.querySelector('.services__description');
  let servicesAbout = servicesItem.querySelector('.services__about'); 
  
  servicesItem.addEventListener('mouseover', function() {    
    servicesDesc.style.opacity = 1;
    servicesAbout.style.opacity = 1;
  })

  servicesItem.addEventListener('mouseout', function() {
    servicesDesc.style.opacity = 0;
    servicesAbout.style.opacity = 0;
  })
}