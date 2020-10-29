function solve(input) {
    let index = 0;
    let command = input[index];
    let countC = 0;
    let countO = 0;
    let countN = 0;
    let word = "";
    let newWord = ""


    while (command !== "End") {
        switch (command) {
            case "a":
                word += input[index];
                break;
            case "b":
                word += input[index];
                break;
            case "c":
                countC++;
                break;
            case "d":
                word += input[index];
                break;
            case "e":
                word += input[index];
                break;
            case "f":
                word += input[index];
                break;
            case "g":
                word += input[index];
                break;
            case "h":
                word += input[index];
                break;
            case "i":
                word += input[index];
                break;
            case "j":
                word += input[index];
                break;
            case "k":
                word += input[index];
                break;
            case "l":
                word += input[index];
                break;
            case "m":
                word += input[index];
                break;
            case "n":
                countN++;
                break;
            case "o":
                countO++;
                break;
            case "p":
                word += input[index];
                break;
            case "q":
                word += input[index];
                break;
            case "r":
                word += input[index];
                break;
            case "s":
                word += input[index];
                break;
            case "t":
                word += input[index];
                break;
            case "u":
                word += input[index];
                break;
            case "v":
                word += input[index];
                break;
            case "w":
                word += input[index];
                break;
            case "x":
                word += input[index];
                break;
            case "y":
                word += input[index];
                break;
            case "z":
                word += input[index];
                break;
            case "A":
                word += input[index];
                break;
            case "B":
                word += input[index];
                break;
            case "C":
                word += input[index];
                break;
            case "D":
                word += input[index];
                break;
            case "E":
                word += input[index];
                break;
            case "F":
                word += input[index];
                break;
            case "G":
                word += input[index];
                break;
            case "H":
                word += input[index];
                break;
            case "I":
                word += input[index];
                break;
            case "J":
                word += input[index];
                break;
            case "K":
                word += input[index];
                break;
            case "L":
                word += input[index];
                break;
            case "M":
                word += input[index];
                break;
            case "N":
                word += input[index];
                break;
            case "O":
                word += input[index];
                break;
            case "P":
                word += input[index];
                break;
            case "Q":
                word += input[index];
                break;
            case "R":
                word += input[index];
                break;
            case "S":
                word += input[index];
                break;
            case "T":
                word += input[index];
                break;
            case "U":
                word += input[index];
                break;
            case "V":
                word += input[index];
                break;
            case "W":
                word += input[index];
                break;
            case "X":
                word += input[index];
                break;
            case "Y":
                word += input[index];
                break;
            case "Z":
                word += input[index];
                break;



        }
        // if (input[index] === "c") {            
        //     countC++;            
        // } else if (input[index] === "o") {
        //     countO++;
        // } else if (input[index] === "n") {
        //     countN++;
        // } else if () {
        //     word += input[index];
        // }

        if (countC > 1) {
            word += input[index];
            countC = 1;
        } else if (countO > 1) {
            word += input[index];
            countO = 1;
        } else if (countN > 1) {
            word += input[index];
            countN = 1;
        }

        if (countC === 1 && countN === 1 && countO === 1) {
            word += " "
            newWord += word;
            word = ""
            countC = 0;
            countN = 0;
            countO = 0;

        }

        index++;
        command = input[index];
    }
    console.log(`${newWord}`);
}

// solve(["H",
//     "n",
//     "e",
//     "l",
//     "l",
//     "o",
//     "o",
//     "c",
//     "t",
//     "c",
//     "h",
//     "o",
//     "e",
//     "r",
//     "e",
//     "n",
//     "e",
//     "End"
//     ]);
solve(["%",
    "!",
    "c",
    "^",
    "B",
    "`",
    "o",
    "%",
    "o",
    "o",
    "M",
    ")",
    "{",
    "n",

    "A",
])