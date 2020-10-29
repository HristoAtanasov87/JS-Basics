function solve(tax) {
    tax = Number(tax);

    let sneakers = 0.6 * tax;
    let suit = sneakers * 0.8;
    let ball = 0.25 * suit;
    let accessories = 0.2 * ball;

    let total = tax + sneakers + suit + ball + accessories;

    console.log(total.toFixed(2));
}

solve ("320");