console.log("Booleans")
console.log("=======")

console.log("Boolsche Werte sind Wahrheitswerte, die wahr(ture) oder falsch (false) anehmen können")

// Wahrheitswerte kennen wir schon bereits aus der Wenn-Funktion in Exel.

console.log("Aufgabe 01")

if(true){
    console.log("Der Ausdruck ist wahr")

}else{
    console.log("Der Ausdruck ist unwahr/ falsch/ false")
}
console.log("Aufgabe 02")

// In Erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein

let a = 5
if(a>6){
    console.log("das ist wahr")

}else{
    console.log("Das ist falsch")
}

console.log("Aufgabe 03")

//Wenn die Schülerin 16 oder jünger ist, muss sie "fahrradfahren"
//Wenn sie 17 ist, darf sie "begleitet fahren"
//Wenn sie 18 ist darf sie "fahren"
// Vorraussetzung für das fahren mit dem Auto ist der Führerschein

let alter = 17; // Beispiel: Das Alter der Schülerin ist 17
let fueherschein = true;

// Überprüfe die Bedingungen
if (alter <= 1617 || fueherschein === false) {// wenn die Schülerin 16 ist oder keinen Führerschein hat oder beides , dann Fahrrad 
    console.log("Die Schülerin muss fahrradfahren")

} if (alter === 17 && fueherschein === true) { // Wenn 17 und Führerschein, dann begleitetfahren
    console.log("Die Schülerin darf begleitet fahren")

} if (alter > 17 && fueherschein === true ) { // wenn älter 17 und Führerschein, dann fahren
    console.log("Die Schülerin darf fahren")
}
  

// Andere Lösung 

if(fueherschein){ //führerschein ist bereits true oder false. Es bedarf keines Vergleichsoperators.

if(alter ===17){
    console.log("begleitet fahren")

}else{
    console.log("fahren")

}

}else{
    console.log("fahrradfahren")
}