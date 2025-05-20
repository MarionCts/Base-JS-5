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
    console.log(fruit);
    console.log(stock[fruit]);
    while (stock[fruit] > 0) {
        (stock[fruit])--;
    }
    rupture.push(`${fruit}`);
    console.log(`${fruit} : ${stock[fruit]}`);
}

console.log(`${rupture}`);


