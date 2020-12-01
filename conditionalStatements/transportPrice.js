function solve(km, travelTime) {
    km = Number(km);
    let bill = 0;

    if (km < 20) {
        if (travelTime === "day") {
            bill = 0.7 + (km * 0.79);
        } else {
            bill = 0.7 + (km * 0.90);
        }
    } else if (km >= 20 && km < 100) {
        bill = km * 0.09
        
    } else {
        bill = km * 0.06;
    }
    console.log(bill.toFixed(2));
}

solve("180", "night");