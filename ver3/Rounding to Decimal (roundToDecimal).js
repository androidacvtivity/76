var CAP1_R010 = parseFloat(values['CAP1_R010_C' + arr_CAP1_inputs_2[i]]);
var CAP1_R020 = parseFloat(values['CAP1_R020_C' + arr_CAP1_inputs_2[i]]);

if (!isNaN(CAP1_R010) && !isNaN(CAP1_R020)) {
    if (CAP1_R010 > CAP1_R020) {
        // Perform the intended comparison or operation
    }
} else {
    console.warn("Invalid number encountered:", CAP1_R010, CAP1_R020);
}
