function solve(trip, puzzle, doll, bear, minion, truck) {
    trip = Number(trip);
    puzzle = Number(puzzle);
    doll = Number(doll);
    bear = Number(bear);
    minion = Number(minion);
    truck = Number(truck);

    let puzzleSold = puzzle * 2.60;
    let dollSold = doll * 3.00;
    let bearSold = bear * 4.10;
    let minionSold = minion * 8.20;
    let truckSold = truck * 2.00;
    
    let totalSold = puzzleSold + dollSold + bearSold + minionSold + truckSold;

    let bill;

    if (puzzle + doll + bear + minion + truck >= 50) {
        bill = totalSold * 0.75;
    } else {
        bill = totalSold;
    }

    let win = bill * 0.9;

    if (win >= trip) {
        let output = win - trip;
        console.log(`Yes! ${output.toFixed(2)} lv left.`);
    } else {
        let output = trip - win;
        console.log(`Not enough money! ${output.toFixed(2)} lv needed.`)
    }
}

solve("40.8", "20", "25", "30", "50", "10");
// solve("320", "8", "2", "5", "5", "1");