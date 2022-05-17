matriz_determinante = []

for (let i = 0; i < 2; i++) {
    matriz_determinante.push([(Math.random() * 10).toFixed(2), (Math.random() * 10).toFixed(2)])
}

console.log("Matriz : ");

for (let i = 0; i < 2; i++) {
    console.log("|", matriz_determinante[i][0], matriz_determinante[i][1], "|");
}

let determinante = matriz_determinante[0][0] * matriz_determinante[1][1] -  matriz_determinante[0][1] * matriz_determinante[1][0]
console.log("\nDeterminante : ", determinante.toFixed(2));