function projects(name, numberProjects) {
    let time = Number(numberProjects) * 3;
    console.log(`The architect ${name} will need ${time} hours to complete ${numberProjects} project/s.`);
}

projects("Ico", "7")