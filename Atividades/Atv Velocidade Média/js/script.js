let calcular = document.querySelector('#calcular')
calcular.addEventListener('click', Calculando)
let limpar = document.querySelector('#limpar')
limpar.addEventListener('click', Limpando)
let lista = document.getElementById('lista').value

function Calculando(){
    let a = Number.parseFloat(document.getElementById('deslocamento').value)
    let b = Number.parseFloat(document.getElementById('tempo').value)
    let res = ( (a / b) + " km/h")
    document.getElementById('resposta').value = res
    document.getElementById("lista").innerHTML += res + "                                                                                                   "

}

function Limpando(){
    a = (" ")
    b = (" ")
    res = (" ")
  document.getElementById('deslocamento').value = a
  document.getElementById('tempo').value = b
  document.getElementById('resposta').value = res
}
