// Desafio3
// ejemplos con for while do..while
// for
for (let i = 1; i <=4; i++){
    console.log("iteracion ${i}");
}
console.log("Fin del ciclo");

for (let i = 4; i >=1; i--){
    console.log("iteracion ${i}");
}
console.log("Fin del ciclo");


for (let i = 1; i <= 4; i++){
    console.log("Empieza iteracion ${i}");
    for (let j = 0; j < 4; j++){
        console.log(j);
    }
}


let ingresarNumero = parseInt(prompt("Ingresar numero"));
for (let i = 1; i <= 10; i++){
        let resultado = ingresarNumero * i ;
        console.log(ingresarNumero +" x "+ i +" = "+ resultado);
    }
console.log("Fin del ciclo");

//ejemplo de while

let x = 1;
while (x <= 4){
    console.log("Iteracion ${x}");
    x++;
}
console.log("Fin de while");

//ejemplo de do...while

let y = 1;

do{
    console.log("Iteracion ${y}");
    y++;

}while (y <= 4);
