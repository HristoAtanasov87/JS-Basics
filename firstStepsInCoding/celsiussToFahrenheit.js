function solve(input) {
    let cel = Number(input[0]);
    let fahr = cel * 1.8 + 32;

    console.log(fahr.toFixed(2));

}

solve(["32.3"])