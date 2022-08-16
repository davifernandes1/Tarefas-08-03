function somar(a, b){
    return a + b
}
console.log(somar(30,40));

const somar2 = function (a=30,b=20,c=10){
 return a + b + c
    
}
console.log(somar2(b=50));

const somar3 = (x = 50, y = 80) => {
    return x + y
}
console.log(somar3(y=20, x=70))