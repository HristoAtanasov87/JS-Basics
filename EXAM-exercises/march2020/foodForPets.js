function solve(input) {

    let days = Number(input[0]);
    let food = Number(input[1]);
    let catFood = 0;
    let dogFood = 0;

    for (let i = 2; i <= (days * 2) + 1; i++) {
        if (i % 2 == 0) {
            dogFood += Number(input[i]);
        } else {
            catFood += Number(input[i]);
        }        
    }
    
    let biscuitDay = 0;
    let biscuits = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 3 == 0) {
            biscuitDay += Number(input[i * 2]) + Number(input[(i * 2) + 1]);
            biscuits = Math.round(0.1 * biscuitDay);            
        }
    }

    let totalfoodEaten = dogFood + catFood;  
    let percentFoodEaten = totalfoodEaten / food * 100;
    let percentDog = (totalfoodEaten - catFood) / totalfoodEaten * 100;
    let percentCat = (totalfoodEaten - dogFood) / totalfoodEaten * 100;

    console.log(`Total eaten biscuits: ${biscuits}gr.`);
    console.log(`${percentFoodEaten.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCat.toFixed(2)}% eaten from the cat.`);
}

solve(["4", "500", "100", "30", "110", "25", "120", "35", "20", "20"]);
