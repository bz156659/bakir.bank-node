console.log('Grundlagen');
console.log('==========');

console.log('Aufgabe 1'); 
console.log('Erstelle zwei Variablen namens a und b. Intialisiere mit den Werten 1 und 2.');

// Der Wert 1 wird zugewiesen (=) an eine Variable namens a.
let a = 1;
let b = 2;
//
//Mit dem Plus-Operator findet eine String-Verkettung statt. Eine String ist eine Zeichenkette, eingerahmt
// mit Hochkommas.
console.log('Der Wert der Variablen a ist: ' + a);

console.log('Aufgabe 2'); 
console.log('Gib das Ergebnis der addition von a und b aus.');

// Wenn links oder rechts vom Plus-Operator ein String steht, wird verkettet.
//Wenn links und rechts Zahlen stehen, wird addiert.
console.log(a+b);
console.log('Das Ergebnis der Addition: ' + (a + b));

console.log('Aufgabe 3'); 
console.log('Gib das Ergebnis der subtraktion, Multiplikation, Division con a und b aus.');

console.log('Subtraktion:', a-b);
console.log('Multiplikation: ', a*b);
console.log('Division', a/b);

console.log('Aufgabe 4')
console.log('Der Wert von c sei das Ergebnis der Addition von a und b.')

let c = a + b;

console.log('c hat den Wert: ' + c);

console.log('Aufgabe 5')
console.log('a und b sind die Seitenlängen der Katheten eines rechtswinklingen Dreiecks. Bestimme die Länge der Hypotenuse');

// cQuadrat ist in Kamelhöcker-Notation geschrieben. Das heißt: zuerst ein Kleinbuchstabe. Verbundene Wörter beginnen groß.
let cQuadrat = a * a + b * b; 

// Javascript kennt eine Bibliothek namens Math. In der Bibliothek gibt es eine Funktion namens sqrt. Als Parameter in den 
// rundenn klammern erwartet sqrt eine Zahl, aus dann die Wurzel gezogen wird. 
c = Math.sqrt(cQuadrat);

console.log('Die Hypotenuse ist ' + c + 'lang.'); 

console.log('Aufgabe 5')
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr bekommt er 10% Zinsen. Wie viel bekommt der Kunde');
console.log('nach zwei Jahren ausgezahlt. Beachte den Zinszinseffekt'); 

let laufzeit = 2;
let startkapital = 100; 
let zinssatz = 0.1; /* Das Komma ist zur Entwicklungszeit ein Punkt. */ 

let KapitalNachEinemJahr = startkapital * (1 + zinssatz); 

console.log('Kapital nach einem Jahr:' + KapitalNachEinemJahr + "EUR.");

let kapitalNachZweiJahren = KapitalNachEinemJahr * (1 + zinssatz);

console.log('Kapital nach zwei Jahren: ' + kapitalNachZweiJahren + "EUR.");

let endkapital = startkapital + Math. pow (1+ zinssatz, laufzeit);

console.log('Endkapital nach ' + laufzeit + "Jahren:" + endkapital + "EUR."); 

console.log('Aufgabe 7');
console.log('Die Werte aus der vorherigen Aufgabe werden als Reihe dargestellt.');

// Im Zeitpunkt null ist das Endkapital = dem startkapital 
endkapital = startkapital; 
console.log(endkapital);

// Nach dem ersten Jahr erhöht sich das Endkapital um den Faktor 1,1 
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

// Nach dem zweiten Jahr wird dem Endkapital der Wert des Endkapital * 1,1 zugewiesen.
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital); 

// Nach dem dritten Jahr wird dem Endkapital der Wert des Endkapital * 1,1 zugewiesen 
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital); 

// Nach dem vierten Jahr wird dem Endkapital der Wert des Endkapital * 1,1 zugewiesen 
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital); 

console.log('Aufgabe 8');
console.log('In Aufagbe 7 wurde die Anweisung endkapital = ... mehrfach wiederholt.');
console.log('Um sich Tipparbeit zu sparen und die Wiederholung der Anweisung in der gewünschten Häufigkeit durchzuführen,');
console.log('nutzt der Programmierer eine Schleife.');

startkapital = 100;
endkapital = startkapital;
zinssatz = 0.1; 
laufzeit = 3;

for (let i = 0; i < laufzeit; i++) {
    endkapital = endkapital * (1 + zinssatz);
    console.log("Endkapital nach Jahr " +( i+1) + "; " +  endkapital + "EUR.");     
}


console.log('Aufgabe 9');
console.log('Wenn der Artikel Lebensmittel ist, dann ist die Mwst 7%, ansonsten 19%.');
console.log('In Exel würde das so aussehen =wenn(A1=lebensmittel; 7;19)');

let artikel = 'Lebensmittel';
let MwstSatz = (artikel === "Lebensmittel") ? 7 : 19;

// Der Ausdruck ist vergleichbar mit Excel. In den runden Klammern findet die Prüfung
// auf wahr oder falsch statt. Wenn article === "Lebensmittel" wahr ist, wird der
// Wert vor dem Doppelpunkt zurücktgegeben. Ansonsten der Wert hinter dem Doppelpunkt.
// Anders als in Excel ist das einfache Gleichheitszeichen für eine Zuweisung reserviert
// Für einen Vergleich, muss in Javascript in zwei oder drei Gleichheitszeichen bearbeitet werden. 

console.log('Der Mehrwertsteuersatz für den Artikel ' + artikel + 'beträgt ' + MwstSatz + '%. '); 

console.log('Aufgabe 10');
console.log('Wenn der gesamtbetrag des Einkaufs größer oder gleich 100€ ist, beträgt der Rabatt 20%');
console.log('Ansonsten gibt es keinen Rabatt');

// Die Variablen werden deklariert und der Gesamtbetrag mit dem Wert 120 initialisiert 
let gesamtbetrag = 120;
let rabatt; 

// Die if-Kontrollstruktur kann zwei Fälle unterscheiden.
if (gesamtbetrag >= 100){
    // Wenn die Prüfung in den runden klammern wahr ist, wird der Wert 20 zugewiesen.
    rabatt = 20;

}else{
    // Wenn die Prüfung in runden klammern unwahr ist, wird der Wert 0 zugewiesen.
    rabatt = 0;

}

console.log('Bei einem Gesamtbetrag von ' + gesamtbetrag + 'Euro beträgt der Rabatt ' + rabatt + " Prozent.");

console.log('Aufgabe 11');
console.log('Wenn der gesamtbetrag des Einkaufs größer oder gleich 100€ ist, beträgt der Rabatt 20%');
console.log('wenn der Gesamtbetrag des Einkaufs zwischen 50 und kleiner 100€ ist, beträgt der Rabatt 10');
console.log('Ansonsten gibt es keinen Rabatt');

gesamtbetrag = 120;
rabatt; 

// Hier werden drei Fälle unterschieden. Dazu muss die if-Kontrollstruktur geschaltet werden.
if (gesamtbetrag >= 100){
    rabatt = 20;
}else{

    if (gesamtbetrag >= 50){
        rabatt = 10;
    }else{
        rabatt = 0; 
    }

}

console.log('Bei einem Gesamtbetrag von ' + gesamtbetrag + 'Euro beträgt der Rabatt ' + rabatt + " Prozent.");


console.log('Aufgabe 12');
console.log('Wenn der gesamtbetrag des Einkaufs größer oder gleich 200€ ist, ist der Versand kostenlos.');
console.log('wenn der Gesamtbetrag des Einkaufs zwischen 100 und kleiner 200€ ist, betragen Versankosten 5€');
console.log('Ansonsten betragen die Versandkosten 10€');

let  versandkosten;
let einkaufswert = 110; 

if (einkaufswert >= 200) {
    versandkosten = 0; //Versandkostenfrei

} else if (einkaufswert >= 100){
versandkosten = 5; // Versandkosten 5€

} else{
    versandkosten = 10; // Versandkosten 10€

}

console.log('Bei einem Einkaufswert von ' + einkaufswert + 'Euro betragen die Versandkosten ' + versandkosten + " EURO.");


console.log('Aufgabe 13');
console.log('Frauen ab 18 zahlen 10€ Eintritt. Männer ab 18 zahlen 15€ Eintritt. Minderjährige zahlen 6€ ');

let eintrittspreis;
let alter = 10
let geschlecht = 'm';


if (alter < 18) {
    eintrittspreis = 6; // Minderjährige
} else if (alter >= 18 && geschlecht === 'weiblich') {
    eintrittspreis = 10; // Frauen ab 18
} else if (alter >= 18 && geschlecht === 'männlich') {
    eintrittspreis = 15; // Männer ab 18
} 

console.log('Bei einem Alter von ' + alter + ' Jahren zahlt eine Person mit Geschlecht ' + geschlecht + eintrittspreis + 'EURO.');
