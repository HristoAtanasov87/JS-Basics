function solve(input) {
    let n = Number(input[0]);
    let numbers = "";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if ((i + j === k + l) && (n % (i + j) === 0)) {
                        isHappy = true;
                        numbers += `${i}` + `${j}` + `${k}` + `${l}` + " "
                    }
                }
            }
        }
    }
    console.log(`${numbers}`);
}

solve(["24"]);