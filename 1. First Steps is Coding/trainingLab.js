function solve(h, w) {
    let he = Number(h);
    let wi = Number(w);

    let width = wi * 100 - 100;
    let height = he * 100;

    let rows = Math.floor(width / 70);
    let lines = Math.floor(height / 120);
    let total = rows * lines - 3;

    console.log(total);

}   

solve("15", "8.9");