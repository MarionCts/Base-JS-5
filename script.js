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