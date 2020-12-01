function solve(input) {
    let capacity = Number(input[0]);
    
    let income = 0;
    let isFull = false;

    let index = 1;
    let command = input[index];

    while (command !== "Movie time!") {
        let seatsTaken = Number(input[index]);
        let bill = 0;

        if (seatsTaken > capacity) {
            isFull = true;
            break;
        }

        if (seatsTaken % 3 === 0) {
            bill = seatsTaken * 5 - 5;
        } else {
            bill = seatsTaken * 5;
        }

        capacity -= seatsTaken;
        
        income += bill;
        
        index++;
        command = input[index];
    }

    if (isFull) {
        console.log("The cinema is full.");
    } else {
        console.log(`There are ${capacity} seats left in the cinema.`);
    }
    
    console.log(`Cinema income - ${income} lv.`);
}

solve(["60", "10", "6", "3", "20", "15", "Movie time!"]);