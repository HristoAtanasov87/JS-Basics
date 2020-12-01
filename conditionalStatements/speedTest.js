function solve(x) {
    x = Number(x);

    if (x <= 10) {
        console.log("slow");
    } else if (x > 10 && x <= 50) {
        console.log("average");
    } else if ( x > 50 && x <= 150) {
        console.log("fast");
    } else if (x > 150 && x <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}

solve(11000)