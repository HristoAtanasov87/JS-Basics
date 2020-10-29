function solve(rent) {
    rent = Number(rent);

    let statues = rent * 0.7;
    let catering = statues * 0.85;
    let sound = 0.5 * catering;

    let result = rent + statues + catering + sound;

    console.log(result.toFixed(2));
}

solve("3500")