function solve(input) {
    let movieName = input[0];
    let freeSeats = Number(input[1]);
    let countStandard = 0;
    let countStudent = 0;
    let countKid = 0;
    let totalTickets = 0;
    let totalFinal = 0;
    let totalStudent = 0;
    let totalStandard = 0;
    let totalKid = 0;
    let isFinish = false;

    let index = 1;    
    let ticketType = ""
    while (movieName !== "Finish") {
        index++;
        ticketType = input[index];

        while (ticketType !== "End") {
            
            switch (ticketType) {
                case "standard":
                    countStandard++;
                    break;
                case "student":
                    countStudent++;
                    break;
                case "kid":
                    countKid++;
                    break;
            }
            
            if ((countStudent + countStandard + countKid) === freeSeats) {
                break;
            }

            index++;
            ticketType = input[index];            
        }

        totalTickets = countStudent + countStandard + countKid;        
        console.log(`${movieName} - ${(totalTickets / freeSeats * 100).toFixed(2)}% full.`);
        totalStandard += countStandard;
        totalStudent += countStudent;
        totalKid += countKid;
        totalFinal += totalTickets;
        
        countStandard = 0;
        countStudent = 0;
        countKid = 0;

        index++;
        movieName = input[index];
        index++;
        freeSeats = Number(input[index]);        
    }

    console.log(`Total tickets: ${totalFinal}`);
    console.log(`${(totalStudent / totalFinal * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandard / totalFinal * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKid / totalFinal * 100).toFixed(2)}% kids tickets.`);
}

solve(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])




