function solve(input) {
    let book = input[0];

    let index = 1;
    let command = input[index];
    let isFound = false;
    let count = 0;

    while (command !== "No More Books") {        
        if (command === book) {
            isFound = true;
            break;
        }
        count++;
                
        index++;
        command = input[index];
    }
    
    if (isFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${count} books.`);
    } else {
        console.log(`You checked ${count} books and found it.`);
    }
}

solve(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])



