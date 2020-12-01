function solve(chicken, fish, vegetarian) {
    chicken = Number(chicken);
    fish = Number(fish);
    vegetarian = Number(vegetarian);

    let result = (chicken * 10.35) + (fish * 12.40) + (vegetarian * 8.15);
    let desert = result * 0.20;
    result += desert + 2.5;

    console.log(`Total: ${result.toFixed(2)}`);
}

solve("2", "4", "3");