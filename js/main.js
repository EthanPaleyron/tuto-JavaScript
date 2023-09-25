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
//   h++;
// }

// if (h >= 24) {
//   h = 0;
// }

// console.log(`Dans 1s il est => ${h}h:${m}m:${s}s`);

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
// }

// if (Ethan >= 50) {
//   console.log("Ethan est directement élu");
// } else if (Ethan >= 12.5 && Ethan >= Daan && Ethan >= Enzo && Ethan >= Ugo) {
//   console.log("Tu est en ballottage favorable");
// } else {
//   console.log("Tu est en ballottage defavorable");
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
// let result = 1;
// for (let i = 0; i < 8; i++) {
//   result += result * i;
// }
// console.log(result);

// Exo 5.8
// let num = prompt("écrit ton premier chiffre");
// let best = 0;
// let compteur = 0;
// while (num > 0) {
//   compteur++;
//   if (num > best) {
//     best = num;
//   }
//   num = prompt(
//     `Le meilleur chiffre actuelle est ${best}. \n Nombre de chiffre ajouter => ${compteur}`
//   );
// }

// alert(`Ton chiffre le plus haut est ${best} 😎`);

// Exo 5.9
// let article = parseInt(prompt(`inserer votre 1er article SVP`));
// let prix = 0;
// while (article > 0) {
//   prix += article;
//   article = parseInt(prompt(`Autre chose ? \n prix actuel => ${prix}€`));
// }

// let prixPayer = 0;
// while (prixPayer < prix) {
//   prix -= prixPayer;
//   prixPayer = parseInt(prompt(`Prix a payer ${prix}€`));
// }

// Exo 5.10
// let poneyPartant = prompt("Nombre de poney en course");
// let poneyParier = prompt("Nombre de poney parier");

// function factorielle(x) {
//   let result = 1;
//   for (let i = 2; i <= x; i++) {
//     result *= i;
//   }
//   return result;
// }

// let x = factorielle(poneyPartant) / factorielle(poneyPartant - poneyParier);
// let y =
//   (factorielle(poneyPartant) / factorielle(poneyParier)) *
//   factorielle(poneyPartant - poneyParier);
// alert(
//   `Chance de gagner dans l'ordre => ${x}% \n Chance de gagner dans le désordre => ${y}%`
// );

// Exo Fibonacci
// let n = parseInt(prompt("choisi un nombre"));

// function fibonacci(nombre) {
//   let n1 = 0;
//   let n2 = 1;
//   let somme = 0;

//   for (let i = 2; i <= nombre; i++) {
//     somme = n1 + n2;
//     n1 = n2;
//     n2 = somme;
//   }

//   return nombre ? n2 : n1;
// }

// alert(fibonacci(n));

// Exo 6.10
// function random(length) {
//   const res = [];
//   for (let i = 0; i < length; i++) {
//     res.push(Math.floor(Math.random() * 50));
//   }
//   return res;
// }

// let array1 = random(10);
// let array2 = random(10);
// let result = [];

// for (let i = 0; i < array1.length; i++) {
//   result += array1[i] + array2[i] + " ";
// }
// console.log(result);

// Exo 6.11
// let array = [4, 8, 7, 12];
// let multiple = [3, 6];
// let result = [];

// for (let i = 0; i < multiple.length; i++) {
//   for (let y = 0; y < array.length; y++) {
//     result += array[y] * multiple[i] + " ";
//   }
// }

// console.log(result);

// Exo OLIVIER
// let notes = [
//   3, 6, 4, 7, 6, 5, 3, 4, 5, 3, 6, 4, 7, 6, 5, 3, 4, 5, 3, 6, 4, 7, 6, 5, 3, 4,
//   5,
// ];
// let moyen = 0;

// for (let i = 0; i < notes.length; i++) {
//   moyen += notes[i];
// }
// moyen = moyen / 30;

// console.log(moyen);

// Exo OLIVIER 2
// let result = [];
// for (let i = 2; i <= 20; i = i + 2) {
//   result.push(i);
// }
// const jointed = result.join("-");
// console.log(jointed);

// Exo fr
// function pluriel(num, mot) {
//   let newString = "";
//   let lastLetterEau = mot.length - 3;
//   let lastLetterAl = mot.length - 2;
//   if (num > 1) {
//     if (mot.substring(lastLetterEau) == "eau") {
//       mot += "x";
//       newString = mot;
//     } else if (mot.substring(lastLetterAl) == "al") {
//       newString = mot.slice(0, -1);
//       newString += "ux";
//     } else if (mot.substring(mot.length - 1) != "y") {
//       mot += "s";
//       newString = mot;
//     } else {
//       newString = mot;
//     }
//   } else {
//     newString = mot;
//   }
//   return newString;
// }

// console.log(pluriel(2, "monopoly"));

// Exo cours
// let panier = [
//   {
//     name: "Coca :",
//     bouteilles: 3,
//     prix: 0.9,
//   },
//   {
//     name: "Bière :",
//     bouteilles: 4,
//     prix: 5,
//   },
//   {
//     name: "Wisky :",
//     bouteilles: 2,
//     prix: 15,
//   },
// ];

// let result = "";
// for (let i = 0; i < panier.length; i++) {
//   result += `${panier[i].name} ${panier[i].prix}*${panier[i].bouteilles}\n`;
// }

// let prixTotal = 0;
// for (let i = 0; i < panier.length; i++) {
//   prixTotal += panier[i].prix * panier[i].bouteilles;
// }
// alert(result + `Prix a payer : ${prixTotal}`);

// Exo calculatrice
// function calculatrice(n1, n2, operateur) {
//   let result = 0;
//   result = eval(n1 + operateur + n2);
//   return alert(`Le resulta de ${n1 + operateur + n2} est ${result}`);
// }

// calculatrice(5, 15, "+");

// taux d'interet
// function tauxDinteret(euros, ans, interetAnunel) {
//   let pourcentage = (euros * interetAnunel) / 100;
//   if (ans === 0) {
//     return Math.round(euros);
//   } else {
//     return tauxDinteret(euros + pourcentage, ans - 1, interetAnunel);
//   }
// }

// alert(tauxDinteret(10000, 20, 4));

// Exo expression régulière
let pseudo = prompt("Votre pseudo ?");

if (pseudo.match(/^(-?(?!0)[0-9]{1,3}||0)$/)) {
  alert("Pseudo correct !");
} else {
  alert("Pseudo incorrect !");
}
