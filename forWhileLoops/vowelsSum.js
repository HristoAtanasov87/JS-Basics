function solve(word) {

    let sum = 0;
    for (let i = 0; i < word.length; i++) {

        let charachter = word[i];
        switch (charachter) {
            case "a":
                sum++;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }
    console.log(sum);
}

solve("bamboo")