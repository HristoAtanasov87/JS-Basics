function solve(record, distance, timePerMeter) {

    record = Number(record);
    distance = Number(distance);
    timePerMeter = Number(timePerMeter);

    let timeAdded = Math.floor(distance / 50) * 30;
    let time = distance * timePerMeter + timeAdded;
    
    if (time < record) {
        console.log(`Yes! The new record is ${time} seconds.`);
    } else {
        console.log(`No! He was ${(time - record).toFixed(2)} seconds slower.`)
    }


}

solve("1377", "389", "3");