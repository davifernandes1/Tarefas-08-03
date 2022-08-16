bk = 46
console.log('BK: '+ bk )

if (bk <= 35){
    bk_desc = bk * 0.95
    console.log('Desconto de 5%, Valor com desconto : ' + bk_desc)
}
else if (bk > 35.01 && bk < 45){
    bk_desc = bk * 0.90
    console.log('Desconto de 10%, Valor com desconto : ' + bk_desc)

}
else if (bk >= 45){
    bk_desc = bk * 0.85
    console.log('Desconto de 15%, Valor com desconto : ' + bk_desc)
}