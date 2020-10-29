function solve(minutes, walks, calories) {
    minutes = Number(minutes);
    walks = Number(walks);
    calories = Number(calories);

    let time = walks * minutes;
    let caloriesBurnt = 5 * time;

    if (caloriesBurnt >= 0.5 * calories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurnt}.`);
    } else {
        console.log(`No, the walk for your cat is not enogh. Burned calories per day: ${caloriesBurnt}.`);
    }
}

solve("40", "2", "300");