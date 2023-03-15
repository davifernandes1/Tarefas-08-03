class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
    
   
    imprimirPreco() {
      console.log(this.nome + ' : R$ ' + this.preco.toFixed(2));
    }
  }
  
  class ProdutoImportado extends Produto {
    constructor(nome, preco, taxaAlfandega) {
      super(nome, preco);
      this.taxaAlfandega = taxaAlfandega;
    }
    
    imprimirPreco() {
      console.log(this.nome + ': R$ ' + (this.preco + this.taxaAlfandega).toFixed(2) + ' (com a taxa da alfândega de R$ ' + this.taxaAlfandega.toFixed(2) + ')');
    }
  }
  
  
  class ProdutoUsado extends Produto {
    constructor(nome, preco, dataFabricacao) {
      super(nome, preco);
      this.dataFabricacao = dataFabricacao;
    }
    
  
    imprimirPreco() {
      console.log(this.nome + ' (usado): R$ ' + this.preco.toFixed(2) + ' (fabricado em ' + this.dataFabricacao + ')');
    }
  }
  
  const n = parseInt(prompt("Digite o número de produtos: "));
      
  const produtos = [];
  
  for (let i = 0; i < n; i++) {
    const nome = prompt(`Digite o nome do produto ${i + 1}: `);
  
    const preco = parseFloat(prompt(`Digite o preço do produto ${i + 1}: `));
  
    const tipo = prompt(`Digite o tipo do produto ${i + 1} (comum, importado ou usado): `);
  
    let produto;
    if (tipo === "importado") {
      const taxa = parseFloat(prompt(`Digite a taxa de alfândega do produto ${i + 1}: `));
      produto = new ProdutoImportado(nome, preco, taxa);
    } else if (tipo === "usado") {
      const dataFabricacao = prompt(`Digite a data de fabricação do produto ${i + 1} (no formato dd/mm/aaaa): `);
      produto = new ProdutoUsado(nome, preco, dataFabricacao);
    } else {
      produto = new Produto(nome, preco);
    }
  
    produtos.push(produto);
  }
  
  for (let i = 0; i < n; i++) {
    console.log(`Produto ${i + 1}: ${produtos[i].nome} - Preço final: R$ ${produtos[i].obterPrecoFinal().toFixed(2)}`);
  }
  