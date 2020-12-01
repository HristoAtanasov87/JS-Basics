function solve(input) {
    let upper1 = Number(input[0]);
    let upper2 = Number(input[1]);
    let upper3 = Number(input[2]);
    let isValid = false;
    let digit1 = 0;
    let digit2 = 0;
    let digit3 = 0;

    for (let i = 2; i <= upper1; i++) {
        for (let j = 2; j <= upper2; j++) {
            for (let k = 2; k <= upper3; k++) {


                if ((i % 2 === 0) && (k % 2 === 0) && (j === 2 || j === 3 || j === 5 || j === 7)) {
                    digit1 = i;
                    digit2 = j;
                    digit3 = k;
                    isValid = true;
                }

                if (isValid) {
                    let pin = `${digit1} ` + `${digit2} ` + `${digit3} `;
                    console.log(pin);
                }
                isValid = false;
            }
        }
    }
}

solve(["8", "2", "8"]);