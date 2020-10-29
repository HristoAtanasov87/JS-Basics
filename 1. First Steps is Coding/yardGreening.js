function greening(area) {
    let price = Number(area) * 7.61;
    let discount = price * 0.18;
    let correctedPrice = price - discount;
    let printOut1 = `The final price is: ${correctedPrice.toFixed(2)} lv.`;
    let printOut2 = `The discount is: ${discount.toFixed(2)} lv.`;

    console.log(printOut1);
    console.log(printOut2);

}

greening(150);