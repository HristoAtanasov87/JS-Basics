function solve(input) {
    let n = Number(input[0]);
    let current = 1;
    let isEqual = false;
    let output = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let columns = 1; columns <= rows; columns++) {
            if (current > n) {
                isEqual = true;
                break;
            }
            output += current + " ";
            current++;
        }
        console.log(output);
        output = "";
        if (isEqual) {
            break;
        }
    }    
}

solve(["15"]);