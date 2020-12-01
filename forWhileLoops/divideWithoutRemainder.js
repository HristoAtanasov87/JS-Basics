function solve(input) {
    n = Number(input[0]);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    for (let i = 1; i <= n; i++) {
        if (Number(input[i]) % 2 == 0) {
            count1++;
        }
    }

    for (let i = 1; i <= n; i++) {
        if (Number(input[i]) % 3 == 0) {
            count2++;
        }
    }

    for (let i = 1; i <= n; i++) {
        if (Number(input[i]) % 4 == 0) {
            count3++;
        }
    }

    let p1 = count1 / n * 100;
    let p2 = count2 / n * 100;
    let p3 = count3 / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}
solve(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"])
