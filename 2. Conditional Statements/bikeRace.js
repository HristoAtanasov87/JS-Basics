function solve(juniors, seniors, track) {
    juniors = Number(juniors);
    seniors = Number(seniors);
    let taxSeniors = 0;
    let taxJuniors = 0;

    switch (track) {
        case "trail":
            taxJuniors = juniors * 5.5;
            taxSeniors = seniors * 7;
            break;
        case "cross-country":
            taxJuniors = juniors * 8;
            taxSeniors = seniors * 9.5;
            if (seniors + juniors >= 50) {
                taxJuniors = juniors * 8 * 0.75;
                taxSeniors = seniors * 9.5 * 0.75;
            }
            break;
        case "downhill":
            taxJuniors = juniors * 12.25;
            taxSeniors = seniors * 13.75;
            break;
        case "road":
            taxJuniors = juniors * 20;
            taxSeniors = seniors * 21.5;
            break;

    }
    let result = (taxJuniors + taxSeniors) * 0.95;
    console.log(result.toFixed(2));
}

solve("30", "25", "cross-country");