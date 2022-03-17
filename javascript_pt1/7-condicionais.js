console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 11;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possiveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {

    console.log("Boa Viagem!!")
    listaDeDestinos.splice(1, 1); //removendo item4

} else {
    console.log("Não é maior de idade e não posso vender.")
}

console.log("Embarque: /n/n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!!")
} else {
    console.log("Você nã pode emparcar")
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);