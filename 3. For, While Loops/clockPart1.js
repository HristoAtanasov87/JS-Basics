function solve() {
    let minutes = 0;
    let hours = 0;
    console.log(`${hours} : ${minutes}`);

    for (let i = 1; i < 1440; i++) {        
        if (i > 59) {
            minutes = 0;
            hours++;
            i = 0;
            if (hours === 24) {
                break;
            }        
        } else {
            minutes = i;
        }
        console.log(`${hours} : ${minutes}`);        
    }
}

solve()