function solve() {

    let clearButon = document.getElementsByClassName(`clear`)[0];
    let output = document.getElementById(`expressionOutput`);
    let result = document.getElementById(`resultOutput`);
    let operators = [`+`,`-`,`*`,`/`];
    let allbutons = document.querySelectorAll(`.keys`)[0];

    let operations = {
        '+': (num1,num2)=>Number(num1) + Number(num2),
        '-': (num1,num2)=>Number(num1) - Number(num2),
        '/': (num1,num2)=>Number(num1) / Number(num2),
        '*': (num1,num2)=>Number(num1) * Number(num2),
    }

    clearButon.addEventListener(`click`,()=>{

        output.innerHTML = ``;
        result.innerHTML = ``;
    }) 

    allbutons.addEventListener(`click`, element=>{
        let selected = element.target.value
        
        if(operators.includes(selected)) {
            output.innerHTML = output.innerHTML + ` ${selected} ` 
            return
        }

        if(selected === `=`) {
           let splitted = output.innerHTML.split(` `)
            let first = splitted[0];
            let operator = splitted[1];
            let second = splitted[2];

            if(second !== undefined && second !== ``) {
                let finalRes =  operations[operator](first,second);
                 result.innerHTML = finalRes
                    return;
            } else if(second === ``) {
                result.innerHTML = `NaN`;
                return
            } 
         
           
        }

        output.innerHTML += selected;
    })
        
         
    


}