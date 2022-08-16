let isImpar = true
 while(isImpar){
    let numero = Math.floor(Math.random()* 10000)
    console.log(numero);
    isImpar = numero % 2 == 1
 }