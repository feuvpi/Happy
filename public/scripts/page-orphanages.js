
//create map
const map = L.map('map').setView([51.505, -0.09], 13);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({ 
    iconUrl: "./public/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0,-65]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 140,
    minHeight: 140,
    maxWidth: 240,
    maxHeight: 240,
}).setContent('Lar das meninas <a href="orphanage.html" class="choose-orphanage"> <img src="/public/images/arrow-white.svg"></a>')

//create and add marker
L.marker([51.5, -0.09], { icon }).addTo(map)
    .bindPopup(popup);

/* image gallery */

