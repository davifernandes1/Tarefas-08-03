let calcular = document.querySelector('#calcular')
calcular.addEventListener('click', Calculando)
let limpar = document.querySelector('#limpar')
limpar.addEventListener('click', Limpando)
let lista = document.getElementById('lista').value

function Calculando(){
    let a = Number.parseFloat(document.getElementById('deslocamento').value)
    let b = Number.parseFloat(document.getElementById('tempo').value)
    let Resultado = ( (a / b) + " km/h")
    document.getElementById('resposta').value = Resultado
    document.getElementById("lista").innerHTML += Resultado + "                                                                                                   "
    localStorage.setItem('Resultado ', Resultado )
}

function Limpando(){
    a = (" ")
    b = (" ")
Resultado  = (" ")
  document.getElementById('deslocamento').value = a
  document.getElementById('tempo').value = b
  document.getElementById('resposta').value = Resultado
}
