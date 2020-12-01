function solve(input) {
    let start1 = Number(input[0]);
    let start2 = Number(input[1]);
    let margin1 = Number(input[2]);
    let margin2 = Number(input[3]);
    let end1 = start1 + margin1;
    let end2 = start2 + margin2;

    let evenPairs = "";
    let count1 = 0;
    let count2 = 0;
    
    let i = start1;
    let j = start2;

    for (i = start1; i <= end1; i++) {
        for (j = start2; j <= end2; j++) {
            for (let k = 1; k <= 90; k++) {
                if (i % k === 0) {
                    count1++;
                }
                if (j % k === 0) {
                    count2++;
                }
            }

            if ((count1 <= 2) && (count2 <= 2)) {
                evenPairs = `${i}${j}`;
                console.log(evenPairs);
            }
            count1 = 0;
            count2 = 0;
        }
    }    
}

solve(["10", "30", "9", "6"]);