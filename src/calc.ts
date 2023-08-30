// create a calculator 

//1- input from user\
// 2-pass input from user to function 
// 3- check condition for calc
// 4-print o/p 
import inquirer from "inquirer";
import { diff, sum ,div,mult} from "./operation.js";


    const input = await inquirer.prompt([
        {
            message: "Enter your first number",
            type: "number",
            name: "num1"
        },
        {
            message: "Enter Your second Number",
            type: "number",
            name: "num2"
        },
        {
            message: "Enter operator",
            type: "list",
            choices: ["+", "-", "*", "/"],
            name: "operator"
        }
    ]);

    if (input.operator === '+') {
        const result = sum(input.num1, input.num2);
        console.log("Sum:", result);
    }
    else if(input.operator === '-'){
        const result =diff(input.num1, input.num2)
        console.log("diff:", result);

    }
    else if(input.operator === '/'){
        const result = div(input.num1, input.num2)
        console.log("div:", result);

    }
    else if(input.operator === '*'){
        const result = mult(input.num1, input.num2)
        console.log("mult:", result);
    }
    else {
        console.log("Invalid operator");
    }



