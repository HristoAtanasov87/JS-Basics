function solve(hrExam, minExam, hrArrival, minArrival) {

    hrExam = Number(hrExam);
    minExam = Number(minExam);
    hrArrival = Number(hrArrival);
    minArrival = Number(minArrival);

    let timeExam = (hrExam * 60 + minExam) / 60;
    let arrivalTime = (hrArrival * 60 + minArrival) / 60;

    if (timeExam < arrivalTime) {
        console.log("Late");
    } else if (timeExam >= arrivalTime) {
        if (timeExam - arrivalTime <= 0.5) {
            console.log("On time");
        } else if (timeExam - arrivalTime > 0.5) {
            console.log("Early");
        }
    }

    let delayHr = 0;
    let delayMin = 0
    let earlyHr = 0;
    let earlyMin = 0;

    if (timeExam < arrivalTime) {
        delayMin = (arrivalTime - timeExam) * 60;
        if (delayMin <= 59) {
            console.log(`${delayMin.toFixed(0)} minutes after the start`);
        } else if ((delayMin >= 60) && delayMin % 60 === 0) {
            delayHr = delayMin / 60;
            console.log(`${delayHr}:00 hours after the start`)
        } else if ((delayMin > 60) && delayMin % 60 != 0) {
            delayHr = Math.floor(delayMin / 60);
            delayMin = delayMin % 60;
            if (delayMin >= 10) {
                console.log(`${delayHr}:${delayMin.toFixed(0)} hours after the start`);
            } else {
                console.log(`${delayHr}:0${delayMin.toFixed(0)} hours after the start`);
            }
        }
    } else if (timeExam > arrivalTime) {
        earlyMin = (timeExam - arrivalTime) * 60;
        if (earlyMin <= 59) {
            console.log(`${earlyMin.toFixed(0)} minutes before the start`);
        } else if ((earlyMin >= 60) && earlyMin % 60 === 0) {
            earlyHr = earlyMin / 60;
            console.log(`${earlyHr}:00 hours before the start`)
        } else if ((earlyMin > 60) && earlyMin % 60 != 0) {
            earlyHr = Math.floor(earlyMin / 60);
            earlyMin = earlyMin % 60;
            if (earlyMin >= 10) {
                console.log(`${earlyHr}:${earlyMin.toFixed(0)} hours before the start`);
            } else {
                console.log(`${earlyHr}:0${earlyMin.toFixed(0)} hours before the start`);
            }
        }
    }

}
solve("11", "30", "12", "29");