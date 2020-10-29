function solve(time, scenes, sceneDuration) {
    time = Number(time);
    scenes = Number(scenes);
    sceneDuration = Number(sceneDuration);

    let surroundings = time * 0.15;
    let neededTime = scenes * sceneDuration + surroundings;

    if (neededTime <= time) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(time - neededTime)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(neededTime - time)} minutes.`);
    }
}

solve("120", "10", "11");