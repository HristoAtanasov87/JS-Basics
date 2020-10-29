function solve(input) {
    let capacity = Number(input[0]);
    let fans = Number(input[1]);
    let countA = 0;
    let countB = 0;
    let countV = 0;
    let countG = 0;

    for (let i = 2; i < input.length; i++) {
        switch (input[i]) {
            case "A":
                countA++;
                break;
            case "B":
                countB++;
                break;
            case "V":
                countV++;
                break;
            case "G":
                countG++;
                break;
        }
    }

    let percentA = countA / fans * 100;
    let percentB = countB / fans * 100;
    let percentV = countV / fans * 100;
    let percentG = countG / fans * 100;

    console.log(`${percentA.toFixed(2)}%`);
    console.log(`${percentB.toFixed(2)}%`);
    console.log(`${percentV.toFixed(2)}%`);
    console.log(`${percentG.toFixed(2)}%`);
    console.log(`${(fans / capacity * 100).toFixed(2)}%`);
}

solve(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);