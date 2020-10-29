function solve(input) {
    let honeyRequired = Number(input[0]);
    let index = 1;
    let command = input[index];
    let honeyCollected = 0;
    let isEnough = false;
    
        
    while (command !== "Winter has come") {
        let name = input[index];
        let beeCollected = 0;

        for (let i = index + 1; i < index + 7; i++) {
            honeyCollected += Number(input[i]);
            beeCollected += Number(input[i]);            
        }

        if (beeCollected < 0) {
            console.log(`${name} was banished for gluttony`);
        }

        if (honeyCollected >= honeyRequired) {
            isEnough = true;            
            break;
        }

        index += 7;
        command = input[index];
    }

    if (isEnough) {
        console.log(`Well done! Honey surplus ${(honeyCollected - honeyRequired).toFixed(2)}.`);
    } else {
        console.log(`Hard Winter! Honey needed ${(honeyRequired - honeyCollected).toFixed(2)}.`);
    }
}


// solve([
//     '1000',
//     'Maya',
//     '50',
//     '10.5',
//     '19.5',
//     '30',
//     '100',
//     '100',
//     'Winter has come'
//   ]);

  solve([
    '300',
    'Beeatrice',
    '50',
    '-10',
    '40',
    '30',
    '100',
    '100',
    'Winter has come'
  ])

//   solve([
//     '1000',   'Maya',
//     '-50',    '-10',
//     '-20.70', '20.40',
//     '10.30',  '40',
//     'Yama',   '50',
//     '10',     '20',
//     '30',     '100',
//     '100',    'Winter has come'
//   ]
//   )