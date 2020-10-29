function solve(minutes, seconds, meters, secsFor100M) {
    minutes = Number(minutes);
    seconds = Number(seconds);
    meters = Number(meters);
    secsFor100M = Number(secsFor100M);

    let quota = minutes * 60 + seconds;

    let slowing = meters / 120;
    let addTime = slowing * 2.5;

    let time = (meters / 100 * secsFor100M) - addTime;

    if (time <= quota) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${time.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(time - quota).toFixed(3)} second slower.`);
    }
}

// solve("2", "12", "1200", "10");
solve("1", "20", "1546", "12");