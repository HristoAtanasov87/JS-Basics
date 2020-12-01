function calculator(depositSum, period, interestPercent) {
    let yearlyInterest = Number(depositSum) * Number(interestPercent) / 100;
    let monthlyInterest = yearlyInterest / 12;
    let newInterest = (Number(period) * monthlyInterest);
    let result = Number(depositSum) + newInterest;

  
    console.log(result);
}

calculator("200", "3", "5.7");