//Accélaration des fleurs au scroll
const root = document.querySelector(':root');
 // scroll : scroll détécté
document.addEventListener('scroll', () => {
    root.style.setProperty('--speed','1s');
})
// scrollend : fin du scroll détecté
document.addEventListener('scrollend', () => {
    root.style.setProperty('--speed','3s');
})

//banner - image - video*/
const observerBanner = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    //const logoBanner = entry.target.querySelector('.banner-logo')
    const videoBanner = entry.target.querySelector('.banner video')
    if (entry.isIntersecting) {
      //logoBanner.classList.add('animation')
      videoBanner.classList.add('animation-video')
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    //logoBanner.classList.remove('animation')
    videoBanner.classList.remove('animation-video')
  });
});

observerBanner.observe(document.querySelector('.banner')); //Banner image - video

/*=================================================================================================*/
/*Animation sections*/
const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }        
    })
},
   { threshold: 0.2
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];
    observer.observe(elements);
  }

// function removeElement() {
//   let child = document.querySelector("p");
//   child.remove();
// }

/*===================================================================================================================*/
/*Animation nuages*/
const observerNuages = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const petitNuage = entry.target.querySelector('.petit-nuage')
    const grandNuage = entry.target.querySelector('.grand-nuage')
    if (entry.isIntersecting) {
      petitNuage.classList.add('animation-nuages')
      grandNuage.classList.add('animation-nuages')
      return;
    }
    petitNuage.classList.remove('animation-nuages')
    grandNuage.classList.remove('animation-nuages')
  });
});

observerNuages.observe(document.querySelector('#place')); //Animation nuages

/*=============================================OK======================================*/



//Swiper

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const swiper = new Swiper('.swiper', {

  // Optional parameters

  loop: true,

//   slidesPerView: 3,

  slidesPerView: 'auto',

//   initialSlide: 3,

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







//
///*section L'histoire*/
//const observerHistoire = new IntersectionObserver(entries => {
//  entries.forEach(entry => {
//    const chatGauche = entry.target.classList.remove('story__article:not(p)')
//    const chatG = entry.target.querySelector('story__article')
//    if (entry.isIntersecting) {
//      chatGauche.classList.add('animation')
//      chatG.classList.add('animation')
//
//      return;
//    }
//    chatGauche.classList.remove('animation')
//    chatG.classList.remove('animation')
//  });
//});
//
//observerHistoire.observe(document.querySelector('.story')); //Lhistoire
//
///*section Les personnages*/
//const observerPersonnages = new IntersectionObserver(entries => {
//  entries.forEach(entry => {
//    const chatGauche = entry.target.querySelector('.main-character')
//    const chatDroite = entry.target.querySelector('.other-characters')
//    if (entry.isIntersecting) {
//      chatGauche.classList.add('animation')
//      chatDroite.classList.add('animation')
//      return;
//    }
//    chatGauche.classList.remove('animation')
//    chatDroite.classList.remove('animation')   
//  });
//});
//
//observerPersonnages.observe(document.querySelector('#characters')) //Personnages
//
///*section Le lieu*/
//const observerLieu = new IntersectionObserver(entries => {
//  entries.forEach(entry => {
//    const lieu = entry.target.querySelector('.container-lieu')
//    console.log(entry)
//    if (entry.isIntersecting) {
//      lieu.classList.add('animation')
//      return;
//    }
//    lieu.classList.remove('animation')   
//  });
//});
//
//observerLieu.observe(document.querySelector('#place')) //Lieu
//
///*section Studio Koukaki*/
//const observerStudiKoukaki = new IntersectionObserver(entries => {
//  entries.forEach(entry => {
//    const studio = entry.target.querySelector('h2')
// 
//    if (entry.isIntersecting) {
//      studio.classList.add('animation')
//      return; // if we added the class, exit the function
//    }
//    // We're not intersecting, so remove the class!
//    studio.classList.remove('animation')   
//  });
//});
//
//observerStudiKoukaki.observe(document.querySelector('#studio')) //StudioKoukaki