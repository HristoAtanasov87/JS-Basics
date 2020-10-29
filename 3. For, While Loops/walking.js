function solve(input) {
    let totalSteps = 0;

    let index = 0;
    let steps = input[index];
    let isGoal = false;

    while (steps !== "Going home") {
        totalSteps += Number(input[index]);

        if (totalSteps >= 10000) {
            isGoal = true;
            break;
        } else if (index === (input.length - 1)) {
            isGoal = false;
            break;
        }

        index++;
        steps = input[index];   
    }

    if (steps === "Going home") {
        index++;
        let additionalSteps = Number(input[index]);
        totalSteps += additionalSteps;
        if (totalSteps >= 10000) {
            isGoal = true;
        } else {
            isGoal = false;
        }
    }

    if (isGoal) {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
    }
}

solve(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
;


