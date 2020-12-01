function solve(input) {
    let clients = Number(input[0]);

    let priceBasket = 1.5;
    let priceWreath = 3.8;
    let priceBunny = 7;
    let totalBill = 0;

    let index = 1;
    let command = input[index];

    for (let i = 1; i <= clients; i++) {
        let countB = 0;
        let countW = 0;
        let countC = 0;
        let price = 0;

        while (command !== "Finish") {
            switch (command) {
                case "basket":
                    countB++;
                    break;
                case "wreath":
                    countW++
                    break;
                case "chocolate bunny":
                    countC++;
                    break;
            }

            index++;
            command = input[index];
        }

        price = countB * priceBasket + countC * priceBunny + countW * priceWreath;

        if ((countB + countC + countW) % 2 === 0) {
            price *= 0.8;
        }

        totalBill += price;

        console.log(`You purchased ${countB + countC + countW} items for ${price.toFixed(2)} leva.`);

        index++;
        command = input[index];
    }

    console.log(`Average bill per client is: ${(totalBill / clients).toFixed(2)} leva.`);
}

solve([
    '1',
    'basket',
    'wreath',
    'chocolate bunny',
    'wreath',
    'basket',
    'chocolate bunny',
    'Finish'
  ])
  