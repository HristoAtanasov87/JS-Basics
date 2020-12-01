function solve(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let area = width * height * length;
    let freeSpace = area;
    let index = 3;
    let command = input[index];

    let isFull = false

    while (command !== "Done") {
        let usedSpace = Number(command);
        freeSpace -= usedSpace;
        if (freeSpace <= 0) {
            isFull = true;
            break;
        }        
        
        index++;
        command = input[index];
    }

    if (isFull) {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);        
    } else {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}

solve(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


