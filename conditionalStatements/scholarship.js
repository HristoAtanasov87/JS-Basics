// function solve(salary, avgGrades, minSalary) {
//     salary = Number(salary);
//     avgGrades = Number(avgGrades);
//     minSalary = Number(minSalary);

//     let social = (minSalary * 0.35);
//     let highGrades = (avgGrades * 25);



//     if (salary > minSalary) {
//         if (avgGrades >= 5.5) {
//             if (highGrades >= social) {
//                 console.log(`You get a scholarship for excellent results ${Math.floor(highGrades)} BGN`);
//             } else {
//                 console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
//             }
//         } else {
//             console.log("You cannot get a scholarship!");
//         }
//     } 

//     if (salary < minSalary) {
//         if (avgGrades >= 5.5) {
//             if (highGrades >= social) {
//                 console.log(`You get a scholarship for excellent results ${Math.floor(highGrades)} BGN`);
//             } else {
//                 console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
//             }
//         } else if (avgGrades > 4.5) {
//             if (social > highGrades) {
//                 console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
//             }
//         } else if (avgGrades <= 4.5) {
//             console.log("You cannot get a scholarship!");
//         }
//     }
// }

// // solve("480.00", "4.60", "450.00");
// // solve("300.00", "5.65", "420.00");
// // solve("480.00", "5.50", "550.00");
// solve("480.00", "4.50", "550.00");

function solve(income, averageGrade, minSalary) {
    income = Number(income);
    averageGrade = Number(averageGrade);
    minSalary = Number(minSalary);

    let socialScholarship = 0;
    let scholarship = 0;

    if (income < minSalary && averageGrade > 4.5) {
        socialScholarship = Math.floor(minSalary * 0.35);
    }
    if (averageGrade >= 5.50) {
        scholarship = Math.floor(averageGrade * 25);
    }

    if (socialScholarship !== 0 || scholarship !== 0) {
        if (socialScholarship > scholarship) {
            console.log(`You get a Social scholarship ${socialScholarship} BGN`)
        } else {
            console.log(`You get a scholarship for excellent results ${scholarship} BGN`);
        }
    } else {
        console.log("You cannot get a scholarship!");
    }
}

solve("480.00", "4.50", "550.00")

