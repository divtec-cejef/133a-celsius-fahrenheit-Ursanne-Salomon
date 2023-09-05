/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Ursanne Salomon
 * @version 0.2
 * @since   05.09.2023
 */
'use strict'; // Demande un interprétation stricte du code

let a = 'Bonjour';

// demande la température a l'utilisateur
let celcius = prompt("Température en celcius : ");
celcius = parseFloat(celcius);

// vérifie que la donnée saisie soit un nombre
if(isNaN(celcius)) {
    // affiche un message d'erreur a l'utilisateur
    alert("Entrer un nombre");
} else {
    // affiche la valeur en celcius et en fahrenheit
    alert(`${celcius}°C = ${celcius * 9 / 5 + 32}°F`);
}

console.log(a);
