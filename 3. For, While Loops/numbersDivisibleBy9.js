function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    let sum = 0;
    let mun = "";

    for (i = num1; i <= num2; i++) {
        if (i % 9 == 0) {
            sum += i;
        } 
    }
    console.log(`The sum: ${sum}`);

    for (i = num1; i <= num2; i++) {
        if (i % 9 == 0) {
            console.log(num = i);
        }
    }
    
} 

solve("100", "200");