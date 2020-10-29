function solve(intelect, strength, sex) {
    intelect = Number(intelect);
    strength = Number(strength);
    let role = "";

    if (intelect >= 80) {
        if ((strength >= 80) && (sex === "female")) {
            role = "Queen Bee";
        } else if (sex === "male" || sex === "female") {
            role = "Repairing Bee"
        }
    } else if (intelect >= 60 && intelect < 80) {
        role = "Cleaning Bee";
    } else if ((strength >= 80) && (sex === "male")) {
        role = "Drone Bee";
    } else if (strength >= 60) {
        role = "Guard Bee";
    } else {
        role = "Worker Bee";
    }
    console.log(role);
}

solve("40", "50", "female");