function solve(input) {
    let name1 = input[0];
    let name2 = input[1]
    let index = 2;
    let command = input[index];
    let points1 = 0;
    let points2 = 0;

    while (command !== "End of game") {
        let card1 = Number(input[index]);
        index++;
        let card2 = Number(input[index]);
        if (card1 > card2) {
            points1 = card1 - card2;
        } else if (card1 < card2) {
            points2 = card2 - card1;
        } else {
            console.log("Number Wars!");
            index++;
            card1 = Number(input[index]);
            index++;
            card2 = Number(input[index]);
            if (card1 > card2) {
                console.log(`${name1} is winner with ${points1} points`);
            } else {
                console.log(`${name2} is winner with ${points2} points`);
            }
            break;
        }

        index++;
        command = input[index];
    }
}

solve(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);