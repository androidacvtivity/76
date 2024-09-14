function roundToDecimal(value, decimals) {
    if (!isNaN(value)) {
        var factor = Math.pow(10, decimals);
        return Math.round(value * factor) / factor;
    } else {
        console.warn("Value provided is not a number:", value);
        return 0; // Default fallback value
    }
}
