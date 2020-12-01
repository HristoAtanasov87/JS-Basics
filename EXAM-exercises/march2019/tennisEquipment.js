function solve(priceRocket, numberRockets, numberSneakers) {
    priceRocket = Number(priceRocket);
    numberRockets = Number(numberRockets);
    numberSneakers = Number(numberSneakers);

    let totalPrice = 0;

    let priceSneakers = priceRocket / 6;
    totalPrice = priceRocket * numberRockets + priceSneakers * numberSneakers;

    let additional = 0.2 * totalPrice;

    totalPrice += additional;   
    let djokovic = totalPrice / 8;
    let sponsors = totalPrice / 8 * 7;

    console.log(`Price to be paid by Djokovic ${Math.floor(djokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsors)}`);    
}

solve("850", "4", "2");