const selecionarProdutos = function (opcao){
    let resultado = document.getElementById('resultado')
    
    switch (opcao) {
      case 'higiene':
        console.log('Esse produto é de Higiene')
        resultado.innerHTML = "Esse produto é de Higiene"
        break;
    case 'vestuario':
      console.log('Esse produto é um Vestuário')
      resultado.innerHTML = "Esse produto é um Vestuário"
      break;
      case 'limpeza':
      console.log('Esse produto é de Limpeza')
      resultado.innerHTML = "Esse produto é de Limpeza"
      break;
      case 'alimento nao perecivel':
        console.log('Esse produto é um alimento não perecível')
        resultado.innerHTML = "Esse produto é um alimento não perecível"
        break;
        case 'alimento perecivel':
          console.log('Esse produto é um alimento perecível')
          resultado.innerHTML = "Esse produto é um alimento perecível"
          break;
      default:
        console.log('Opção inválida!')
        resultado.innerHTML = "Opcão inválida"
        break;
    }
    }