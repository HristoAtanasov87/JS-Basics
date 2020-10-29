function solve(input) {

    flour = Number(input[0]);
    flourKG = Number(input[1]);
    sugarKG = Number(input[2]);
    eggs = Number(input[3]);
    yeast = Number(input[4]);

    let sumFlour = flourKG * flour;
    let sugarPrice = flour * 0.75;
    let eggsPrice = flour * 1.1;
    let yeastPrice = sugarPrice * 0.2;

    let bill = sumFlour + (sugarKG * sugarPrice) + (eggsPrice * eggs) + (yeastPrice * yeast);

    console.log(bill.toFixed(2));

}

solve("63.44", "3.57", "6.35", "8", "2");