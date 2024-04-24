/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants // Die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links zugewiesen 
// an die Konstante namens Port. Das einfache Gleichheitszeichen lässt also übersetzen
// mit "...wird zugewiesen an..."
const PORT = 3000;
//der Wert '0.0.0.0' wird zugewiesen an die Konstante namens Horst.
const HOST = '0.0.0.0';


// App
const app = express();
app.get('/', (req, res) => {
	// res ist die Antwort des Servers an den Browser.
	//send() ist die Anweisung etwas an den Browser zu senden.
	// 'Hello...' ist der Wert, der an die Anweisung send() übergeben wird.
	//res.send('Hello remote world!\n');


	// Das res-Objekt kann noch mehr als nur eine Zeichenkette an den 
	// browser zu senden. das res-Objekt kann mit der Funktion render()
	// eine HTML-Datei an den browser senden.
	res.render('index.ejs',{}); 
});



// Mit listen() wird der Server angewisen, auf den angegebenen Host
// Port zu lauschen. 
app.listen(PORT, HOST);

// Mit der Anweisung console.log() wird dem Server-Adminstrator auf der 
// Konsole angezigt, was der Server macht. Der Programmierer schreibt dazu
// in die runden Klammern den Ausdruck, der auf der Konsole angezeigt werden soll.
// Die Werte bei der beiden Konstanten HOST und PORT werden in den Ausdruck übergeben.
// Ein Verb mit anschließenden runden Klammern steht immer für eine Anweisung etwas zu tun.
console.log(`Running on http://${HOST}:${PORT}`);