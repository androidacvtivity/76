for (var i = 10; i <= 160; i += 10) {  // Modify this range to include the correct rows
    let col1Value = parseFloat(values["CAP2_R" + i + "_C1"]);
    let colSum = 0;

    // Ensure col1Value is a valid number, assign 0 if NaN
    if (isNaN(col1Value)) {
        col1Value = 0;  // Assign 0 if col1Value is NaN
    }

    // Summing Columns 2 to 12 for the current row with NaN check
    for (let col = 2; col <= 12; col++) {
        let colValue = parseFloat(values["CAP2_R" + i + "_C" + col]);
        if (isNaN(colValue)) {
            colValue = 0;  // Assign 0 if colValue is NaN
        }
        colSum += colValue;  // Add each column value
    }

    // Rounding the sum to 1 decimal place if necessary
    colSum = roundToDecimal(colSum, 1);

    // Log the current comparison between col1Value and colSum
    console.log("Row " + i + ": col1Value = " + col1Value + ", colSum = " + colSum);
    console.log("Validation for Row " + i + ": " + (col1Value !== colSum ? "Failed" : "Passed"));

    // If Column 1 is not equal to the sum of Columns 2-12, push an error
    if (col1Value !== colSum) {
        webform.errors.push({
            'fieldName': 'CAP2_R' + i + '_C1',
            'weight': 1,
            'msg': Drupal.t('Error Code: 05-001 - Col.1 must be equal to the sum of Col.2-12 for row @row. Current Col.1 Value: [@col1], Sum of Col.2-12: [@colSum]',
                {
                    '@row': i,
                    '@col1': col1Value,
                    '@colSum': colSum
                })
        });
    }
}
