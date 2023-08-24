





/*=====================================================================================*/

const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        return
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 





///*banner - image - video*/
//const observerBanner = new IntersectionObserver(entries => {
//  entries.forEach(entry => {
//    const logoBanner = entry.target.querySelector('.banner-logo')
//    const videoBanner = entry.target.querySelector('.banner video')
//    if (entry.isIntersecting) {
//      logoBanner.classList.add('animation')
//      videoBanner.classList.add('animation-video')
//      return; // if we added the class, exit the function
//    }
//    // We're not intersecting, so remove the class!
//    logoBanner.classList.remove('animation')
//    videoBanner.classList.remove('animation-video')
//  });
//});
//
//observerBanner.observe(document.querySelector('.banner')); //Banner image - video
//
///*===========================================================================================*/
//
///*!!!!!Grande Section!!!!!*/
//const observerGrandeSection = new IntersectionObserver(entries => {
//  entries.forEach(entry => {
//    const story = entry.target.querySelector('.on-animation');
//    //const storyParagraphe = entry.target.querySelector('.story__article')
//   //const element = document.getElementById("p#no-texte");
//   //element.remove();
//    if (entry.isIntersecting) {
//      story.classList.add('animation')
//
//      //storyParagraphe.classList.remove('animation')
//      return; // if we added the class, exit the function
//    }
//    // We're not intersecting, so remove the class!
//    story.classList.remove('animation')
//  });
//});
//
//observerGrandeSection.observe(document.querySelector('.site-main')); //Banner image - video


/*!!!!Fin Grande Section!!!!!!!!*/






///*==========================================================================================*/
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