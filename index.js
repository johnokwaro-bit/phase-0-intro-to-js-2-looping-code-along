// Code your solutions in this file

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function writeCards(array, event){

    const newArray = [];

    for(let i = 0; i < array.length; i++){
        debugger
        newArray[i]= `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        
    }
    
        
    return newArray;
}

let i = ""

function countDown(i){
    while( i >= 0)

    {
        console.log(i);
        i--;
    }
}

countDown();
