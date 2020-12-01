function fishTank(length, width, height, percent) {
    let area = Number(length) * Number(height) * Number(width);
    let dm3 = area / 1000;
    let excluding = Number(percent) / 100;
    let water = dm3 - dm3 * excluding;
    
    console.log(water);
}

fishTank("85", "75", "47", "17")