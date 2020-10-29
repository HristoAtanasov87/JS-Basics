function greeting(firstName, lastName, age, town) {
    let data = "You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".";
    
    console.log(data);
}

greeting("Hristo", "Atanasov", "32", "Varna")

function greeting1(firstName, lastName, age, town) {
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}

greeting1("Rali", "Atanasova", "31", "Varna")