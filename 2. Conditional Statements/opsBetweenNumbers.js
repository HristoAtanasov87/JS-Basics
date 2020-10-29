function solve(N1, N2, operator) {
    N1 = Number(N1);
    N2 = Number(N2);

    let result = 0;

    let divide = 0;
    let remaining = 0;

    switch (operator) {
        case "+":
            result = N1 + N2;
            break;
        case "-":
            result = N1 - N2;
            break;
        case "*":
            result = N1 * N2;
            break;
        case "/":
            if (N2 != 0) {
                divide = N1 / N2;    
            }            
            break;
        case "%":
            if (N2 != 0) {
            remaining = N1 % N2;
            }
            break;
    }

    switch (operator) {
        case "+":
        case "-":
        case "*":
            if (result % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${result} - ${"even"}`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${result} - ${"odd"}`);
            }
            break;
        case "/":
            if (N2 != 0) {
            console.log(`${N1} / ${N2} = ${divide.toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${N1} by zero`);
            }
            break;
        case "%":
            if (N2 != 0) {
            console.log(`${N1} % ${N2} = ${remaining}`);
            } else {
                console.log(`Cannot divide ${N1} by zero`);
            }
            break;      
    }
}

solve("10",
"0",
"%")






