// podmíněné vykonávání

import { join } from "node:path";

// výraz musí být boolean, nebo konvertovatelný na boolean
let expression: boolean = 5 > 2;
if (expression) {
    //tento kód je vykonán, když expression === true
} else {
    //vykonáno, když expression === false
}

//příklad.
let number1: number = 12;
let number2: number = 3*8-18;
if (number1 === number2) {
    console.log("čísla jsou stejná");
} else {
    
}

let exp1: boolean = number1 > number2

if (exp1 === true) {
    console.log("jen newbie")
}
if (exp1) {
    console.log("takhle to děláme :-)")
}

let necoDuleziteho: string = "ahoj";
//podmíněné cyklické vykonávání
while (exp1) {
    //iterace cyklu
    //kód se vykonává několikrát - dokud je exp1 true
    //aby cyklus neskončil, 
    //  musí se někde uvnitř změnit hodnota proměnné použitá v podmínce
    exp1 = false; // jinak by to byl nekonečný cyklus
}

do {
    let necoDuleziteho: string = "čau";
    //tento kód se vykoná alespoň jednou
} while (exp1);
console.log(necoDuleziteho)

let i: number = 0;
while (i < 5) {
    console.log(`i je nyní: ${i}`);
    i++; //inkrementace
}

//stejná jako while, ale řídicí proměnná vzniká (a zaniká) 
// přímo v konstrukci for
for (let j: number = 0; j < 5; j++) {
    console.log(`j je nyní: ${j}`);
}
console.log(i);
//console.log(j); // chyba, j není definováno