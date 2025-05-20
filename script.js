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
