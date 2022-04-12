const selecionarProdutos = function (opcao){
let resultado = document.getElementById('resultado')

switch (opcao) {
  case 'sul':
    console.log('Essa cidade é do Sul')
    resultado.innerHTML = "Essa cidade é do Sul"
    break;
case 'sudeste':
  console.log('Essa cidade é do Sudeste')
  resultado.innerHTML = "Essa cidade é do Sudeste"
  break;
  case 'nordeste':
  console.log('Essa cidade é do Nordeste')
  resultado.innerHTML = "Essa cidade é do Nordeste"
  break;
  case 'norte':
    console.log('Essa cidade é do Norte')
    resultado.innerHTML = "Essa cidade é do Norte"
    break;
    case 'leste':
      console.log('Essa cidade é do Leste')
      resultado.innerHTML = "Essa cidade é do Leste"
      break;
      case 'oeste':
        console.log('Essa cidade é do Oeste')
        resultado.innerHTML = "Essa cidade é do Oeste"
        break;
        case 'centro-oeste':
          console.log('Essa cidade é do Centro Oeste')
          resultado.innerHTML = "Essa cidade é do Centro Oeste"
          break;
  default:
    console.log('Opção inválida!')
    resultado.innerHTML = "Opcão inválida"
    break;
}
}