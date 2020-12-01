function solve(record, distance, seconds) {
    record = Number(record);
    distance = Number(distance);
    seconds = Number(seconds);

    let slow = Math.floor(distance / 15);
   
    let timeIvancho = distance * seconds + (slow * 12.5);
    let timeNeeded = timeIvancho - record;
    
    if (timeIvancho < record) {
        console.log(`Yes, he succeeded! The new world record is ${timeIvancho.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`)
    }

}   

// solve("10464", "1500", "20");
solve("55555.67", "3017", "5.03");