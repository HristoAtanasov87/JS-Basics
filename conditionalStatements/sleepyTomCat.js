function solve(rest) {
    rest = Number(rest);
    let workDays = 365 - rest;

    let playTimeRest = rest * 127;
    let playTimeWork = workDays * 63;
    let playTimeTotal = playTimeRest + playTimeWork;

    if (playTimeTotal <= 30000) {
        console.log("Tom sleeps well");
        let diff = 30000 - playTimeTotal;
        let hours = Math.floor(diff / 60);
        console.log(`${hours} hours and ${diff % 60} minutes less for play`);
    } else {
        console.log("Tom will run away");
        let diff2 = playTimeTotal - 30000;
        let hours2 = Math.floor(diff2 / 60);
        console.log(`${hours2} hours and ${diff2 % 60} minutes more for play`);  
    }
}

solve("113");