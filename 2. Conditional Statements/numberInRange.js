function solve(digit) {
    digit = Number(digit);

    if (digit >= -100 && digit <= 100 && digit != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

solve("25");
solve("0");
solve("-25");