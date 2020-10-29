function solve(input) {
    let turns = Number(input[0]);
    let points = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;

    for (let i = 1; i < input.length; i++) {
        if (Number(input[i]) >= 0 && Number(input[i]) < 10) {
            points += Number(input[i]) * 0.2;
            count1++;
        } else if (Number(input[i]) >= 10 && Number(input[i]) < 20) {
            points += Number(input[i]) * 0.3;
            count2++;
        } else if (Number(input[i]) >= 20 && Number(input[i]) < 30) {
            points += Number(input[i]) * 0.4;
            count3++;
        } else if (Number(input[i]) >= 30 && Number(input[i]) < 40) {
            points += 50;
            count4++;
        } else if (Number(input[i]) >= 40 && Number(input[i]) <= 50) {
            points += 100;
            count5++;
        } else {
            points /= 2;
            count6++
        }
    }

    let percent1 = count1 / turns * 100;
    let percent2 = count2 / turns * 100;
    let percent3 = count3 / turns * 100;
    let percent4 = count4 / turns * 100;
    let percent5 = count5 / turns * 100;
    let percent6 = count6 / turns * 100;

    console.log(`${points.toFixed(2)}`);
    console.log(`From 0 to 9: ${percent1.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percent2.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percent3.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percent4.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percent5.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percent6.toFixed(2)}%`);

}

solve(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);