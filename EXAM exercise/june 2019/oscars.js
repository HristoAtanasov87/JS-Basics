function solve(input) {
    let name = input[0];
    let academyPoints = Number(input[1]);
    let judges = Number(input[2]);
    
    let isNominated = false;

    for (let i = 3; i < input.length; i++) {
        let judgeName = input[i];
        i++;
        let pointsJudge = Number(input[i]);
        academyPoints += (judgeName.length * pointsJudge / 2);
        if (academyPoints > 1250.5) {
            isNominated = true;
            break;
        }
    }    

    if(isNominated) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }
}

solve([
    'Zahari Baharov',
    '205',
    '4',
    'Johnny Depp',
    '45',
    'Will Smith',
    '29',
    'Jet Lee',
    '10',
    'Matthew Mcconaughey',
    '39'
  ])