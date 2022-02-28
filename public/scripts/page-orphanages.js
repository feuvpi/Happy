
//create map
const map = L.map('map').setView([-12.98959, -38.45454], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({ 
    iconUrl: "/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0,-65]
})


function addMarker({id, name, lat, lng}){

    //create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 140,
    minHeight: 140,
    maxWidth: 240,
    maxHeight: 240,
}).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"></a>`)

//create and add marker
L.marker([lat, lng], { icon }).addTo(map)
    .bindPopup(popup);

}

//chamar a função addMarker para cada objeto do banco de dados
const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }

    console.log(orphanage)

    addMarker(orphanage)
})

/* image gallery */

