
const values = [1,null,5,undefined,8,9,-5,456]
console.log(Filter(values));
function  Filter(values){
    let filterList = []; 
    for (let i = 0; i < values.length; i++) {
        if(values[i] > 0)
        filterList.push(values[i])
    }
    return filterList;
}

