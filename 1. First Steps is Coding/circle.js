function solve(r) {
    r = Number(r);

    let area = Math.PI * Math.pow(r, 2);
    let round = Math.PI * r * 2;

    console.log(area.toFixed(2));
    console.log(round.toFixed(2));
}

solve("3");