function solve(input) {
    let upperHundreds = Number(input[0]);
    let upperTens = Number(input[1]);
    let upperOnes = Number(input[2]);
    let number = "";

    for (let i = 1; i <= upperHundreds; i++) {
        for (let j = 1; j <= upperTens; j++) {
            for (let k = 1; k <= upperOnes; k++) {
                if ((k % 2 === 0) && (i % 2 === 0) && (j === 2 || j === 3 || j === 5 || j === 7)) {
                    number = `${i} ` + `${j} ` + `${k}`;
                    console.log(number);
                } 
            }
        }
    }
    
}

solve(["3", "5", "5"]);