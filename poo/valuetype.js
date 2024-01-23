//********value type

let x=10
let y =x

console.log(x,y)

// response = 10,10

x=20
console.log(x,y)

//response= 20 10


//*******reference type [object,type*/

let a = {valeur:10}
let b= a
console.log("reference type",a,b)
//response valeur 10 valeur 10
a.valeur=20
console.log("reference type2",a,b)
//response valeur 20 valeur 20

