function solve(seriesName, seasons, episodes, duration) {
    seasons = Number(seasons);
    episodes = Number(episodes);
    duration = Number(duration);

    let addMinutes = seasons * 10; 
    duration = 1.2 * duration;
    let totalMinutes = (seasons * episodes * duration) + addMinutes;

    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(totalMinutes)} minutes.`);
        
}

solve("Lucifer", "3", "18", "55");