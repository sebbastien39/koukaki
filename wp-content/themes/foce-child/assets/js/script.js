/*banner - image - video*/
const observerBanner = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const logoBanner = entry.target.querySelector('.banner-logo')
    const videoBanner = entry.target.querySelector('.banner video')
    if (entry.isIntersecting) {
      logoBanner.classList.add('animation')
      videoBanner.classList.add('animation-video')
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    logoBanner.classList.remove('animation')
    videoBanner.classList.remove('animation-video')
  });
});

/*Accélération fleurs au scroll*/
let root = document.querySelector(':root');

document.addEventListener('scroll', () => {
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

   console.log(scrollPercentage);
})

/*Menu Fullscreen*/
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.fullscreen-menu');

menuBtn.addEventListener('click', event => {
    event.target.classList.toggle('active');
    menu.classList.toggle('open');
})