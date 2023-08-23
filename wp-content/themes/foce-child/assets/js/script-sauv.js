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
  
  observerBanner.observe(document.querySelector('.banner'));
  
  /*section L'histoire*/
  const observerHistoire = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const chatGauche = entry.target.querySelector('.main-character')
      if (entry.isIntersecting) {
        chatGauche.classList.add('animation')
        return;
      }
      chatGauche.classList.remove('animation')  
    });
  });
  
  observerHistoire.observe(document.querySelector('#characters'));
  
  /*section Les personnages*/
  const observerPersonnages = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const chatGauche = entry.target.querySelector('.main-character')
      const chatDroite = entry.target.querySelector('.other-characters')
      if (entry.isIntersecting) {
        chatGauche.classList.add('animation')
        chatDroite.classList.add('animation')
        return;
      }
      chatGauche.classList.remove('animation')
      chatDroite.classList.remove('animation')   
    });
  });
  
  observerPersonnages.observe(document.querySelector('#characters'))
  
  /*section Le lieu*/
  const observerLieu = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const lieu = entry.target.querySelector('.container-lieu')
      console.log(entry)
      if (entry.isIntersecting) {
        lieu.classList.add('animation')
        return;
      }
      lieu.classList.remove('animation')   
    });
  });
  observerLieu.observe(document.querySelector('#place'))
  
  /*section Studio Koukaki*/
  const observerStudiKoukaki = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const studio = entry.target.querySelector('h2')
   
      if (entry.isIntersecting) {
        studio.classList.add('animation')
        return; // if we added the class, exit the function
      }
      // We're not intersecting, so remove the class!
      studio.classList.remove('animation')   
    });
  });
  
  observerStudiKoukaki.observe(document.querySelector('#studio'))