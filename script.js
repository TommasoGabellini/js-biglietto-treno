// Il programma dovrà chiedere all'utente il numero di chilometri (numero interno) che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km) - va applicato uno sconto del 20% per i minorenni - va applicato uno sconto del 40% per gli over 65. - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// 1-chiedere all'utente il numero di chilometri (numero intero) che vuole percorrere
// 2- chiedere all'utente l'età (>18 e <65 sconto)
// 3- calolare il costo del biglietto in base a i dati forniti (prezzo per kilometro 0,21€)
// 4- usare massimo due decimali per il prezzo finale 

const prezzo = (0.21)

const kilometriDaPercorrere = prompt("quanti kilometri dovra percorrere?");
console.log(kilometriDaPercorrere);

let tot = (kilometriDaPercorrere * prezzo)
console.log(tot)

const eta = prompt("quanti anni hai?");
console.log(eta)
