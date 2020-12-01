function fruitMarket(priceStrawberries, banana, orange, raspberry, strawberries) {
    let strawberriesBill = Number(priceStrawberries) * Number(strawberries);
    let raspberryPrice = Number(priceStrawberries) / 2;
    let raspberryBill = raspberryPrice * Number(raspberry);
    let orangePrice = raspberryPrice - 0.4 * raspberryPrice;
    let orangeBill = orangePrice * Number(orange);
    let bananaPrice = raspberryPrice - 0.8 * raspberryPrice;
    let bananaBill = bananaPrice * Number(banana);
    let total = strawberriesBill + raspberryBill + orangeBill + bananaBill;
    
    console.log(total);

}

fruitMarket("63.5", "3.57", "6.35", "8.15", "2.5");