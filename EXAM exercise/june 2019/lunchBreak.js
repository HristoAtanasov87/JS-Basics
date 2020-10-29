function solve(movie, episodeDuration, lunchBreak) {
    episodeDuration = Number(episodeDuration);
    lunchBreak = Number(lunchBreak);

    let lunch = lunchBreak / 8;
    let rest = lunchBreak / 4;
    let remaining = lunchBreak - lunch - rest;
    if (remaining >= episodeDuration) {
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(remaining - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(episodeDuration - remaining)} more minutes.`);
    }
}
solve("Game of thrones", "60", "96");
