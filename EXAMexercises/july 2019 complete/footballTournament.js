function solve(input) {
    let team = input[0];
    let matches = Number(input[1]);
    let countDraw = 0;
    let countWin = 0;
    let countLose = 0;
    let isPlayed = false;

    if (matches === 0) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        isPlayed = true;
        for (let i = 2; i < input.length; i++) {
            let result = input[i];

            switch (result) {
                case "W":
                    countWin++;
                    break;
                case "L":
                    countLose++;
                    break;
                case "D":
                    countDraw++;
                    break;
            }
        }
    }

    let points = countWin * 3 + countDraw;

    if (isPlayed) {
        console.log(`${team} has won ${points} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${countWin}`);
        console.log(`## D: ${countDraw}`);
        console.log(`## L: ${countLose}`);
        console.log(`Win rate: ${(countWin / matches * 100).toFixed(2)}%`);
    }

}

solve([
    'Liverpool', '10',
    'W', 'D',
    'D', 'W',
    'L', 'W',
    'D', 'D',
    'W', 'W'
])