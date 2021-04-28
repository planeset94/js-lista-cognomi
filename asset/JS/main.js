// 1. chiedi all’utente il cognome
var surname = prompt('Type yoour surname please');
// 2. inseriscilo in un array con altri cognomi: "Bianchi’, "Neri’, "Rossi’, "Verdi’, "Gialli’
var list = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// ---- Controllo che il congome non sia già presente nell'array --------- 
var verifica = list.indexOf(surname);

if (surname == "") {
    alert('No blanks allowed. Insert your surname');
    document.getElementById('stampa').innerHTML = "TRY AGAIN";

} else if (verifica !== -1) {
    alert('ERROR 404, you are already IN')
    document.getElementById('stampa').innerHTML = "TRY AGAIN";
}
else {
    list.push(surname);


    // console.log(list);
    // 3. stampa la lista ordinata alfabeticamente
    var lista_ordinata = list.sort();
    // console.log(lista_ordinata);
    // --- Visualizzo gli elementi della matrice come una lista (elemento dopo elemento)
    for (var i = 0; i < lista_ordinata.length; i++) {
        document.getElementById('stampa').innerHTML += "<li>" + lista_ordinata[i] + "</li>";
    }

    // 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
    var posizione = lista_ordinata.indexOf(surname);
    // console.log(posizione + 1);
    var posizione_corretta = posizione + 1;
    document.getElementById('indicazione').innerHTML = "Your surname is located at position " + posizione_corretta + ".";

}