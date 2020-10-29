function solve(input) {
    let games = Number(input[0]);
    let countH = 0;
    let countF = 0;
    let countO = 0;
    let countOthers = 0;

    for (let i = 1; i < input.length; i++) {
        let soldGame = input[i];        

        switch (soldGame) {
            case "Hearthstone":
                countH++;
                break;
            case "Fornite":
                countF++;
                break;
            case "Overwatch":
                countO++;
                break;
            default:
                countOthers++;
                break;
        }
    }

    console.log(`Hearthstone - ${(countH / games * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(countF / games * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(countO / games * 100).toFixed(2)}%`);
    console.log(`Others - ${(countOthers / games * 100).toFixed(2)}%`);
}

solve(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);