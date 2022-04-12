const selecionarProdutos = function (opcao){
let resultado = document.getElementById('resultado')

switch (opcao) {
  case 'refrigerante':
    console.log('Opção selecionada é Refrigerante')
    resultado.innerHTML = "Opção selecionada é  Refrigerante"
    break;
case 'frango frito':
  console.log('Opção selecionada é Frango Frito')
  resultado.innerHTML = "Opção selecionada é  Frango Frito"
  break;
  case 'macarrão':
  console.log('Opção selecionada é Macarrão')
  resultado.innerHTML = "Opção selecionada é  Macarrão"
  break;
  default:
    console.log('Opção inválida!')
    resultado.innerHTML = "Opcão inválida"
    break;
}
}