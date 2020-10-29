function solve(input) {
    let persons = Number(input[0]);
    let entryFee = Number(input[1]);
    let couchFee = Number(input[2]);
    let umbrellaFee = Number(input[3]);

    let totalEntryFees = persons * entryFee;
    let totalUmbrellaFees = Math.ceil(persons / 2) * umbrellaFee;
    let totalCouchFees = Math.ceil(persons * 0.75) * couchFee;
    let result = totalCouchFees + totalEntryFees + totalUmbrellaFees;

    console.log(`${result.toFixed(2)} lv.`);
}

solve(['21', '5.50', '4.40', '6.20']);