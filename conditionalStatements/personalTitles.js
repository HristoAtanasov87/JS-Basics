function solve(age, gender) {
    age = Number(age);

    if (gender === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    }

    if (gender === "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
}

solve("12", "f");