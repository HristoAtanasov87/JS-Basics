function solve(input) {
    let eggs = Number(input[0]);
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;

    for (let i = 1; i < input.length; i++) {
        let colour = input[i];

        switch (colour) {
            case "red":
                red++;
                break;
            case "orange":
                orange++;
                break;
            case "blue":
                blue++;
                break;
            case "green":
                green++;
                break;
        }
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);

    if (red > orange && red > blue && red > green) {
        console.log(`Max eggs: ${red} -> red`);
    } else if (orange > red && orange > blue && orange > green) {
        console.log(`Max eggs: ${orange} -> orange`);
    } else if (blue > red && blue > orange && blue > green) {
        console.log(`Max eggs: ${blue} -> blue`);
    } else {
        console.log(`Max eggs: ${green} -> green`);
    }
}

solve(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);