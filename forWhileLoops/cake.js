function solve(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let cakeSize = width * length;
    let index = 2;
    let command = input[index];
    let isFinished = false;
    

    while (command !== "STOP") {
        let piecesCake = Number(command);
        cakeSize -= piecesCake;
        if (cakeSize <= 0) {
            isFinished = true;
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "STOP") {
        if (cakeSize > 0) {
            isFinished = false;
        }
    }

    if (isFinished === false) {
        console.log(`${cakeSize} pieces are left.`);
    } else if (isFinished = true) {
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
    }           
}

solve(["10", "10", "20", "20", "20", "20", "21"]);
solve(["10", "2", "2", "4", "6", "STOP"]);