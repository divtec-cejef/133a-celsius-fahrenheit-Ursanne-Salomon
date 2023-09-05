/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.2
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code

let a = 'Bonjour';

// demande la température a l'utilisateur
let celcius = prompt("Température en celcius : ");
celcius = parseInt(celcius);

// vérifie que la donnée saisie soit un nombre
if(isNaN(celcius)) {
    alert("Entrer un nombre");
} else {
    // affiche la valeur en celcius et en fahrenheit
    alert(`${celcius}°C = ${celcius * 9 / 5 + 32}°F`);
}

console.log(a);
