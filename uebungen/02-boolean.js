console.log("Booleans")
console.log("=======")

console.log("Boolsche Werte sind Wahrheitswerte, die wahr(ture) oder falsch (false) anehmen können")

// Wahrheitswerte kennen wir schon bereits aus der Wenn-Funktion in Exel.

console.log("Aufgabe 01")

if(true){
    console.log("Der Ausdruck ist wahr")

}else{
    console.log("Der Ausdruck ist unwahr/ falsch/ false")

    //Weil in dieser Aufgabe die Prüfung immer Wahr ist if (true),
    //wird immer die Anweisung hinter if ausgeführt.
    //Die Anweisung hinter else kommt niemals zur Ausführung. 


}
console.log("Aufgabe 02")

// In Erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein

let a = 5

// Hier wird mit einem Prüfoperator aud wahr oder falsch geprüft.

// Prüfoperatoren:
// == : Prüfung auf Gleichheit im Wert bsp: if(1== '1') true 
// ===: Prüfung auf Gleichheit im wert und Typ bsp: if (1=== '1') false
// >  : größer als 
// <  : kleiner als 
// >= : größer oder gleich 
// <= : kleiner oder gleich

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

console.log('Aufgabe 04')
// Zahlen können in Javascript true oder false sein.

let zahl = 0;
if (zahl) {
    console.log("Wahr"); // Dies wird nicht ausgeführt
} else {
    console.log("Falsch"); // Dies wird ausgeführt
}

let zahl1 = 1;
let zahl2 = -1;
let zahl3 = 12345;

if (zahl1) {
    console.log("Die Zahl " + zahl +" nimmt den boolschen Wert true an");
}

if (zahl2) {
    console.log("Zahl 2 ist wahr"); // Dies wird ausgeführt
}else{
    console.log("Die Zahl " + zahl +"  nimmt den boolschen Wert False an")
}

//Positive Zahlen sind true.
//Die Ziffer 0 ist false.
//Negative Zahlen sind true.

console.log("Aufgabe 05")
//Auf einem Sparkonto soll bei einem positiven Kontostand auf der Console stehen: "Zinsen berechnen", wenn kein Guthaben 
// existiert: "Keine Zinsen"

// Beispiel-Kontostand
let kontostand = 10; // Ersetzen Sie dies durch den tatsächlichen Kontostand

// Bedingungsprüfung für den Kontostand
if (kontostand) { // Auf den Prüfoperator kann verzichtet werden, da Zahlen true oder false sind.
    console.log("Zinsen berechnen für Kontostand" + kontostand);
} else {
    console.log("Keine Zinsen, da Kontostand 0");
}

console.log("Aufgabe 06")

// In der Bundesliga gibt es Punkte für Beispiele.
// Sieg: 3 Punkte
// Unentschieden: 1 Punkt
// Niederlage:    0 Punkte

let spielausgang = "Sieg"
let mannschaft= "Preußen Münster"

if(spielausgang == "Sieg"){
    console.log("Es gibt 3 Punkte")

}
if(spielausgang == "unentschieden"){
    console.log("Es gibt 1 Punkt")

}
if(spielausgang == "niederlage"){
    console.log("Es gibt 0 Punkte")

}