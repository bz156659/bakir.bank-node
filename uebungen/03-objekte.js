console.log("Objekte")
console.log("======")

// Bislang speichern wir Werte in Variablen.
// Bsp: let Vorname = "Hans"
// Jede Variable nimmt genau einen Wert auf. In dem Beipsiel ist der Wert "Hans". 
// In der realen Welt gibt es Objekte, über die mehrere Werte abgepeichert werden sollen.
//Beispiel: Schüler im Schulverwaltungsprgramm 
// Interessierende Eigenschaften: Vorname; Nachname; Geburtsdatum; Geburtsort; Klasse; Anschrift...
// Bislang haben wir das so gelöst: 
// let vorname = "Hans"
// let Klasse = "GW23A"
// let... 
// Problem: Die Eigenschaften stehen in keinem Zusammenhang. 
// Um den Zusammenhang zwichen den einzelnen Werten herzustellen, gibt es Klassen und Objekte. 
// Zunächst legt der Programmierer zur Entwicklungszeit die Baupläne (Klassen) fest, nach dem denen Obkjekte zur 
// Laufzeit erstellt werden. Und das geht so: 

class Schueler{
    constructor(){
        this.Vorname 
        this.Nachname
        this.Klasse 
    }
}

// Die Objekte werden nun aus dem Bauplan (= Klasse) wie folgt erzeugt: 

let schueler = new Schueler()
schueler.Vorname = "Hans"
schueler.Nachname = "Meyer"
schueler.Klasse = "GW23A"

//Die Werte können wieder ausgegeben werden: 

console.log("Nachname: " + schueler.Nachname + ", Vorname: " + schueler.Vorname)

let schueler2 = new Schueler()
schueler2.Nachname = "Müller"
schueler2.Vorname = "Pit"
schueler2.Klasse = "GW23A"

console.log("Nachname: " + schueler2.Nachname + ", Vorname: " + schueler2.Vorname)

// Um aus dem Bauplan (= Klasse) ein konkrektes Objekt zu erzeugen, sind 3 Schritte notwendig:
// 1. DEKLARATION: let schueler 
//                 Bei der Deklaration wird bekanntgegeben, dass es ein Objekt namens schueler geben soll.
//2.INTANZIRUNG: = new Schueler()
//                 Bei der Intanziierung werden Speicherzellen im Arbeitsspeicher reserviert, um Eigenschaftswerte aufzunhemen. 
//3.INITIALISIERUNG: schueler.Nachname = "Schmidt"
//                  Bei der Initialisierung werden konkrete Werte in die Speicherzellen geschrieben



console.log("Aufgabe 01")
// Für eine Autovermietung sollen Autos verwaltet werde. Erstelle einen Bauplan, um dann drei Objekte zu Instaliziieren.

class Auto{
    constructor(){
        this.Marke
        this.Modell
        this.Baujahr
        this.Preis
    
    }
}

// Aus dem Bauplan werden nun drei Objekte deklariert und instanziiert.

let borAb123 = new Auto()
let borXy876 = new Auto()
let bohQz253 = new Auto()

// Initialisierung: 
borAb123.Marke = "Audi"
borAb123.Preis = 300000 // Zahlen ohne Anführungszeichen 
borAb123.Farbe = "Schwarz"

console.log("Preis: " + borAb123.Preis + ", Marke: " + borAb123.Marke + ", Farbe: " + borAb123.Farbe)


console.log("Aufgabe 02")
// Deklariere, Instanziiere und initialisiere ein Objekt der realen Welt der eigen Wahl. 

class Termine{
    constructor(){
        this.Arzt
        this.Zeit
        this.Standort
    }
}

let termine = new Termine()
termine.Arzt = "Dr. Kellner" 
termine.Standort = "Borken"
termine.Zeit = "14:00"

console.log("Arzt: " + termine.Arzt + ", Standort: " + termine.Standort + ", Zeit: " + termine.Zeit)