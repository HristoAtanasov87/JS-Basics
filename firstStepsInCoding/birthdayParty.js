function party(rent) {
    let cake = Number(rent) * 0.2;
    let drinks = cake - 0.45 * cake;
    let animator = Number(rent) / 3;
   
    console.log(cake + drinks + animator + Number(rent));
}

party("1001")