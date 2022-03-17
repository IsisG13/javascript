console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//let new = 2;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`) //adicionando item nna lista 
console.log("Destinos Possiveis: ");
//console.log(salvador, rioDeJaneiro, saoPaulo)
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);