function solve(input) {
    let index = 0;
    let command = input[index];
    let countWin = 0;
    let countLose = 0;
    let countMatches = 0;

    while (command !== "End of tournaments") {
        index++;
        let matches = Number(input[index]);
        countMatches += matches;
        let diff = 0;

        for (let i = 1; i <= matches; i++) {
            index++;
            let teamDesi = Number(input[index]);
            index++;
            let teamOthers = Number(input[index]);

            if (teamDesi > teamOthers) {
                countWin++;
                diff = teamDesi - teamOthers;
                console.log(`Game ${i} of tournament ${command}: win with ${diff} points.`);
            } else {
                countLose++;
                diff = teamOthers - teamDesi;
                console.log(`Game ${i} of tournament ${command}: lost with ${diff} points.`);
            }            
        }

        index++;
        command = input[index];
    }
    console.log(`${(countWin / countMatches * 100).toFixed(2)}% matches win`);
    console.log(`${(countLose / countMatches * 100).toFixed(2)}% matches lost`);
}

solve([
    'Dunkers', '2',
    '75', '65',
    '56', '73',
    'Fire Girls', '3',
    '67', '34',
    '83', '98',
    '66', '45',
    'End of tournaments']);