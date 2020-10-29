function solve(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let percentage = Number(input[2]) / 100;

    let area = height * width * 4;
    let toBePainted = Math.ceil(area - (area * percentage));

    let index = 3;
    let command = input[index];

    while (command !== "Tired!") {
        let paint = Number(command);
        toBePainted -= paint;

        if (toBePainted === 0) {
            console.log("All walls are painted! Great job, Pesho!");
            break;
        } else if (toBePainted < 0) {
            console.log(`All walls are painted and you have ${Math.abs(toBePainted)} l paint left!`);
            break;
        }

        command = input[++index];
    }
    
    if (toBePainted > 0) {
        console.log(`${toBePainted} quadratic m left.`);
    }

}

solve(["3", "5", "10", "2", "3", "4", "Tired!"]);