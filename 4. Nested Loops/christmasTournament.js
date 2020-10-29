function solve(input) {
    let days = Number(input[0]);
           
    let wonDays = 0;
    let lostDays = 0;
    let isWon = false;
    let totalMoney = 0;

    let index = 0;

    for (let i = 1; i <= days; i++) {
        index++;
        let sport = input[index];
        let countWin = 0;
        let countLose = 0;
        let moneyEarned = 0;

        while (sport !== "Finish") {
            index++;
            let result = input[index];

            if (result === "win") {
                countWin++;
                moneyEarned = countWin * 20;
            } else {
                countLose++;
            }

            index++;
            sport = input[index];
        }

        if (countWin > countLose) {
            moneyEarned *= 1.1;
            wonDays++;
        } else {
            lostDays++;
        }

        totalMoney += moneyEarned;        
    }

    if (wonDays >= lostDays) {
        totalMoney *= 1.2;
        isWon = true;
    }

    if (isWon) {
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

solve([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ]);