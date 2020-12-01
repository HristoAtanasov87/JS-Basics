function solve(input) {
    let height = Number(input[0]);
    let startingHeight = height - 30;
    let countSuccess = 0;
    let countTrain = 0;
    let isEnough = false;
    let count = 0;

    for (let i = 1; i < input.length; i++) {
        let currentHeight = Number(input[i]);
        
        if (currentHeight <= startingHeight) {
            count++;
            countTrain++;
            if (count === 3) {
                isEnough = false;
                break;
            }
        } else {
            if (height === startingHeight) {
                countSuccess++;
                countTrain++;
                isEnough = true;                
                break;
            }
            startingHeight += 5;
            countSuccess++;
            countTrain++;
            count = 0;
            isEnough = true;
        }
    }

    if (isEnough) {
        console.log(`Tihomir succeeded, he jumped over ${startingHeight}cm after ${countTrain} jumps.`);
    } else {
        console.log(`Tihomir failed at ${startingHeight}cm after ${countTrain} jumps.`);
    }
}

// solve([
//     '231', '205', '212',
//     '213', '228', '229',
//     '230', '235']);

    solve([
        '250', '225', '224',
        '225', '228', '231',
        '235', '234', '235']);