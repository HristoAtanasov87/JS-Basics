function solve(money, year) {
    year = Number(year);
    money = Number(money);

    let oddCount = 0;
    let evenCount = 0;
    let moneySpent = 0;

    for (let i = 1800; i <= year; i++) {
        if(i % 2 != 0) {
            oddCount++;
            moneySpent += 12000 + (50 * (i - 1800 + 18));
        } else {
            evenCount++;
            moneySpent += 12000;
        }
    }

    if (money >= moneySpent) {
        console.log(`Yes! He will live a carefree life and will have ${(money - moneySpent).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(moneySpent - money).toFixed(2)} dollars to survive.`);
    }

}
solve("100000.15", "1808");