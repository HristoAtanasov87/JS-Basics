function solve(input) {
    let control = Number(input[0]);
    let count = 0;
    let answer = "";
    let all = "";
    let isValid = false;
    let isNo = false;
    let isFound = false;

    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            for (let k = 1; k < 10; k++) {
                for (let l = 1; l < 10; l++) {
                    if (((i * j) + (k * l) === control) && (i < j) && (k > l)) {
                        all += `${i}${j}${k}${l} `;
                        isValid = true;
                        count++;
                        if (count === 4) {
                            isFound = true;
                            answer = `${i}${j}${k}${l}`;
                        }
                    }
                }
            }
        }
    }
    if (isValid) {
        console.log(all);
    }
    if (isFound) {
        console.log(`Password: ${answer}`);
    } else {
        console.log("No!");
    }
}

solve(["55"])