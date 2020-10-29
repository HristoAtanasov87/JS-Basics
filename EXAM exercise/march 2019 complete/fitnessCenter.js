function solve(input) {
    let visitors = Number(input[0]);
    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countProteinShake = 0;
    let countProteinBar = 0;

    for (let i = 1; i < input.length; i++) {
        let command = input[i];

        switch (command) {
            case "Back":
                countBack++;
                break;
            case "Chest":
                countChest++;
                break;
            case "Legs":
                countLegs++;
                break;
            case "Abs":
                countAbs++;
                break;
            case "Protein shake":
                countProteinShake++;
                break;
            case "Protein bar":
                countProteinBar++;
                break;
        }        
    }

    let percentageTrain = (countBack + countAbs + countChest + countLegs) / visitors * 100;
    let percentageProtein = (countProteinBar + countProteinShake) / visitors * 100;

    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countProteinShake} - protein shake`);
    console.log(`${countProteinBar} - protein bar`);
    console.log(`${percentageTrain.toFixed(2)}% - work out`);
    console.log(`${percentageProtein.toFixed(2)}% - protein`);
}

solve([
    '10',          'Back',
    'Chest',       'Legs',
    'Abs',         'Protein shake',
    'Protein bar', 'Protein shake',
    'Protein bar', 'Legs',
    'Abs',         ''
  ]);