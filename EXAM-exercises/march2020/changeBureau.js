function solve(bitcoin, yuan, commission) {

    bitcoin = Number(bitcoin);
    yuan = Number(yuan);
    commission = Number(commission);

    let euro = 1.95;
    let dollar = 1.76;
    let bitcoinPrice = 1168;
    let yuanPrice = 0.15 * dollar;

    let change = ((bitcoin * bitcoinPrice) + (yuan * yuanPrice)) / euro;
    let result = change - (change * commission / 100);
    
    console.log(result.toFixed(2));
}

solve("7", "50200.12", "3");