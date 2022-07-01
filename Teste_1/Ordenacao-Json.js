let JsonCarros = [
    { 
        nome: "Peugeot",
        preco: "50000.99"
    },
    { 
        nome: "Honda",
        preco: "80500.70"
    },
    { 
        nome: "Fox",
        preco: "70000.50"
    },
    { 
        nome: "Gol",
        preco: "45000.65"
    },            
    
]
const carros = JSON.parse(JSON.stringify(JsonCarros));
//TO DO
//Ordenar do menor preço para o maior 
var precos = [];
console.log("Lista de carros ordenados por preço: ");
for (p in carros) 
{
    precos.push(carros[p].preco);
}
console.log(precos.sort());
//deixa na ordem crescente

//TO DO
//Ordenar por ordem alfabética
var names = [];
console.log("Lista de carros ordenados por nome: ");
for (n in carros) 
{
    names.push(carros[n].nome);
//adiciona na lista
}
console.log(names.sort());
