let selectPai = document.getElementById('selectPai')

let verde = document.getElementById('verde')
let vermelho = document.getElementById('vermelho')
let amarelo = document.getElementById('amarelo')
let azul = document.getElementById('azul')

function mudar(el) {

  for (i = 0; i < selectPai.children.length; i++) {
    selectPai.children[i].classList.toggle('escondido')
    selectPai.children[i].classList.toggle('selecionado')
  }

  el.classList.toggle('escondido')
  el.classList.toggle('selecionado')

  if (azul.classList.contains('selecionado') && amarelo.classList.contains('escondido')) {
    selectPai.style.backgroundColor = 'rgb(145 172 191)'
  } else if (verde.classList.contains('selecionado') && amarelo.classList.contains('escondido')) {
    selectPai.style.backgroundColor = 'rgb(162 199 181)'
  } else if (amarelo.classList.contains('selecionado') && azul.classList.contains('escondido')) {
    selectPai.style.backgroundColor = 'rgb(245 220 141)'
  } else if (vermelho.classList.contains('selecionado') && azul.classList.contains('escondido')) {
    selectPai.style.backgroundColor = 'rgb(227 91 91)'
  } else {
    selectPai.style.backgroundColor = '#fff'
  }

}
