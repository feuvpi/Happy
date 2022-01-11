
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//create map
const map = L.map('map', options).setView([51.505, -0.09], 13);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({ 
    iconUrl: "./public/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0,-65]
})

/*create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 140,
    minHeight: 140,
    maxWidth: 240,
    maxHeight: 240,
}).setContent('Lar das meninas <a href="orphanages.html?id=1" class="choose-orphanage"> <img src="/public/images/arrow-white.svg"></a>')
*/

//create and add marker
L.marker([51.5, -0.09], { icon }).addTo(map)
    .bindPopup(popup);


    /* image gallery */

    function selectImage(event){ //utilizada para dar vida a galeria da imagens 

        
        //remover todas as classes .active
        const button = event.currentTarget;

        console.log(button);

        //remover todas as clases .active
        const buttons = document.querySelectorAll(".images button")
        buttons.forEach(removeActiveClass);

        function removeActiveClass(button) {
            button.classList.remove("active");
        }
        
        
        //selecionar a imagem clicada
        const image = button.children[0];
        const imageContainer = document.querySelector(".orphanage-details > img");


        //atualizar o container de imagem grande
        imageContainer.src = image.src;

        //colocar classe .active na foto selecionada
        button.classList.add("active");
    }
  