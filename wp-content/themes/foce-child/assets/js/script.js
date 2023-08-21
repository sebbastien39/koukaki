
// $("p:not('.no-texte')")

//$(document).ready(function(){
  //Anime plusieurs propriétés en même te
//      $(".banner-logo").animate({
//        opacity: 0;
//        transform: translate(0px, 0px);
//      });
//});
//}


//$('p').on( 'click', function () {
//  alert("Quelqu'un a cliqué sur un paragraphe!")
//});


// removeAttr() : supprime un attribut, RIP
// .fadeIn()



//let storyFadeIn = document.getElementById(".story");
//storyFadeIn.classList.remove("p")
//storyFadeIn.remove(p)



//window.addEventListener('scroll',(event) => {
//    console.log('Scrolling...');
//});

const story = document.querySelector(".story")

story.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")
    
})

//onst observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const square = entry.target.querySelector('.story');
// 
//     if (entry.isIntersecting) {
//       square.classList.add('story');
//       return; // if we added the class, exit the function
//     }
// 
//     // We're not intersecting, so remove the class!
//     square.classList.remove('story');
//   });
// });
// 
// observer.observe(document.querySelector('.site.main'));


  //const observer = new IntersectionObserver(entries => {
  //  entries.forEach(entry => {
  //    const square = entry.target.querySelector('.square');
  //
  //    if (entry.isIntersecting) {
  //      square.classList.add('square-animation');
  //      return; // if we added the class, exit the function
  //    }
  //
  //    // We're not intersecting, so remove the class!
  //    square.classList.remove('square-animation');
  //  });
  //});
  //
  //observer.observe(document.querySelector('.square-wrapper'));