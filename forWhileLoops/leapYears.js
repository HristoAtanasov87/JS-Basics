function solve(year1, year2) {
    year1 = Number(year1);
    year2 = Number(year2);

    for (let i = year1; i <= year2; i +=4) {
        console.log(i);
    }
}

solve("1584", "1597");