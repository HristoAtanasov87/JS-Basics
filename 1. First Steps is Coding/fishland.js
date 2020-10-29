function solve(mackarel, caca, kilosPalamud, kilosSafrid, kilosMidi) {
    mackarel = Number(mackarel);
    caca = Number(caca);
    kilosMidi = Number(kilosMidi);
    kilosPalamud = Number(kilosPalamud);
    kilosSafrid = Number(kilosSafrid);
        
    let pricePalamud = mackarel * 1.6;
    let priceSafrid = caca * 1.8;
    let priceMidi = 7.5;

    let total = pricePalamud * kilosPalamud + priceSafrid * kilosSafrid + priceMidi * kilosMidi;

    console.log(total.toFixed(2));
}

solve("6.9", "4.2", "1.5", "2.5", "1");