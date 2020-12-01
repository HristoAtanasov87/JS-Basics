function solve(input) {
    let period = Number(input[0]);
    let treated = 0;
    let untreated = 0;
    let doctors = 7;

    for (let i = 1; i < input.length; i++) {
        if (i % 3 == 0 && untreated > treated) {
            doctors++;
        }
        if (Number(input[i]) <= doctors) {
            treated += Number(input[i]);
        } else {
            untreated += Number(input[i]) - doctors;
            treated += doctors;
        }
    }

    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}

solve(["4", "7", "27", "9", "1"]);