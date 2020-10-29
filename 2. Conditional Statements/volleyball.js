function solve(year, holidays, travel) {
    holidays = Number(holidays);
    travel = Number(travel);

    let offWork = 48 - travel;
    let playTime = 0;
    let playTimeSofia = (offWork * 3 / 4) + (2 / 3 * holidays);
    
    if (year === "leap") {
        playTime = Math.floor((playTimeSofia + travel) * 1.15);        
    } else {
        playTime = Math.floor(playTimeSofia + travel);
    }
    console.log(playTime);

}

solve("leap", "5", "2");