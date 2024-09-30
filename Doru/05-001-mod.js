for (var i = 10; i <= 160; i += 10) {  // Modify this range to include the correct rows
    let col1Value = parseFloat(values["CAP2_R" + i + "_C1"]);
    let colSum = 0;

    // Summing Columns 2 to 12 for the current row
    for (let col = 2; col <= 12; col++) {
        colSum += parseFloat(values["CAP2_R" + i + "_C" + col]) || 0;  // Add each column value
    }

    // Rounding the sum to 1 decimal place if necessary
    colSum = roundToDecimal(colSum, 1);



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
