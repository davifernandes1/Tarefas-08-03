const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Magreza'
    } else if (imc < 25) {
      classification = 'Peso Normal'
    } else if (imc < 30) {
      classification = 'Sobrepeso'
    } else if (imc < 35) {
      classification = 'Obesidade'
    } else if (imc < 41) {
      classification = 'Obesidade Nível Grave'
    } else {
      classification = 'Obeso demais'
    }
    
    resultado.innerHTML = `IMC : ${imc} ${classification}`
  } else {
    resultado.innerHTML= 'Preencha correntamente os campos do cálculo'
  }
}
const apagarIMC = function () {

  const resultado = document.querySelector('#resultado').value = ""
  const altura = document.querySelector('#altura').value = ""
  const peso = document.querySelector('#peso').value = ""

}