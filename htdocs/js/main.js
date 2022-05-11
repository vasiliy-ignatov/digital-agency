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
  let blockText = servicesItem.querySelector('.block');

  let serviceDescription = document.createElement('p');
  serviceDescription.textContent = "Создадим бла-бла-бла";
  serviceDescription.classList.add('block__text');

  let serviceAbout = document.createElement('p');
  serviceAbout.textContent = 'Подробнее';
  serviceAbout.classList.add('service-about');
  
  servicesItem.addEventListener('mouseover', function() {    
    blockText.appendChild(serviceDescription);
    blockText.appendChild(serviceAbout);
  })

  servicesItem.addEventListener('mouseout', function() {
    serviceDescription.remove();
    serviceAbout.remove();
  })
}