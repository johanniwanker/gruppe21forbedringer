/* Booking */

function setLocal(localName) {
  var email = localName;
  localStorage.setItem("mail", email);
}

function gemData(mail) {
  var newMail = mail;
  setLocal(newMail);
}

function setData(mail) {

  var mailValue = mail;

  var tjekMail = localStorage.getItem("mail");

  if (mailValue == tjekMail) {
    erbooket.style.display = "block";
    booket.style.display = "none";
  } else {
    booket.style.display = "block";
    erbooket.style.display ="none";
    gemData(mailValue);
  }
}

  var sendData = document.querySelector("#setdata");

  if(sendData){
  sendData.addEventListener("click", function(event){
      sendData.style.display = "block";
  })};

  var husk = document.querySelector("#husk");

  function tjekInputForBook(event) {
      var forBookFnavn = document.querySelector(".book-fnavn");
      var forBookEnavn = document.querySelector(".book-enavn");
      var forBookMail = document.querySelector(".book-mail");
      var forBookGæster = document.querySelector(".book-gæster");
      var forBookAnkomst = document.querySelector(".book-ankomst");
      var forBookAfrejse = document.querySelector(".book-afrejse");

      var forBookFnavnet = forBookFnavn.value;
      var forBookEnavnet = forBookEnavn.value;
      var forBookMailen = forBookMail.value;
      var forBookGæsterne = forBookGæster.value;
      var forBookAnkomsten = forBookAnkomst.value;
      var forBookAfrejsen = forBookAfrejse.value;

      var inputGjort = document.querySelector("#booket");
      var inputMangler = document.querySelector(".mangler-input");

      if(forBookAfrejsen != '' && forBookAnkomst != '' && forBookGæsterne != '' && forBookMailen != '' && forBookEnavnet != '' && forBookFnavnet != ''){
            inputGjort.style.display = "block";
            inputMangler.style.display = "none";
            setData(forBookMailen);
  }else{
        inputMangler.style.display = "block";
        inputGjort.style.display = "none";
  }
  }

  var tjekInputFra = document.querySelector(".tjek-book");

  if (tjekInputFra){
      tjekInputFra.addEventListener("click", tjekInputForBook);
  }


/* Kampagne */
var modalbackground = document.querySelector(".modalbackground");
var modalbackground2 = document.querySelector(".modalbackground2");
var modalbackground3 = document.querySelector(".modalbackground3");

var talebobbelbutton = document.querySelector(".talebobbelbutton");
var talebobbelbutton2 = document.querySelector(".talebobbelbutton2");
var ledesend = document.querySelector(".ledesend");

var close = document.querySelector(".close");
var close2 = document.querySelector(".close2");
var close3 = document.querySelector(".close3");

if(modalbackground){
talebobbelbutton.addEventListener("click", function(event){
  modalbackground.style.display = "block";
})};

if(modalbackground2){
talebobbelbutton2.addEventListener("click", function(event){
  modalbackground2.style.display = "block";
})};

function tjekInput(event) {
    var ledeNavn = document.querySelector("#lede-navn");
    var ledeMail = document.querySelector("#lede-mail");
    var ledeTraad = document.querySelector("#ledetraad");

    var navnTest = ledeNavn.value;
    var mailTest = ledeMail.value;
    var traadTest = ledeTraad.value;

    if(navnTest != '' && mailTest != '' && traadTest != ''){
          modalbackground2.style.display = "none";
          modalbackground3.style.display = "block";
          husk.style.display = "none";
          document.getElementById("ledetraad").value = "";
}else{
    husk.style.display = "block";
}
}
var husk = document.querySelector("#husk");


var ledeSend = document.querySelector(".ledesend");
if (ledeSend){
    ledeSend.addEventListener("click", tjekInput);
}

if(modalbackground){
close.addEventListener("click", function(event){
    modalbackground.style.display = "none";
})};

if(modalbackground2){
close2.addEventListener("click", function(event){
    modalbackground2.style.display = "none";
})};

if(modalbackground3){
close3.addEventListener("click", function(event){
    modalbackground3.style.display = "none";
})};

document.onclick = function(event) {
    if (event.target == modalbackground) {
        modalbackground.style.display = "none";
    }
    else if (event.target == modalbackground2) {
        modalbackground2.style.display = "none";
    }
    else if (event.target == modalbackground3) {
        modalbackground3.style.display = "none";
    }
};

/* Program */

var modal = document.querySelectorAll(".modalHer");
var eventKnap = document.querySelectorAll(".eventKnap");
var lukModal = document.querySelector(".lukModal");

for(var i=0;i<eventKnap.length;i++){
  eventKnap[i].addEventListener("click", function(event){
  var modal = document.querySelectorAll(".modalHer");
    for(var i=0;i<modal.length;i++){
      modal[i].style.display = "block";
        if (event.currentTarget.classList[4] == "sigurdKnap") {
          document.querySelector("#sigurdHidden").style.display = "block";
        }
        else if (event.currentTarget.classList[4] == "mikkelKnap") {
          document.querySelector("#mikkelHidden").style.display = "block";
        }
        else if (event.currentTarget.classList[4] == "smedKnap") {
          document.querySelector("#smedHidden").style.display = "block";
        }
        else if (event.currentTarget.classList[4] == "honningKnap") {
          document.querySelector("#honningHidden").style.display = "block";
        }
        else if (event.currentTarget.classList[4] == "garnKnap") {
          document.querySelector("#garnHidden").style.display = "block";
        }
    }
  })

};

window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
        document.querySelector("#sigurdHidden").style.display = "none";
        document.querySelector("#mikkelHidden").style.display = "none";
        document.querySelector("#smedHidden").style.display = "none";
        document.querySelector("#honningHidden").style.display = "none";
        document.querySelector("#garnHidden").style.display = "none";
    }
};

if (lukModal){
  lukModal.addEventListener("click", function(event){
    modal[0].style.display = "none";
    document.querySelector("#sigurdHidden").style.display = "none";
    document.querySelector("#mikkelHidden").style.display = "none";
    document.querySelector("#smedHidden").style.display = "none";
    document.querySelector("#honningHidden").style.display = "none";
    document.querySelector("#garnHidden").style.display = "none";
})};

/*Kontaktformularer (Virksomhed, forening, kontakt)*/

function tjekInputForVirk(event) {
    var forVirkNavn = document.querySelector(".for-virk-navn");
    var forVirkMail = document.querySelector(".for-virk-mail");
    var forVirkKommentar = document.querySelector(".for-virk-kommentar");


function store(){
    var inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
  };
    var forVirkNavnet = forVirkNavn.value;
    var forVirkMailen = forVirkMail.value;
    var forVirkKommentaren = forVirkKommentar.value;

    var inputJa = document.querySelector(".input-udfyldt");
    var inputNej = document.querySelector(".husk-input");

    if(forVirkKommentaren != '' && forVirkMailen != '' && forVirkNavnet != ''){
          inputJa.style.display = "block";
          inputNej.style.display = "none";
}else{
      inputNej.style.display = "block";
      inputJa.style.display = "none";
}
}

var tjekInputTil = document.querySelector(".tjek-input");
if (tjekInputTil){
    tjekInputTil.addEventListener("click", tjekInputForVirk);
}

// Mobil menu
var aaben = document.querySelector(".aaben");
var luk = document.querySelector(".luk");
var mobilMenu = document.querySelector(".mobile-menu");

if(aaben){
aaben.addEventListener("click", function(event){
    aaben.style.display = "none";
    luk.style.display = "flex";
    mobilMenu.style.display = "block";
})};
if(luk){
luk.addEventListener("click", function(event){
    aaben.style.display = "flex";
    luk.style.display = "none";
    mobilMenu.style.display = "none";
})};


/*Kortet*/

//Laver global variable
var map;
//Laver funktion
function initMap() {
  //Nyt stylearray
  var vardeStyle = [{
      "featureType": "transit.station.bus",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
        }]
    },{
      "elementType": "geometry",
      "stylers": [{
        "color": "#242f3e"
        }]
    },{
      "elementType": "geometry.fill",
      "stylers": [{
          "color": "#010736"
    },{
          "visibility": "on"
        }]
    },{
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#746855"
        }]
    },{
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#242f3e"
        }]
    },{
      "featureType": "administrative.land_parcel",
      "stylers": [{
        "visibility": "off"
        }]
    },{
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
        }]
    },{
      "featureType": "poi.business",
      "stylers": [{
        "visibility": "off"
        }]
    },{
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
        }]
    },{
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#14500c"
        }]
    },{
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "on"
        }]
    },{
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#6b9a76"
        }]
    },{
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#38414e"
        }]
    },{
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#212a37"
        }]
    },{
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9ca5b3"
        }]
    },{
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#746855"
        }]
    },{
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#1f2835"
        }]
    },{
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#f3d19c"
        }]
    },{
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#cd9508"
        }]
    },{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#17263c"
        }]
    },{
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#2615bf"
        }]
    },{
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#515c6d"
        }]
    },{
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers":[{
        "color": "#17263c"
        }]
    },{
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
          "color": "#2f3948"
        },{
          "visibility": "on"
    },{
          "weight": 0.5
      }]
    }
  ];

  //Laver nyt StyledMap og link til stylearray
  var vardeStyledMap = new google.maps.StyledMapType(vardeStyle, {
    name: ""
  });

  //Sætter startoptions for kortet
  var mapOptions = {
    center: new google.maps.LatLng(55.619487, 8.479085),
    zoom: 15,
    disableDefaultUI: true
  };

  //Henter DOM element til kortet
  var mapElement = document.getElementById("mapDiv");

  //Laver kort med DOM elementet
  map = new google.maps.Map(mapElement, mapOptions);

  //Link nyt kort-id til styled kortobjektet
  map.mapTypes.set('new_varde_style', vardeStyledMap);

  //Sætter nyt kort-id til at blive vist
  map.setMapTypeId('new_varde_style');

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.620111, lng: 8.479482},
    map: map,
    title: 'Toilet ved Rådhuset',
    icon: 'img/toilet.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.619471, lng: 8.479967},
    map: map,
    title: 'Toilet ved bibliotek',
    icon: 'img/toilet.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.621625, lng: 8.480162},
    map: map,
    title: 'Toilet ved bibliotek',
    icon: 'img/toilet.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.621512, lng: 8.479924},
    map: map,
    title: 'Parkering ved Fogtmanns Pl.',
    icon: 'img/parking.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.620906, lng: 8.481099},
    map: map,
    title: 'Parkering ved Murtfeldts Pl.',
    icon: 'img/parking.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.618364, lng: 8.481205},
    map: map,
    title: 'Parkering ved Åen.',
    icon: 'img/parking.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.618340, lng: 8.483608},
    map: map,
    title: 'Parkering ved Åen.',
    icon: 'img/parking.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.618908, lng: 8.474939},
    map: map,
    title: 'Parkering ved Jacobi-Hallen.',
    icon: 'img/parking.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.620998, lng: 8.475148},
    map: map,
    title: 'Parkering ved Jacobi-Hallen.',
    icon: 'img/parking.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.617612, lng: 8.477687},
    map: map,
    title: 'Begivenheder ved Åen.',
    icon: 'img/logomarker.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.620467, lng: 8.479980},
    map: map,
    title: 'Begivenheder på Torvet.',
    icon: 'img/logomarker.png'
  });

  //Sætter en marker på kortet
  var marker = new google.maps.Marker ({
    position: {lat: 55.622003, lng: 8.482061},
    map: map,
    title: 'Begivenheder ved St. Nicolai Pl.',
    icon: 'img/logomarker.png'
  });
}
