(() => {

    setTimeout(() => {
  
      document.querySelector('.spinner').classList.add('invisible');
      document.querySelector('main').classList.remove('invisible');
      document.querySelector('footer').classList.remove('invisible');
      initMap();
    }, 2000)
    
  })()

  function initMap() {
    let myLatLng = {lat: -15.892186, lng: -48.106137};

    let map = new google.maps.Map(document.querySelector('#map'), {
      zoom: 16,
      center: myLatLng
    });

    let marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'WR Eletrônica'
    });
  }