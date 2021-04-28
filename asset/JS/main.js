// 1. chiedi all’utente il cognome
var surname = prompt('Type yoour surname please');
// 2. inseriscilo in un array con altri cognomi: "Bianchi’, "Neri’, "Rossi’, "Verdi’, "Gialli’
var list = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
list.push(surname);
console.log(list);
// 3. stampa la lista ordinata alfabeticamente
var lista_ordinata = list.sort();
console.log(lista_ordinata);

for (var i = 0; i < lista_ordinata.length; i++) {
    document.getElementById('stampa').innerHTML += "<li>" + lista_ordinata[i] + "</li>";

}

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova