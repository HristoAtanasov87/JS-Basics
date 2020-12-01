function solve(input) {
    let totalStudents = Number(input[0]);

    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let average = 0;

    for (let i = 1; i < input.length; i++) {
        if (Number(input[i]) >= 2 && Number(input[i]) < 3) {
            count2++;
            average += Number(input[i]);
        } else if (Number(input[i]) >= 3 && Number(input[i]) < 4) {
            count3++;
            average += Number(input[i]);
        } else if (Number(input[i]) >= 4 && Number(input[i]) < 5) {
            count4++;
            average += Number(input[i]);
        } else if (Number(input[i]) >= 5 && Number(input[i]) <= 6) {
            count5++;
            average += Number(input[i]);
        }        
    }

    let percent5 = count5 / totalStudents * 100;
    let percent4 = count4 / totalStudents * 100;
    let percent3 = count3 / totalStudents * 100;
    let percent2 = count2 / totalStudents * 100;
    let averageGrade = average / totalStudents;

    console.log(`Top students: ${percent5.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percent4.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percent3.toFixed(2)}%`);
    console.log(`Fail: ${percent2.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

solve(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.5", "2.44", "5"]);