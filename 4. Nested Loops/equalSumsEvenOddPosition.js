function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let output = "";
   

    for (let i = num1; i <= num2; i++) {
        let word = i.toString();
        
        let sumEven = 0;
        let sumOdd = 0;

        let index = 0;

        while (index < word.length) {
            let digit = Number(word[index]);

            if (index % 2 === 0) {
                sumEven += digit;
            } else {
                sumOdd += digit;
            }

            index++;
        }
        
        if (sumEven === sumOdd) {
            output += word + " ";
        }
    }

    console.log(output);
}

solve(["123456",
    "124000"]);

