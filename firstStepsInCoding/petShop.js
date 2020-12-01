function expences(dogs, notDogs) {
    let price1 = Number(dogs) * 2.5;
    let price2 = Number(notDogs) * 4;
    let total = price1 + price2;

    console.log(`${total} lv.`);
}

expences(13, 9)