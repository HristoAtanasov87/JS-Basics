function solve(input) {
    let player1 = Number(input[0]);
    let player2 = Number(input[1]);
    let index = 2;
    let command = input[index];
    let isComplete = false;

    while (command !== "End of battle") {
        if (command === "one") {
            player2--;
        } else if (command === "two") {
            player1--;
        }

        if (player1 <= 0 || player2 <= 0) {
            break;
        }

        index++;
        command = input[index];
    }

    if (player1 === 0) {
        console.log(`Player one is out of eggs. Player two has ${player2} eggs left.`);
    } else if (player2 === 0) {
        console.log(`Player two is out of eggs. Player one has ${player1} eggs left.`);
    } else if (command === "End of battle") {
        console.log(`Player one has ${player1} eggs left.`);
        console.log(`Player two has ${player2} eggs left.`);
    }
}

solve(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);