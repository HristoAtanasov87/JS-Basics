function solve(input) {

    cake = Number(input[0]);
    eggs = Number(input[1]);
    cookies = Number(input[2]);


    let bill = (cake * 3.2) + (eggs * 4.35) + (cookies * 5.4) + (eggs * 12 * 0.15);
    
    console.log(bill.toFixed(2));
}

solve("4", "4", "3");