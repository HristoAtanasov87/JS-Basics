function solve(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    
    
    let finalBill = 0;

    for (let i = 1; i <= days; i++) {
        let bill = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 !== 0 && j % 2 === 0) {
                price = 1.25;
                bill += price;
            } else if (i % 2 === 0 && j % 2 !== 0) {
                price = 2.50;
                bill += price;
            } else {
                price = 1.00;
                bill += price;
            }

            finalBill += price;            
        }   
        
        console.log(`Day: ${i} - ${bill.toFixed(2)} leva`);        
    }

    console.log(`Total: ${finalBill.toFixed(2)} leva`);
}

solve(["2", "5"])