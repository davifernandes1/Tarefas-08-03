let produto = "Soja"
let regiao = "Sul"

switch (regiao) {
    case 'Sul':
        console.log('Regiao Sul','Produto: ', produto);
        break;
case 'Norte':
console.log('Regiao Norte','Produto: ', produto);
break;
    default:
console.log('Produto sem região');
        break;
}