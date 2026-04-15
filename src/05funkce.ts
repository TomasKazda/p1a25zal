
//pozdrav je název fce
function pozdrav(jmeno: string): string {
    return `Ahoj ${jmeno}, jak se máš?`;
}

//tisk je název proměnné, která obsahuje anonymní funkci
const tisk = (text: string) => {
    console.log(text);
}
tisk(pozdrav("Pepa"));
tisk(pozdrav("Josef"));
tisk(pozdrav("Franta"));