function solve(input) {
    let months = Number(input[0]);
    let water = 20;
    let internet = 15;    
    let electricity = 0;
    let others = 0;

    for (let i = 1; i < input.length; i++) {
        electricity += Number(input[i]);
        others += (water + internet + Number(input[i])) * 1.2;
    }

    

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${(water * months).toFixed(2)} lv`);
    console.log(`Internet: ${(internet * months).toFixed(2)} lv`);
    console.log(`Other: ${(others).toFixed(2)} lv`);
    console.log(`Average: ${((electricity + others + (water + internet) * months) / months).toFixed(2)} lv`);
}

solve(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);