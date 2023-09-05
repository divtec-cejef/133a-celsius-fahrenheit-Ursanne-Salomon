/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.2
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code

let a = 'Bonjour';

let celcius = prompt("Température en celcius : ");
celcius = parseInt(celcius);

if(isNaN(celcius)) {
    alert("Entrer un nombre");
} else {
    alert(`${celcius}°C = ${celcius * 9 / 5 + 32}°F`);
}

console.log(a);
