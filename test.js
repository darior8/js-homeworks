var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";

services.price = function () {
    let total = 0;

    for (let key in this) {
        if (typeof this[key] === "string") {
            total += parseInt(this[key]);
        }
    }

    return total;
};

services.minPrice = function () {
    let min = Infinity;

    for (let key in this) {
        if (typeof this[key] === "string") {
            let value = parseInt(this[key]);

            if (value < min) {
                min = value;
            }
        }
    }

    return min;
};

services.maxPrice = function () {
    let max = 0;

    for (let key in this) {
        if (typeof this[key] === "string") {
            let value = parseInt(this[key]);

            if (value > max) {
                max = value;
            }
        }
    }

    return max;
};

console.log(services.price());    // 440
console.log(services.minPrice()); // 60
console.log(services.maxPrice()); // 200