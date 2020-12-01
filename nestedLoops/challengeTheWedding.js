function solve(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let meeting = "";
    let tables = Number(input[2]);
    let count = 0;

    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            count++;
            if (count > tables) {
                break;
            }
            meeting += `(${i} <-> ${j})` + " ";
        }
    }
    console.log(meeting);
}

solve(["2", "2", "6"]);