function books(pages, pagesPerHour, days) {
    let hours = Number(pages) / Number(pagesPerHour);
    let hoursPerDay = hours / Number(days);
    
    console.log(hoursPerDay);
}

books("212", "20", "2",)