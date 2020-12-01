function solve(input) {
    let cargoes = Number(input[0]);
    let priceMinibus = 200;
    let priceTruck = 175;
    let priceTrain = 120;
    let tonsMiniBus = 0;
    let tonsTruck = 0;
    let tonsTrain = 0;
    let totalCargo = 0;

    for (let i = 1; i < input.length; i++) {
        if (Number(input[i]) <= 3) {
            tonsMiniBus += Number(input[i]);
            totalCargo += Number(input[i]);
        } else if (Number(input[i]) > 3 && Number(input[i]) < 12) {
            tonsTruck += Number(input[i]);
            totalCargo += Number(input[i]);
        } else if (Number(input[i]) >= 12) {
            tonsTrain += Number(input[i]);
            totalCargo += Number(input[i]);
        }
    }

    let averagePerTon = (tonsMiniBus * priceMinibus + tonsTruck * priceTruck + tonsTrain * priceTrain) / totalCargo;
    console.log(averagePerTon.toFixed(2));

    let percentMinibus = tonsMiniBus / totalCargo * 100;
    let percentTruck = tonsTruck / totalCargo * 100;
    let percentTrain = tonsTrain / totalCargo * 100;

    console.log(`${percentMinibus.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);

}

solve(["4", "1", "5", "16", "3"]);