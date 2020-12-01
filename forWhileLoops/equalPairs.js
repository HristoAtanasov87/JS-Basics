function solve(input) {
    let couples = Number(input[0]);    
    let a = Number(input[1]);
    let b = Number(input[2]);
    let sum = a + b;
    
    let diff = 0;
    
        
    for (let i = 3; i < input.length; i++) {
        a = Number(input[i]);
        i++;
        b = Number(input[i]);        
        let current = a + b;
        let currentDiff = Math.abs(current - sum);
        if (currentDiff > diff) {
            diff = currentDiff;
        }
        sum = a + b;              
    }

    if (diff === 0) {
        console.log(`Yes, value=${a + b}`);
    } else {
        console.log(`No, maxdiff=${diff}`);
    }
}

// solve(["3", "1", "2", "0", "3", "4", "-1"]);
solve(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);