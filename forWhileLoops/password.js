function solve(input) {
    let password = input[1];
    let username = input[0];
    let index = 2;
    
    let command = input[index];
    while (command !== password) {
        
        index++;
        command = input[index];
        if (command === password) {
            console.log(`Welcome ${username}!`);
        }
    }    
}

solve(["Nakov",
"1234",
"Pass",
"1324",
"1234",
"7"])
