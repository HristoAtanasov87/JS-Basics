function solve(input) {
    let bottles = Number(input[0]);
    let bottleQuantity = bottles * 750;
    let plates = 5;
    let kettles = 15;
    let cleanPlates = 0;
    let cleanKettles = 0;
    let index = 1;
    let command = input[index];
    let isEnough = false;

    while (command !== "End") {
        if (index % 3 !== 0) {
            let detergentReq = plates * Number(input[index]);
            bottleQuantity -= detergentReq;
            if (bottleQuantity >= 0) {
                isEnough = true;
                cleanPlates += Number(input[index]);
                index++;
                command = input[index];
            } else {
                isEnough = false;
                break;
            }
        } else {
            let detergentReq = kettles * Number(input[index]);
            bottleQuantity -= detergentReq;
            if (bottleQuantity >= 0) {
                isEnough = true;
                cleanKettles += Number(input[index]);
                index++;
                command = input[index];
            } else {
                isEnough = false;
                break;
            }
        }
    }

    if (isEnough === true) {
        console.log("Detergent was enough!");
        console.log(`${cleanPlates} dishes and ${cleanKettles} pots were washed.`);
        console.log(`Leftover detergent ${bottleQuantity} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(bottleQuantity)} ml. more necessary!`);
    }
}

// solve(["2", "53", "65", "55", "End"]);
solve(["1", "10", "15", "10", "12", "13", "30"]);