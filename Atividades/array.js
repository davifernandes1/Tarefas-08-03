nomes = ['Davi','Rafael','Pedro','Bernardo','Anderson']

for(let i = 0; i <nomes.length; i++){
    console.log(nomes[i])
}

for(let i = nomes.length - 1; i >= 0; i--){
    console.log(nomes[i])
}

for(let i = 0; i <nomes.length; i++){
    console.log("Calculo dos indices " + (nomes.length - 1)
    + "---" + i)
    console.log(nomes[nomes.length - 1 - i])
    
}



