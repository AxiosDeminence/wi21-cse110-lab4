let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const carType in statistics) {
    if (carType[0].toUpperCase() === "R" ||
        statistics[carType] % 2 === 1) {
            console.log(statistics[carType]);
    }
}