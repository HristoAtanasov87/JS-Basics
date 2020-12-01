function solve(x, input, output) {
    x = Number(x);

    let result = 0;

    if ( input === "mm") {
        result = x / 1000;
    } else if (input === "cm") {
        result = x / 100;
    } else if (input === "m") {
        result = x;
    }

    if (output === "mm") {
        result = result * 1000;
    } else if (output === "cm") {
        result = result * 100;
    }

    console.log(result.toFixed(3));    
}   


solve("12", "mm", "m")