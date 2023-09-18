// Exo 1.6
// let a = 0;
// const tmp = a;
// let b = a;
// a = b;
// b = tmp;
// console.log(a, b);

// Exo 3.2
// let n1 = -5;
// let n2 = -10;

// if ((n1 < 0 && n2 < 0) || (n1 > 0 && n2 > 0)) {
//   console.log("ce produit est positif");
// } else {
//   console.log("ce produit est négatif");
// }

// Exo 3.3
// let nom1 = "Abd";
// let nom2 = "Abc";
// let nom3 = "Ethan";

// if (nom1 < nom2 && nom2 < nom3) {
//   console.log("c'est noms sont dans l'ordre alphabétique");
// } else {
//   console.log("c'est noms sont PAS dans l'ordre alphabétique");
// }

// Exo 3.6
// const age = 13;

// if (age >= 12) {
//   console.log("Cadet");
// } else if (age >= 10) {
//   console.log("Minime");
// } else if (age >= 8) {
//   console.log("Pupille");
// } else if (age >= 6) {
//   console.log("Poussin");
// } else {
//   console.log("tu na pas l'age");
// }

// Exo 4.3
// let s = prompt("Les Secondes");
// let m = prompt("Les Minutes");
// let h = prompt("Les Heures");
// if (s >= 59) {
//   m++;
//   s = 0;
// } else {
//   s++;
// }
// if (m >= 59) {
//   h++;
//   m = 0;
// } else {
//   m++;
// }

// if (s >= 59) {

// }

// console.log(`${h}h:${m}m:${s}s`);

// Exo 4.3
// let nbrPhotocopie = prompt("Nombre de photocopie");
// let p = 0;

// if (nbrPhotocopie >= 30) {
//   p = 10 * 0.1 + 20 * 0.09 + (nbrPhotocopie - 30) * 0.08;
// } else if (nbrPhotocopie > 10) {
//   p = 10 * 0.1 + (nbrPhotocopie - 10) * 0.09;
// } else {
//   p = nbrPhotocopie * 0.1;
// }

// console.log(p);

// Exo 4.6
// let Ethan = 10;
// let Daan = 30;
// let Enzo = 49;
// let Ugo = 11;

// if (Daan >= 50 || Enzo >= 50 || Ugo >= 50) {
//   console.log("Ethan a perdu");
// } else if (Ethan > 50) {
//   console.log("Ethan est directement élu");
// }

// if (Ethan >= 12) {
// }

// Exo 4.8
// let jours = 31;
// let mois = 12;
// let annee = 16;
// const dernierJoursDesMois = [31, 28, 31, 30, 31, 30, 30, 31, 31, 30, 31, 30];
// let b = (annee % 4 === 0 && !annee % 100 === 0) || annee % 400 === 0;
// let k1 = (mois = 1 || mois = 3 || mois = 5 || mois = 7 || mois = 8 || mois = 10) && ()

// Exo 5.2
// let yoursNumber = prompt("nombre en 10 et 20");
// while (yoursNumber <= 10 || yoursNumber >= 20) {
//   if (yoursNumber <= 10) {
//     yoursNumber = prompt("Plus grand que 10 stp");
//   } else {
//     yoursNumber = prompt("Plus petit que 20 stp");
//   }
// }

// alert("Bravo 👏");

// Exo 5.4
// let result;
// for (let i = 0; i <= 10; i++) {
//   result = i * 7;
//   console.log(result);
// }

// Exo 5.6
let result = 1;
for (let i = 0; i < 8; i++) {
  result += result * i;
}
console.log(result);
