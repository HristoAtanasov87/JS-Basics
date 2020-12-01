function solve(input) {
    let eggs = Number(input[0]);
    let eggsSold = 0;
    let index = 1;
    let command = input[index];
    let isEnough = false;

    while(command !== "Close") {
        index++;
        let currentEggs = Number(input[index]);

        if (command === "Buy") {
            if (eggs < currentEggs) {
                isEnough = true;
                break;
            }
            eggs -= currentEggs;
            eggsSold += currentEggs;
        } else if (command === "Fill") {
            eggs += currentEggs;
        }
        
        index++;
        command = input[index];
    }

    if (isEnough) {
        console.log("Not enough eggs in store!");
        console.log(`You can buy only ${eggs}.`);
    } else if (command === "Close") {
        console.log("Store is closed!");
        console.log(`${eggsSold} eggs sold.`);
    }
}

solve(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);