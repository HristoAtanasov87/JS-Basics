function solve(hours, days, workers) {
    hours = Number(hours);
    days = Number(days);
    workers = Number(workers);

    let workDays = days * 0.9;
    let workHours = Math.floor((workDays * 8) + (workers * 2 * days));
    if (workHours >= hours) {
        console.log(`Yes!${workHours - hours} hours left.`);
    } else {
        console.log(`Not enough time!${hours - workHours} hours needed.`)
    }
}

solve("90", "7", "3");