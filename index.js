function pow(x, y) {
    if (x === 0 && y === 0) {
        return undefined;
    }

    if (y === 0) {
        return 1;
    }

    let result = 1;
    let power = y;

    if (y < 0) {
        power = -y;
    }
    for (let i = 0; i < power; i++) {
        result *= x;
    }

    if (y < 0) {
        return 1 / result;
    }

    return result;
}