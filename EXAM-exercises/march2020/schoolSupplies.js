function solve(pens, markers, detergent, discount) {

    pens = Number(pens);
    markers = Number(markers);
    detergent = Number(detergent);
    discount = Number(discount);    

    let bill = (pens * 5.8) + (markers * 7.2) + (detergent * 1.2);
    let finalBill = bill - (bill * discount / 100);

    console.log(finalBill.toFixed(3));

}

solve("7", "8", "0.5", "45")