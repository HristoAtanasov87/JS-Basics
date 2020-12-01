function solve(x1, y1, x2, y2, x, y) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);

    let value1;
    let value2;
    if ((x == x1 || x == x2) && (y >= y1 && y <= y2)) {
        value1 = true;
    } else if ((y == y1 || y == y2) && (x >= x1 && x <= x2)) {
        value2 = true;
    }

    if (value1 == true || value2 == true) {
        console.log("Border");  
    } else if (value1 == false || value2 == false) {
        console.log("Inside / Outside");
    } else {
        console.log("Inside / Outside");
    }         
}
solve("2", "-3", "12", "3", "8", "-1");2
