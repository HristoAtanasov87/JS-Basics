function solve(input) {
    let cakes = Number(input[0]);
    let flourUsed = 0;
    let sugarUsed = 0;
    let maxSugar = Number.NEGATIVE_INFINITY;
    let maxFlour = Number.NEGATIVE_INFINITY;
    
    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);

        if (i % 2 != 0) {
            sugarUsed += current;
            if (current > maxSugar) {
                maxSugar = current;
            }
        } else {
            flourUsed += current;
            if (current > maxFlour) {
                maxFlour = current;
            }
        }
    }

    console.log(`Sugar: ${Math.ceil(sugarUsed / 950)}`);
    console.log(`Flour: ${Math.ceil(flourUsed / 750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}

solve(["3", "400", "350", "250", "300", "450", "380"]);