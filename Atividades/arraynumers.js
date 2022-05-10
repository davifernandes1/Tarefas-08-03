let numeros = []

let n = 3
for(let i = 0; i < 3; i++){
    console.log("Base: " + 2 + " expoente: " + (n-i))
    expoenciacao = 2**(n-i)
    numeros.push(expoenciacao)
}

console.log("Vetor Origianl", numeros)
for(let i = 0; i < n; i++){
numeros [i] *= 2
}

console.log("Vetor Dobrado", numeros)