(() => {

    setTimeout(() => {
  
      document.querySelector('.spinner').classList.add('invisible');
      document.querySelector('main').classList.remove('invisible');
      document.querySelector('footer').classList.remove('invisible');
      initMap();
    }, 2000)
    
  })()