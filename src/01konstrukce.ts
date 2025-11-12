// podmíněné vykonávání
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


//podmíněné cyklické vykonávání
while (exp1) {
    //iterace cyklu
    //kód se vykonává několikrát - dokud je exp1 true
}