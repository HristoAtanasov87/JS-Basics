function solve(input) {
    let tournaments = Number(input[0]);
    let points = Number(input[1]);
    let countW = 0;
    let countF = 0;
    let countSf = 0;

    for (let i = 2; i < input.length; i++) {
        let result = input[i];
        switch (result) {
            case "W":
                countW++;
                points += 2000;
                break;
            case "F":
                countF++;
                points += 1200;
                break;
            case "SF":
                countSf++;
                points += 720;
                break;
        }
    }
    let percentage = countW / tournaments * 100;
    let avgPoints = (countSf * 720 + countF * 1200 + countW * 2000) / tournaments;
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${percentage.toFixed(2)}%`);
}



solve([
    '5', '1400', 'F',
    'SF', 'W', 'W',
    'SF'])