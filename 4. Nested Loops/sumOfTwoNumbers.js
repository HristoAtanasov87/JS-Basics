function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);

    let count = 0;
    let isFound = false;
    let number = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;
            if (i + j === magic) {
                number = `(${i} + ${j} = ${magic})`;
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${count} ${number}`);
    } else {
        console.log(`${count} combinations - neither equals ${magic}`);
    }
}
solve(["23", "24", "20"])