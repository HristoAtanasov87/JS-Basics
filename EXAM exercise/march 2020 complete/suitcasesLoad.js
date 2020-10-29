function solve(input) {
    let freeSpace = Number(input[0]);
    let isEnough = true;    
    let count = 0;

    let index = 1;
    let command = input[index];

    while (command !== "End") {
        let currentSuitcase = Number(command);
        count++;

        if (count % 3 === 0) {
            currentSuitcase *= 1.1;
        }

        if (freeSpace < currentSuitcase) {
            isEnough = false;
            count--;
            break;
        }

        freeSpace -= currentSuitcase;

        index++;
        command = input[index];
        
    }

    if (isEnough) {
        console.log("Congratulations! All suitcases are loaded!");
    } else {
        console.log("No more space!");
    }
    console.log(`Statistic: ${count} suitcases loaded.`);
}

// solve(["550",
//     "10",
//     "25",
//     "72",
//     "20",
//     "30",
//     "15",
//     "End"
//     ])

solve(["400",
"End"])