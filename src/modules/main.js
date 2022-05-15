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

/*let newsItems = document.querySelectorAll('.news__item');

for (newsItem of newsItems) {
  let newsSubTitle = newsItem.querySelector('.news__sub-title');
  let newsMask = newsItem.querySelector('.news__mask'); 
  
  newsItem.addEventListener('mouseover', function() {    
    newsSubTitle.style.display = none;
    newsMask.style.display = block;
  })

  newsItem.addEventListener('mouseout', function() {
    newsSubTitle.style.display = block;
    newsMask.style.display = none;
  })
}*/