/* 
* !  Les chaînes des caractères (Strings)
*/
console.log("Hello World");

/* TODOs Les chaînes de caractères (String)*/

/*
 * Une chaîne de caractères c'est simplement du texte. Un texte est composé de caractères. Les emojis font partie des caractères.
 * Pour délimiter une chaîne de caractères, on utilise les guillemets simples 'une chaîne' ou doubles "une chaîne".
 * Vous n'avez pas le droit d'utiliser un retour à la ligne dans une chaîne de caractères.
 * On échappe un caractère grâce au caractère anti-slash \. Par exemple pour inclure un guillemet dans une chaîne délimitée par des guillemets : 
 */
 
 console.log('J\'aime le JavaScript');

// * Il est possible d'insérer un retour à la ligne dans une chaîne de caractères grâce à la séquence d'échappement \n comme ceci : 
 console.log("ligne 1\nligne2");

// * On peut concaténer (coller) 2 chaînes de caractères ensemble grâce à l'opérateur + :
console.log("Apprenez et" + " n'oubliez pas de pratiquer !");

// * sera évalué comme la chaîne "Apprenez et n'oubliez pas de pratiquer !"

// * Les modèles de libellés (template strings) sont délimités par l'apostrophe inverse ` qu'on appelle aussi backtick. On peut alors utiliser les guillemets simples et doubles sans avoir à les échapper : 

console.log(`Les backticks sont très "pratiques" n'est-ce pas ?`);


