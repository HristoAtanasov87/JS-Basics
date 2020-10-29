function solve(input) {
    let destination = input[0];
    let minBudget = Number(input[1]);
    let saved = 0;

    let index = 2;
    
    while (destination !== "End") {
        while (saved < minBudget) {
            saved += Number(input[index]);
            index++;
        }
        console.log(`Going to ${destination}!`);
        destination = input[index++];        
        minBudget = Number(input[index++]);
        saved = 0;   
    }
}

solve(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
