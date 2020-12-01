function solve(input) {
    let lastSector = input[0];
    let rowsFirst = Number(input[1]);
    let seatsOddRow = Number(input[2]);
    let seatsEvenRow = seatsOddRow + 2;
    let result = "";
    let count = 0;

    let lastSectorCode = lastSector.charCodeAt(0);

    for (let i = 65; i <= lastSectorCode; i++) {
        for (let j = 1; j <= rowsFirst; j++) {
            if (j % 2 !== 0) {
                for (let k = 97; k < (97 + seatsOddRow); k++) {
                    count++;
                    result = `${String.fromCharCode(i)}` + `${j}` + `${String.fromCharCode(k)}`;
                    console.log(result);
                }
            } else {
                for (let l = 97; l < (97 + seatsEvenRow); l++) {
                    count++;
                    result = `${String.fromCharCode(i)}` + `${j}` + `${String.fromCharCode(l)}`;
                    console.log(result);

                }
            }            
        }
        rowsFirst++;        
    }
    console.log(count);
}

solve(["C", "4", "2"]);