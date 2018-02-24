// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" }
    }
    if (currency === 0) {
        return {};
    }

    let result = {};

    let cur = currency;
    if (Math.floor(cur / 50) > 0) {
        result.H = Math.floor(cur / 50);
        cur = cur - Math.floor(cur / 50) * 50;
    }
    if (Math.floor(cur / 25) > 0) {
        result.Q = Math.floor(cur / 25);
        cur = cur - Math.floor(cur / 25) * 25;
    }
    if (Math.floor(cur / 10) > 0) {
        result.D = Math.floor(cur / 10);
        cur = cur - Math.floor(cur / 10) * 10;
    }
    if (Math.floor(cur / 5) > 0) {
        result.N = Math.floor(cur / 5);
        cur = cur - Math.floor(cur / 5) * 5;
    }
    if (cur > 0) {
        result.P = cur;
    }

    return result;
}
