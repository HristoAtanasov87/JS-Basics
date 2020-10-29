function solve(input) {
    
    groups = Number(input[0]);

    let totalPeople = 0;
    let musala = 0;
    let montblanc = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groups; i++) {
        totalPeople += Number(input[i]);
        if (Number(input[i]) <= 5) {
            musala += Number(input[i]);
        } else if (Number(input[i]) > 5 && Number(input[i]) <= 12) {
            montblanc += Number(input[i]);
        }  else if (Number(input[i]) > 12 && Number(input[i]) <= 25) {
            kilimandjaro += Number(input[i]);
        }  else if (Number(input[i]) > 25 && Number(input[i]) <= 40) {
            k2 += Number(input[i]);
        }  else if (Number(input[i])>= 41) {
            everest += Number(input[i]);
        }
    }

    let percentMusala = musala / totalPeople * 100;
    let percentMontblanc = montblanc / totalPeople * 100;
    let percentKilimandjaro = kilimandjaro / totalPeople * 100;
    let percentK2 = k2 / totalPeople * 100;
    let percentEverest = everest / totalPeople * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMontblanc.toFixed(2)}%`);
    console.log(`${percentKilimandjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);    
}

solve(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])