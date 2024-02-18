const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const musicaElement = document.getElementById("musica");
const artistaElement = document.getElementById("artista");

let musicaAtual = {
  musica: "Música 1",
  artista: "Artista 1",
};

function tocarMusica() {
  // Começar a tocar a música
  console.log("Tocando música:", musicaAtual.musica);
  musicaElement.textContent = musicaAtual.musica;
  artistaElement.textContent = musicaAtual.artista;
}

function pausarMusica() {
  // Pausar a música
  console.log("Pausando música:", musicaAtual.musica);
}

playButton.addEventListener("click", tocarMusica);
pauseButton.addEventListener("click", pausarMusica);
