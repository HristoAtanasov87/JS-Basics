function trapeziod(b1, b2, h) {
    b1 = Number(b1);
    b2 = Number(b2);
    h = Number(h);

    let area = (b1 + b2) * h / 2;
    console.log(area.toFixed(2));
}

solve(["8", "13", "7"])