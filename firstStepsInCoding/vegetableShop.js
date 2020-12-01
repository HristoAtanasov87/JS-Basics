function solve(input1, input2, input3, input4) {
    let priceVegetables = Number(input1);
    let priceFruits = Number(input2);
    let kilosVegetables = Number(input3);
    let kilosFruits = Number(input4);

    let incomeVege = priceVegetables * kilosVegetables;
    let incomeFruits = priceFruits * kilosFruits;

    let result = (incomeFruits + incomeVege) / 1.94
    console.log(result.toFixed(2));

}

solve(["0.194", "19.4", "10", "10"])