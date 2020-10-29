function solve(country, tool) {
    let difficulty = 0;
    let performance = 0;

    switch (tool) {
        case "ribbon":
            if (country === "Russia") {
                difficulty = 9.1;
                performance = 9.4;
            } else if (country === "Bulgaria") {
                difficulty = 9.6;
                performance = 9.4;
            } else {
                difficulty = 9.2;
                performance = 9.5;
            }
            break;
        case "hoop":
            if (country === "Russia") {
                difficulty = 9.3;
                performance = 9.8;
            } else if (country === "Bulgaria") {
                difficulty = 9.55;
                performance = 9.75;
            } else {
                difficulty = 9.45;
                performance = 9.35;
            }
            break;
        case "rope":
            if (country === "Russia") {
                difficulty = 9.6;
                performance = 9.0;
            } else if (country === "Bulgaria") {
                difficulty = 9.5;
                performance = 9.4;
            } else {
                difficulty = 9.7;
                performance = 9.15;
            }
            break;
    }

    let score = difficulty + performance;
    let percentage = (20 - score) / 20 * 100;

    console.log(`The team of ${country} get ${score.toFixed(3)} on ${tool}.`);
    console.log(`${percentage.toFixed(2)}%`);
}

solve("Bulgaria", "ribbon");