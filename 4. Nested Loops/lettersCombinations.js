function solve(input) {
    let start = input[0];
    let end = input[1];
    let exclude = input[2];
    
    let count = 0;
    let combo = "";

    // let startCode = start.charCodeAt(0);
    // startCode++;
    // let backToString = String.fromCharCode(startCode);
    // console.log(startCode);
    // console.log(backToString);

    let startCode = start.charCodeAt(0);
    let endCode = end.charCodeAt(0);
    let excludeCode = exclude.charCodeAt(0);

    for (let i = startCode; i <= endCode; i++) {
        for (let j = startCode; j <= endCode; j++) {
            for (let k = startCode; k <= endCode; k++) {
                if ((i !== excludeCode) && (j !== excludeCode) && (k !== excludeCode)) {
                    let backToString1 = String.fromCharCode(i);
                    let backToString2 = String.fromCharCode(j);
                    let backToString3 = String.fromCharCode(k);
                    count++;    
                    combo += `${backToString1}` + `${backToString2}` + `${backToString3}` + " ";
                }
            }
        }
    }
    console.log(`${combo}${count}`);
}

solve(["f", "k", "h"]);