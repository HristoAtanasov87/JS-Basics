function solve(input) {
    input = Number(input);

    let points;

    if (input <= 100) {
        points = 5;
    } else if (input > 1000) {
        points = input * 0.1;
    } else {
        points = input * 0.2;
    }
    
    if (input % 2 == 0) {
        points += 1;
    } else if (input % 10 == 5) {
        points += 2;
    }

    console.log(points);
    console.log(points + input);
}

solve("20")