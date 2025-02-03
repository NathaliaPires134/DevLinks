function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/AvatarLight.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
  }

  //substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("alt", "foto do botão de uma flor girassol")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("alt", "foto de uma flor girassol")
  }
}
