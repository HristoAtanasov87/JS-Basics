function solve(hr, min) {
    hr = Number(hr);
    min = Number(min);

    
    let minutes = min + 15;
    let hours = hr;

    if (minutes > 59) {
        hours = hr + 1;
        minutes = minutes - 60;    
    }

    if (hours >= 24) {
        hours = hours - 24;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

// solve("1", "46");
// solve("0", "01");
// solve("23", "59");
// solve("11", "08");
solve("12", "49"); 