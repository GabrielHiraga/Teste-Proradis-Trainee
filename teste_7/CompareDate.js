initialDate = new Date("2000/01/01 08:00:00");
lastDate = new Date("2000/01/01 09:00:00");
console.log(Compare(initialDate, lastDate));

function Compare(initialDate, lastDate) 
 {
  let diference =(initialDate.getTime() - lastDate.getTime())/1000; //segundos
  diference = diference / (60 * 60);
  if(Math.abs(diference*60)<= 60){ 
        return true
    }else{
        return false
    }
 }

