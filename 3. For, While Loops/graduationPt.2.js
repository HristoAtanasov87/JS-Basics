function solve(input) {
    let name = input[0];
    let index = 1;
    
    let countLowGrades = 0;
    let countClass = 0;
    let avgGrade = 0;

    while (index < input.length) {
        let currentGrade = Number(input[index]);

        if (currentGrade < 4) {
            countLowGrades++;
            if (countLowGrades > 1) {
                console.log(`${name} has been excluded at ${countClass} grade`);
                break;
            }
        } else {
            avgGrade += currentGrade;            
        }          
        
        countClass++;
        index++;        
    }

    if (countClass == 12) {
        console.log(`${name} graduated. Average grade: ${(avgGrade / countClass).toFixed(2)}`);
    }
}

solve(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])



