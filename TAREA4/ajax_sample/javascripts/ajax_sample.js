let number = 0;
let data = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      console.log(request.responseText); // Verificar la respuesta del servidor en la consola
      data = JSON.parse(request.responseText);
      updateContent();
    }
  }
  request.open("GET", "javascripts/ajax.json");
  request.send();
}

function updateContent() {
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number = (number + 1) % data.length;
}

button.addEventListener('click', updateContent);

window.onload = getData;

