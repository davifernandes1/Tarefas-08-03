console.log("Atividade_3")

booleanos = [(Math.random() * 100 > 80), (Math.random() * 10 > Math.PI), (33 * (Math.random() * 50) > 15 * (Math.random() * 10)), (2**(Math.random() * 10) > 128)]

for (i = 0; i < booleanos.length; i++){
    console.log("Resultado:", booleanos[i]);
}