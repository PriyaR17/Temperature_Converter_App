function convertTemperature(){
    const inputTemp = parseFloat(document.getElementById("inputTemp").value)
    const input = document.getElementById("input").value;
    const output = document.getElementById("output").value;
    let outputTemp;

    if(input === "celsius"){
        if(output === "celsius"){
            outputTemp = inputTemp;
        }
        else if(output === "fahrenheit"){
            outputTemp = (inputTemp * 9/5) + 32;
        }
       
    }
    else if(input === "fahrenheit"){
        if(output === "celsius"){
            outputTemp = (inputTemp - 32) * 5/9;
        }
        else if(output === "fahrenheit"){
            outputTemp = inputTemp;
        }
        
    }
    else if(input === "kelvin"){
        if(output === "celsius"){
            outputTemp = inputTemp - 273.15;
        }
        else if(output === "fahrenheit"){
            outputTemp = (inputTemp * 9/5) - 459.67;
        }
        
    }
    document.getElementById("outputTemp").value = outputTemp.toFixed(3);
}