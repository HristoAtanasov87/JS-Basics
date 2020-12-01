function solve(hour, day) {
    hour = Number(hour);

    if (hour >= 10 && hour < 18) {
        if (day === "Monday") {
            console.log("open");
        }
        else if (day === "Tuesday") {
            console.log("open");
        }
        else if (day === "Wednesday") {
            console.log("open");
        }
        else if (day === "Thursday") {
            console.log("open");
        }
        else if (day === "Friday") {
            console.log("open");
        }
        else if (day === "Saturday") {
            console.log("open");
        }
        else{
            console.log("closed");
        }
    }
    else{
        console.log("closed");
    }
}

solve("11", "Monday");
solve("19", "Friday");
solve("11", "Sunday");