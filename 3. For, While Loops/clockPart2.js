function solve() {
    let minutes = 0;
    let hours = 0;
    let seconds = 0;
    console.log(`${hours} : ${minutes} : ${seconds}`);

    for (let i = 1; i < 86400; i++) {        
        if (i > 59) {
            seconds = 0;
            minutes++;
            if (minutes > 59) {
                minutes = 0;
                hours++;
            }
            i = 0;
            if (hours === 24) {
                break;
            }        
        } else {
            seconds = i;
        }
        console.log(`${hours} : ${minutes} : ${seconds}`);        
    }
}

solve()