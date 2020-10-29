function solve(days, food, dogFood, catFood, turtleFood) {
    days = Number(days);
    dogFood = Number(dogFood);
    catFood = Number(catFood);
    turtleFood = Number(turtleFood);
    food = Number(food);

    let dogFoodRequired = days * dogFood;
    let catFoodRequired = days * catFood;
    let turtleFoodRequired = days * turtleFood / 1000;
    let totalFoodRequired = dogFoodRequired + catFoodRequired + turtleFoodRequired;

    if (totalFoodRequired <= food) {
        console.log(`${Math.floor(food - totalFoodRequired)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalFoodRequired - food)} more kilos of food are needed.`);
    }
}

solve("5", "10", "2.1", "0.8", "321");