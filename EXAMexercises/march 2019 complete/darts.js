function solve(input) {
    let name = input[0];
    let remaining = 301;
    let countSuccessful = 0;
    let countUnsuccessful = 0;
    let isWon = false;

    let index = 1;
    let command = input[index];

    while (command !== "Retire") {
        index++;
        let score = Number(input[index]);

        if (command === "Single") {
            if (remaining >= score) {
                remaining -= score;
                countSuccessful++;
                if (remaining === 0) {
                    isWon = true;
                    break;
                }
            } else {
                countUnsuccessful++;
            }
        } else if (command === "Double") {
            if (remaining >= score * 2) {
                remaining -= score * 2;
                countSuccessful++;
                if (remaining === 0) {
                    isWon = true;
                    break;
                }
            } else {
                countUnsuccessful++;
            }
        } else {
            if (remaining >= score * 3) {
                remaining -= score * 3;
                countSuccessful++;
                if (remaining === 0) {
                    isWon = true;
                    break;
                }
            } else {
                countUnsuccessful++;
            }
        }

        index++;
        command = input[index];
    }
    if (isWon) {
        console.log(`${name} won the leg with ${countSuccessful} shots.`);
    } else {
        console.log(`${name} retired after ${countUnsuccessful} unsuccessful shots.`);
    }
}

// solve(["Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"]);

solve(["Rob Cross",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20",
    "Triple",
    "20",
    "Double",
    "5",
    "Triple",
    "10",
    "Double",
    "6",
    "Retire"
])