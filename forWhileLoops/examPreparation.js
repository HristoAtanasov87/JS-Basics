function solve(input) {
    let lowGrades = Number(input[0]);
    let index = 1;
    let isLowMore = false;    
    let totalGrades = 0;
    let avgGrade = 0;
    let lowCount = 0;
    let problemName = input[index];
    let lastProblem = "";


    while (problemName !== "Enough") {
        index++
        let grades = Number(input[index]);
        avgGrade += grades;

        if (grades <= 4) {
            lowCount++;
        }

        if (lowCount === lowGrades) {
            isLowMore = true;
            break;
        }

        lastProblem = problemName;
        totalGrades++;
        index++;        
        problemName = input[index];
    }

    if (isLowMore === true) {
        console.log(`You need a break, ${lowCount} poor grades.`)
    } else {
        console.log(`Average score: ${(avgGrade / totalGrades).toFixed(2)}`);
        console.log(`Number of problems: ${totalGrades}`);
        console.log(`Last problem: ${lastProblem}`);

    }
}

solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


