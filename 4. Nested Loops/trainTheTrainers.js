function solve(input) {
    let trainers = Number(input[0]);
    let index = 1;
    let presentation = input[index];
    let countPresentations = 0;
    let totalGrade = 0;

    while (presentation !== "Finish") {
        let grade = 0;
        let avgGrade = 0;
        index++;
        for (let i = 1; i <= trainers; i++) {
            grade += Number(input[index]);
            index++;

        }

        avgGrade = grade / trainers;
        console.log(`${presentation} - ${avgGrade.toFixed(2)}.`);
        countPresentations++;
        totalGrade += avgGrade;

        presentation = input[index];
    }

    console.log(`Student's final assessment is ${(totalGrade / countPresentations).toFixed(2)}.`)
}

solve(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]);

