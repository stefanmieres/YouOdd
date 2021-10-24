


//Call helloWorld Funtion
function getValues(){
     let startValue= document.getElementById("startValue").value;
     let endValue= document.getElementById("endValue").value;
     startValue = parseInt(startValue);
     endValue = parseInt (endValue);
     
     if(Number.isInteger(startValue)&& Number.isInteger(endValue)){
        numbers = generateNumbers(startValue, endValue);
         displayNumbers(numbers);
     }else{
         alert("You must enter integers");
     }

     
}
function generateNumbers(sValue,eValue){
    
    let numbers= [];
    for (let index = sValue; index <=eValue;index++){
        numbers.push (index);
    }
    return numbers;
}

function displayNumbers(numbers){
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let number = numbers[index];
        if(number% 2 == 0){
            className = "even";
        }else{
            className = "odd"
        }
        templateRows += `<tr><td class="${className}"> ${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML=templateRows;
}