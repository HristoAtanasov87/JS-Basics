function solve(input) {
    let competitors = Number(input[0]);
    let index = 1;
    let command = input[index];
    let highestPoints = Number.NEGATIVE_INFINITY;
    let highestName = "";


    for (let i = 1; i <= competitors; i++) {
        let name = command;
        index++;
        command = input[index];

        let points = 0;

        while (command !== "Stop") {
            points += Number(command);

            command = input[++index];
        }        
        
        console.log(`${name} has ${points} points.`);

        if (points > highestPoints) {
            highestPoints = points;
            highestName = name;
            console.log(`${name} is the new number 1!`)
        }
        index++;
        command = input[index];
    }

    console.log(`${highestName} won competition with ${highestPoints} points!`);
}

solve([
    '2',         'Chef Angelov',
    '9',         '9',
    '9',         'Stop',
    'Chef Rowe', '10',
    '10',        '10',
    '10',        'Stop'
  ]);