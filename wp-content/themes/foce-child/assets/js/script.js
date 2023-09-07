/*Accélération fleurs au scroll*/
let root = document.querySelector(':root'); //récupère l'élément

document.addEventListener('scroll', () => {//écouteur d'événement
    root.style.setProperty('--speed', '0.5s');
});

document.addEventListener('scrollend', () => {
    root.style.setProperty('--speed', '3s');
});

/*Titres bleus*/
const observerTitle = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
      if(entry.isIntersecting) {
          entry.target.classList.add('title-animation');
      } else {
        entry.target.classList.remove('title-animation')
    }
  })
}, {
  root:null,
  rootMargin: '0px',
  threshold: 0.5
});

const spans = document.querySelectorAll('span');

spans.forEach(span=>{
  observerTitle.observe(span);
});

/*Swiper personnages*/
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
  rotate: 0,                      
  depth: 200,                     
  stretch: 60,                    
  slideShadows: false,            
  },
  autoplay: isMobile ? false : {
  delay: 5000,
  disableOnInteraction: false,
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    320:{
      slidesPerView: 2,
    },
    996:{
      slidesPerView: 3,
    }
}
});

/*Nuages*/
const littleCloud = document.querySelector('.petit-nuage');
const bigCloud = document.querySelector('.grand-nuage');
const initialPosition = 600;

document.addEventListener('scroll', () => {
   let scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

   if( scrollPercentage > 40 ) {
       bigCloud.style.left = Math.min( (initialPosition + ( ( scrollPercentage - 40 ) * 12 ) ), 900)  + 'px';
       littleCloud.style.left = Math.min( (initialPosition - 100 + ( ( scrollPercentage - 40 ) * 12 ) ), 800) + 'px';

   }

   //console.log(scrollPercentage);
})

/*Menu Fullscreen*/
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.fullscreen-menu');

menuBtn.addEventListener('click', event => {
    event.target.classList.toggle('active');
    menu.classList.toggle('open');
})

/* Fermeture menu au clic sur un lien */
const menuLinks = document.querySelectorAll('.fullscreen-menu a');
menuLinks.forEach(link => {
link.addEventListener('click', function(event) {
menu.classList.toggle('open');
})
})