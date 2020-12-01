function solve(shape, num1, num2) {
    // num1 = Number(num1);
    // num2 = Number(num2);

    // if (shape === "square") {
    //     console.log((num1 * num1).toFixed(3));
    // } else if (shape === "rectangle") {
    //    console.log((num1 * num2).toFixed(3));
    // } else if (shape === "circle") {
    //     console.log((Math.pow(num1, 2) * Math.PI).toFixed(3));
    // } else {
    //     console.log((num1 * num2 / 2).toFixed(3));
    // }

    let area;

    if (shape === "square") {
        let a = Number(num1);
        area = a * a;

    } else if (shape === "rectangle") {
        let a = Number(num1);
        let b = Number(num2);
        area = a * b;

    } else if (shape === "circle") {
        let r = Number(num1);
        area = (Math.pow(r, 2) * Math.PI);

    } else {
        let a = Number(num1);
        let h = Number(num2);
        area = a * h / 2;

    }
    console.log(area.toFixed(3));
}

solve("triangle", "4.5", "20");