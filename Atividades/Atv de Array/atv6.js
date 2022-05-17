x1 = Math.floor(Math.random() * 10)
y1 = Math.floor(Math.random() * 10)
z1 = Math.floor(Math.random() * 10)
matriz1 = [x1, y1, z1]

x2 = Math.floor(Math.random() * 10)
y2 = Math.floor(Math.random() * 10)
z2 = Math.floor(Math.random() * 10)
matriz2 = [x2, y2, z2]

x3 = Math.floor(Math.random() * 10)
y3 = Math.floor(Math.random() * 10)
z3 = Math.floor(Math.random() * 10)
matriz3 = [x3, y3, z3]

matrizp = [matriz1, matriz2, matriz3]
console.log(matrizp);


diagonalP1 = matrizp[0][0] *=2
diagonalP2 = matrizp[1][1] *=2
diagonalP3 = matrizp[2][2] *=2

console.log(`Os números da diagonal principal multiplicados resultam em: ${diagonalP1}, ${diagonalP2}, ${diagonalP3}`);