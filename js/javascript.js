/* Booking */

function setLocal(localName) {
  var email = localName;
  localStorage.setItem("mail", email);
}

function gemData(mail) {
  var newMail = mail;
  setLocal(newMail);
}

function setData(event) {
  var mail = document.querySelector('#email');

  var mailValue = mail.value;

  var tjekMail = localStorage.getItem("mail");


  if (mailValue == tjekMail) {
    erbooket.style.display = "block";
    booket.style.display = "none";
  } else {
    booket.style.display = "block";
    erbooket.style.display ="none";
    gemData(mail.value);
  }
}

  var sendData = document.querySelector("#setdata");


  if(sendData){
  sendData.addEventListener("click", setData, function(event){
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

      if(forBookAfrejsen != '' && forBookAnkomstn != '' && forBookGæsterne != '' && forBookMailen != '' && forBookEnavnet != '' && forBookFnavnet != ''){
            inputGjort.style.display = "block";
            inputMangler.style.display = "none";
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

window.onclick = function(event) {
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

var modal1 = document.querySelector(".modal1");
var modal2 = document.querySelector(".modal2");
var modal3 = document.querySelector(".modal3");
var modal4 = document.querySelector(".modal4");
var modal5 = document.querySelector(".modal5");

var visModalSigurd = document.querySelectorAll(".eventSigurd");
var visModalMikkel = document.querySelectorAll(".eventMikkel");
var visModalSmed = document.querySelectorAll(".eventSmed");
var visModalHonning = document.querySelectorAll(".eventHonning");
var visModalGarn = document.querySelectorAll(".eventGarn");

var lukModal1 = document.querySelector(".luk1");
var lukModal2 = document.querySelector(".luk2");
var lukModal3 = document.querySelector(".luk3");
var lukModal4 = document.querySelector(".luk4");
var lukModal5 = document.querySelector(".luk5");


for(var i=0;i<visModalSigurd.length;i++){
visModalSigurd[i].addEventListener("click", function(event){
    modal1.style.display = "block";
})};

if(modal1){
lukModal1.addEventListener("click", function(event){
    modal1.style.display = "none";
})};

document.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    else if (event.target == modal2) {
        modal2.style.display = "none";
    }
    else if (event.target == modal3) {
        modal3.style.display = "none";
    }
    else if (event.target == modal4) {
        modal4.style.display = "none";
    }
    else if (event.target == modal5) {
        modal5.style.display = "none";
    }
};


for(var i=0;i<visModalMikkel.length;i++){
visModalMikkel[i].addEventListener("click", function(event){
    modal2.style.display = "block";
})};

if(modal2){
lukModal2.addEventListener("click", function(event){
    modal2.style.display = "none";
})};



for(var i=0;i<visModalSmed.length;i++){
visModalSmed[i].addEventListener("click", function(event){
    modal3.style.display = "block";
})};
if(modal3){
lukModal3.addEventListener("click", function(event){
    modal3.style.display = "none";
})};


for(var i=0;i<visModalHonning.length;i++){
visModalHonning[i].addEventListener("click", function(event){
    modal4.style.display = "block";
})};
if(modal4){
lukModal4.addEventListener("click", function(event){
    modal4.style.display = "none";
})};


for(var i=0;i<visModalGarn.length;i++){
visModalGarn[i].addEventListener("click", function(event){
    modal5.style.display = "block";
})};
if(modal5){


lukModal5.addEventListener("click", function(event){
    modal5.style.display = "none";
})};

/*Kontaktformularer (Virksomhed, forening, kontakt)*/

function tjekInputForVirk(event) {
    var forVirkNavn = document.querySelector(".for-virk-navn");
    var forVirkMail = document.querySelector(".for-virk-mail");
    var forVirkKommentar = document.querySelector(".for-virk-kommentar");

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
}
