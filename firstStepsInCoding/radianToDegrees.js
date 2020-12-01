function converter(radian) {
    let degrees = Number(radian) * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}

converter(6.2832)