function solve(city, sales) {

    sales = Number(sales);
    let commission = 0;


    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commission = 0.05;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.08;
            } else if (sales > 10000) {
                commission = 0.12;
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commission = 0.045;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.10;
            } else if (sales > 10000) {
                commission = 0.13;
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commission = 0.055;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.12;
            } else if (sales > 10000) {
                commission = 0.145;
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
    }
    if (commission != 0) {
        console.log((commission * sales).toFixed(2));
    }
    
}

// solve("Sofia", "1500");
// solve("Plovdiv", "499.99");
// solve("Varna", "3874.50");
// solve("Kaspichan", "1500");
solve("Kaspichgan", "-1500");