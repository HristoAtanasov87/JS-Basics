function solve(age, wmPrice, toyPrice) {
    age = Number(age);
    wmPrice = Number(wmPrice);
    toyPrice = Number(toyPrice);

    let moneyReceived = 0;
    let moneyCount = 0;
    let toysCount = 0;
    let moneyFromToys = 0;

    for (i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            moneyCount += 1;
            moneyReceived += moneyCount * 10 - 1;
        } else {
            toysCount += 1;
            moneyFromToys = toysCount * toyPrice;
        }
    }

    let moneySaved = moneyFromToys + moneyReceived;
    if (moneySaved >= wmPrice) {
        let moneyRemainig = moneySaved - wmPrice;
        console.log(`Yes! ${moneyRemainig}`);
    } else {
        let moneyNeeded = wmPrice - moneySaved;
        console.log(`No! ${moneyNeeded}`);
    }

}

solve("10", "170", "6");