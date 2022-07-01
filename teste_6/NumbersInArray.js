function  NumbersInArray(value){
    let numbersList = []; 
    let text = value.toString();
    for (let i = 0; i < text.lenght; i++) {
        numbersList.push(text[i])
    }
    return numbersList;
}

const value = 235023;
console.log(NumbersInArray(value));