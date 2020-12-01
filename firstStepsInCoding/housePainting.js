function solve(x, y, h) {
    x = Number(x);
    y = Number(y);
    h = Number(h);

    let frontBack = 2 * Math.pow(x, 2) - (1.2 * 2);
    let sides = 2 * x * y - (1.5 * 1.5 * 2);
    let roof = 2 * x * y + (x * h / 2 * 2);

    let totalGreen = frontBack + sides;

    let green = totalGreen / 3.4;
    let red = roof / 4.3;

    console.log(green.toFixed(2));
    console.log(red.toFixed(2));
}

solve("6", "10", "5.2");