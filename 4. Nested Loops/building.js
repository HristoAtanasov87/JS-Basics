function solve(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i > 0; i--) {
        let output = "";
        let type = "";

            if (i === floors) {
                type = "L";
            } else if (i % 2 === 0) {
                type = "O";
            } else {
                type = "A";
            }
        
        for (let j = 0; j < rooms; j++) {
            output += `${type}${i}${j} `;
        }
        
        console.log(output);
    }
}

solve(["6", "4"]);