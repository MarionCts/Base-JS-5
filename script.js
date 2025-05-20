// Exo 1

const multiples = [];
let nombre = 0;

for (let nombre = 0; nombre <= 100 ; nombre++) {
    if (nombre % 3 === 0 || nombre % 5 ===0) {
        multiples.push(nombre);
    }
}

console.log(`${multiples}`);

// Exo 2

const notes =  [15, -3, 12, 0, 19, 22, 8];
let valides = [];
let i = 0;

while(i < notes.length) {
    let note = notes[i];
    if (note >= 0 && note <= 20) {
            valides.push(note);
        }
        i++;
        
}

console.log(`Les notes valides sont ${valides}`);

console.log(`Le nombre de notes invalides est de ${notes.length - valides.length}.`);

// Exo 3

const users = {
alice: 18,
bob: 25,
charlie: 17,
dave: 30
};

const usersFinal = [];
const usersDenied = [];


for (nom in users) {
    let age = users[nom];
    if (age >= 18 && age !== 25) {
        usersFinal.push(nom);
    } else {
        usersDenied.push(nom);
    }
}

console.log(`Accès autorisé pour : ${usersFinal}`);
console.log(`Accès refusé pour : ${usersDenied}`);


// Exo 4

const nombres = [2, 7, 10, 21, 14, 3];
let resultats = [];

for (cle of nombres) {
    if ((cle % 2 === 0 && cle > 5) || (cle % 2 !== 0 && cle < 10)) {
        resultats.push(cle);
    }
}

let e = 0;
let somme = resultats.reduce((accumulator, currentValue) => accumulator + currentValue, e,);

console.log(somme);
console.log(resultats);

// Exo 5

const stock = { 
    pommes: 4, 
    bananes: 0, 
    poires: 3, 
    mangues: 1 
};

let rupture = [];

for (fruit in stock) {
    while (stock[fruit] > 0) {
        (stock[fruit])--;
    }
    rupture.push(`${fruit}`);
    console.log(`${fruit} : ${stock[fruit]}`);
}

console.log(`${rupture}`);


// Exo 6

const nums = [];

function genererAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nombreAleatoire

for (let i = 0 ; i < 20 ; i++) {
    nombreAleatoire = genererAleatoire(1, 30);
    nums.push(nombreAleatoire);
}

console.log(`${nums}`);

for (let i = 0 ; i < nums.length ; i++) {
    if (nums[i] % 4 === 0 || nums[i] % 6 === 0) {
        nums[i] *= 2;
    } else if (nums[i] % 2 !== 0) {
        nums[i] = 1;
    }
}

console.log(`${nums}`);

// Exo 7

const o1 = {
    a: 1,
    b: 2,
    c: 3
};

const o2 = {
    b: 4,
    c: 3,
    d: 5
};

const fusion = { ...o1 };

console.log(fusion);

for (cle in o2) {
    if (!(cle in fusion) || fusion[cle] !== o2[cle]) { // si la clé de o2 n'existe pas dans fusion, OU si la valeur de la clé de o2 est différente dans fusion
        fusion[cle] = o2[cle];
    }
}

console.log(fusion);

// Exo 8

const produits = [
    {nom: "stylo", prix: 1.2, dispo: true},
    {nom: "cahier", prix: 2.5, dispo: false},
    {nom: "crayon", prix: 0.8, dispo: true},
    {nom: "gomme", prix: 0.5, dispo: true},
];

const achats = [];
const ignores = [];

for (let i = 0 ; i < produits.length ; i++) {
    if (produits[i].dispo === true && produits[i].prix < 2) {
        achats.push(produits[i].nom);   
    } else if (produits[i].dispo === false || produits[i].prix >= 2) {
        ignores.push(produits[i].nom);
    }
}

console.log(achats);
console.log(ignores);



