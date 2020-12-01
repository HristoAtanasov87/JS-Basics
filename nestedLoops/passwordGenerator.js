function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxPasswords = Number(input[2]);
    let count = 0;
    let passwords = "";
    let isReached = false;

    for (let i = 35; i < 56; i++) {
        if (isReached) {
            break;
        }
        for (let j = 64; j < 97; j++) {
            if (isReached) {
                break;
            }            
            for (let k = 1; k <= a; k++) {
                if (isReached) {
                    break;
                }
                for (let l = 1; l <= b; l++) {
                    count++;
                    passwords += `${String.fromCharCode(i)}` + `${String.fromCharCode(j)}` + `${k}` + `${l}` + `${String.fromCharCode(j)}` + `${String.fromCharCode(i)}` + "|";
                    i++;                    
                    j++;

                    if (i > 55) {
                        i = 35;
                    }

                    if (j > 96) {
                        j = 64;
                    }

                    if (count === maxPasswords) {
                        isReached = true;
                        break;
                    } else if ((k === a) && (l === b)) {
                        isReached = true;
                    }
                }
            }
        }
    }
    console.log(passwords);
}

solve(["2", "3", "10"])