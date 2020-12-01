function solve(movie, rows, columns) {
    rows = Number(rows);
    columns = Number(columns);

    let sum = 0;
    switch (movie) {
        case "Premiere":
            sum = rows * columns * 12;
            break;
        case "Normal":
            sum = rows * columns * 7.5;
            break;
        case "Discount":
            sum = rows * columns * 5;
            break;
    }
    console.log(`${sum.toFixed(2)} leva.`);
}

solve("Premiere", "10", "12");
