//create map
const map = L.map("map").setView([51.505, -0.09], 13);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  //popupAnchor: [0,-65]
});

/*create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 140,
    minHeight: 140,
    maxWidth: 240,
    maxHeight: 240,
}).setContent('Lar das meninas <a href="orphanage.html" class="choose-orphanage"> <img src="/public/images/arrow-white.svg"></a>')
*/

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove last icon layer
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//pictures upload
function addPhotoField() {
  // selecionar o container geral de fotos com o id #images
  const container = document.querySelector("#images");

  // selecionar o container individual para duplicar com a classe .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // clonar o campo da ultima imagem adicionada com a funcionalidade cloneNode(true)
  const newFieldContainer =
    fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  //verificar se ultimo campo adicionado esta vazio, se sim, interromper a operação
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  // limitar o numero de imagens adicionadas para 6
  if (fieldsContainer.length == 6) {
    return;
  }

  // limpar o campo clonado para
  newFieldContainer.children[0].value = "";

  //adicionar o clone criado ao container geral de imagens
  container.appendChild(newFieldContainer);
}

//deletando um campo de link para imagem adicionada
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

// select yes or no button

//select yes or no
function toggleSelect(event) {
  //clear active class from both buttons
  const buttons = document.querySelectorAll(".button-select button");
  buttons.forEach(removeActiveClass);
  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //get selected button
  button = event.currentTarget;
  console.log(button);

  //insert active class on selected buttons
  button.classList.add("active");

  //verify its valor
  let value = event.target.attributes.value.value;

  //update hidden input with selected value
  document.querySelector("[name=OpenWeekends]").value = value;
}

//FAZER VERIFICAÇÃO SE TODOS OS CAMPOS DO FORMULARIO FORAM PREENCHIDOS
function validade(event){
  
  
  //Validar se lat e lng estão preenchidos
  const needLatAndLong = true;
  if(needLatAndLong) {
    event.preventDefault(); //Não enviar o formulario
    alert('Selecione um ponto no mapa!')
  }

}
