
const A = [3, 4, 5];
const B = [1, 2, 3, 4, 5];

//TO DO
//comparar listas
let checkIfIsASublist;
console.log("Resposta: ");
for (let index = 0; index < A.length; index++) {
        if(B.includes(A[index]))
        checkIfIsASublist = true;
        else{
            checkIfIsASublist = false;  
            break;
        }
              
}
    if(JSON.stringify(A)==JSON.stringify(B))
    console.log("A é igual a B");
else if(checkIfIsASublist)
    console.log("A é uma sublista de B");
    else
    console.log("A não é uma sublista de B");
