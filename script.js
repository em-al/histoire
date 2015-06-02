histoire = document.getElementById("histoire");
ajout = document.getElementById("ajout");
button = document.getElementById("reponse");

function ajouter() {
  histoire.innerHTML += ajout.value;
  ajout.value = "";
}

button.onclick = ajouter;

