// Helper function for rounding numbers to a specific decimal place
function roundToDecimal(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

// Helper function to safely parse numeric values
function getNumericValue(value) {
    var parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
}

// Helper function to add errors
function addError(condition, fieldName, weight, code, message) {
    if (condition) {
        webform.errors.push({
            'fieldName': fieldName,
            'weight': weight,
            'msg': Drupal.t(message)
        });
    }
}

// Helper function to add warnings
function addWarning(condition, fieldName, weight, code, message) {
    if (condition) {
        webform.warnings.push({
            'fieldName': fieldName,
            'weight': weight,
            'msg': Drupal.t(message)
        });
    }
}

// Begin validation
var arr_CAP1_inputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
arr_CAP1_inputs.forEach(function (col) {
    var CAP1_R010 = getNumericValue(values['CAP1_R010_C' + col]);
    var CAP1_R020 = getNumericValue(values['CAP1_R020_C' + col]);
    var CAP1_R030 = getNumericValue(values['CAP1_R030_C' + col]);
    var CAP1_R031 = getNumericValue(values['CAP1_R031_C' + col]);
    var CAP1_R040 = getNumericValue(values['CAP1_R040_C' + col]);
    var CAP1_R050 = getNumericValue(values['CAP1_R050_C' + col]);
    var CAP1_R051 = getNumericValue(values['CAP1_R051_C' + col]);
    var CAP1_R052 = getNumericValue(values['CAP1_R052_C' + col]);
    var CAP1_R070 = getNumericValue(values['CAP1_R070_C' + col]);
    var CAP1_R071 = getNumericValue(values['CAP1_R071_C' + col]);
    var CAP1_R072 = getNumericValue(values['CAP1_R072_C' + col]);
    var CAP1_R073 = getNumericValue(values['CAP1_R073_C' + col]);
    var CAP1_R074 = getNumericValue(values['CAP1_R074_C' + col]);
    var CAP1_R120 = getNumericValue(values['CAP1_R120_C' + col]);

    // 05-003 Validation
    addError(
        CAP1_R070 < CAP1_R071,
        'CAP1_R071_C' + col,
        3,
        '05-003',
        'Cod eroare: 05-003 - Cap.1: R.71 ≤ R.70 -> [' + CAP1_R071 + '] ≤ [' + CAP1_R070 + ']'
    );

    // 05-007 Validation
    var sum_R071_074 = CAP1_R071 + CAP1_R072 + CAP1_R073 + CAP1_R074;
    addWarning(
        CAP1_R070 < sum_R071_074,
        'CAP1_R070_C' + col,
        7,
        '05-007',
        'Cod atenționare: 05-007 - Cap.1: Suma R.(71, 72, 73, 74) ≤ R.70 -> [' + sum_R071_074 + '] ≤ [' + CAP1_R070 + ']'
    );

    // 05-009 Validation
    addWarning(
        CAP1_R020 > CAP1_R010,
        'CAP1_R020_C' + col,
        9,
        '05-009',
        'Cod atenționare: 05-009 - Cap.1: R.20 ≤ R.10 -> [' + CAP1_R020 + '] ≤ [' + CAP1_R010 + ']'
    );

    // 05-010 Validation
    addWarning(
        CAP1_R040 > CAP1_R030,
        'CAP1_R040_C' + col,
        10,
        '05-010',
        'Cod atenționare: 05-010 - Cap.1: R.40 ≤ R.30 -> [' + CAP1_R040 + '] ≤ [' + CAP1_R030 + ']'
    );

    // 05-012 Validation
    var raport1 = CAP1_R030 + CAP1_R040;
    if (raport1 > 0) {
        var calcul1 = (CAP1_R050 * 1000) / raport1;
        calcul1 = roundToDecimal(calcul1, 1);
        addWarning(
            calcul1 > 570 || calcul1 < 450,
            'CAP1_R050_C' + col,
            12,
            '05-012',
            'Cod atenționare: 05-012 - Cap.1: R.50 * 1000 / (R.30 + R.40) ≤ 570 și > 450 -> [' + calcul1 + ']'
        );
    }

    // 05-013 Validation
    addWarning(
        CAP1_R030 > 0 && CAP1_R070 === 0,
        'CAP1_R030_C' + col,
        13,
        '05-013',
        'Cod atenționare: 05-013 - Cap.1: Dacă există R.30 ar trebui să fie R.70 și invers.'
    );
    addWarning(
        CAP1_R070 > 0 && CAP1_R030 === 0,
        'CAP1_R070_C' + col,
        13,
        '05-013',
        'Cod atenționare: 05-013 - Cap.1: Dacă există R.70 ar trebui să fie R.30 și invers.'
    );

    // 05-014 Validation
    addError(
        CAP1_R031 > CAP1_R030,
        'CAP1_R031_C' + col,
        14,
        '05-014',
        'Cod eroare: 05-014 - Cap.1: R.31 ≤ R.30 -> [' + CAP1_R031 + '] ≤ [' + CAP1_R030 + ']'
    );

    // 05-023 Validation
    addWarning(
        CAP1_R050 > 0 && CAP1_R030 === 0,
        'CAP1_R030_C' + col,
        23,
        '05-023',
        'Cod atenționare: 05-023 - Cap.1: Dacă există R.50 ar trebui să fie R.30 și invers.'
    );
    addWarning(
        CAP1_R030 > 0 && CAP1_R050 === 0,
        'CAP1_R030_C' + col,
        23,
        '05-023',
        'Cod atenționare: 05-023 - Cap.1: Dacă există R.30 ar trebui să fie R.50 și invers.'
    );

    // 05-025 Validation
    addWarning(
        CAP1_R031 > 0 && CAP1_R074 === 0,
        'CAP1_R074_C' + col,
        25,
        '05-025',
        'Cod atenționare: 05-025 - Cap.1: Dacă există R.31 ar trebui să fie R.74 și invers.'
    );
    addWarning(
        CAP1_R074 > 0 && CAP1_R031 === 0,
        'CAP1_R031_C' + col,
        25,
        '05-025',
        'Cod atenționare: 05-025 - Cap.1: Dacă există R.74 ar trebui să fie R.31 și invers.'
    );

    // 05-028 Validation
    var CAP1_R010_C1 = getNumericValue(values['CAP1_R010_C1']);
    addWarning(
        CAP1_R031 > CAP1_R010_C1,
        'CAP1_R031_C1',
        28,
        '05-028',
        'Cod atenționare: 05-028 - Cap.1: R.31 ≤ R.10 -> [' + CAP1_R031 + '] ≤ [' + CAP1_R010_C1 + ']'
    );

    // 05-030 Validation
    addError(
        CAP1_R040 > 0 && CAP1_R073 === 0,
        'CAP1_R073_C' + col,
        30,
        '05-030',
        'Cod eroare: 05-030 - Cap.1: Dacă există R.40 ar trebui să fie R.73 și invers.'
    );
    addError(
        CAP1_R073 > 0 && CAP1_R040 === 0,
        'CAP1_R040_C' + col,
        30,
        '05-030',
        'Cod eroare: 05-030 - Cap.1: Dacă există R.73 ar trebui să fie R.40 și invers.'
    );

    // 05-036 Validation
    if (CAP1_R030 > 0) {
        var calcul2 = ((CAP1_R070 - CAP1_R073) * 1000 / CAP1_R030) / 3;
        calcul2 = roundToDecimal(calcul2, 1);
        addWarning(
            calcul2 < 5000 || calcul2 > 20000,
            'CAP1_R070_C' + col,
            36,
            '05-036',
            'Cod atenționare: 05-036 - Cap.1: (R.70 - R.73 * 1000 / R.30) / 3 > 5000 și < 20000 -> [' + calcul2 + ']'
        );
    }

    // 05-037 Validation
    if (CAP1_R031 > 0) {
        var calcul3 = ((CAP1_R074 * 1000) / CAP1_R031) / 3;
        calcul3 = roundToDecimal(calcul3, 1);
        addWarning(
            calcul3 < 8000 || calcul3 > 18000,
            'CAP1_R074_C' + col,
            37,
            '05-037',
            'Cod atenționare: 05-037 - Cap. 1: (R.74 * 1000 / R.31) / 3 > 8000 și < 18000 -> [' + calcul3 + ']'
        );
    }

    // 05-039 Validation
    if (CAP1_R040 > 0) {
        var calcul4 = ((CAP1_R073 * 1000) / CAP1_R040) / 3;
        calcul4 = roundToDecimal(calcul4, 1);
        addWarning(
            calcul4 < 5000 || calcul4 > 20000,
            'CAP1_R073_C' + col,
            39,
            'Cod atenționare: 05-039 - Cap.1: (R.73 * 1000 / R.40) / 3 > 5000 și < 20000 -> [' + calcul4 + ']'
        );
    }

    // 05-040 Validation
    addError(
        CAP1_R010 > 0 && CAP1_R030 === 0,
        'CAP1_R030_C' + col,
        40,
        '05-040',
        'Cod eroare: 05-040 - Cap.1: Dacă există R.10 ar trebui să fie R.30.'
    );

    // 05-042 Validation
    if (!isNaN(CAP1_R050) || !isNaN(CAP1_R051)) {
        addError(
            CAP1_R051 <= CAP1_R052 && (CAP1_R051 > 0 || CAP1_R052 > 0),
            'CAP1_R051_C' + col,
            42,
            '05-042',
            'Cod eroare: 05-042 - Cap.1: R.51 > R.52.'
        );
    }

    // 05-043 Validation
    addWarning(
        (CAP1_R040 > 0 && CAP1_R030 === 0) && CAP1_R070 !== CAP1_R073,
        'CAP1_R070_C' + col,
        43,
        '05-043',
        'Cod atenționare: 05-043 - Cap.1: Dacă R.40 > 0 și R.30 = 0, atunci R.70 = R.73.'
    );
    addWarning(
        (CAP1_R070 === CAP1_R073 && CAP1_R040 === 0) || (CAP1_R070 === CAP1_R073 && CAP1_R030 > 0),
        'CAP1_R070_C' + col,
        43,
        '05-043',
        'Cod atenționare: 05-043 - Cap.1: Dacă R.70 = R.73, fie ar trebui să existe R.40 sau R.30.'
    );

    // 05-044 Validation
    var SumF1 = CAP1_R030 - CAP1_R031;
    if (SumF1 != 0) {
        var calcul5 = ((CAP1_R070 - CAP1_R074) * 1000 / SumF1) / 3;
        calcul5 = roundToDecimal(calcul5, 1);
        addWarning(
            calcul5 <= 4000,
            'CAP1_R070_C' + col,
            44,
            '05-044',
            'Cod atenționare: 05-044 - Cap.1: ((R.70 - R.74) * 1000 / (R.30 - R.31)) / 3 > 4000 -> [' + calcul5 + ']'
        );
    }

    // 05-050 Validation
    addWarning(
        CAP1_R010 === CAP1_R020 && CAP1_R010 != 0 && CAP1_R020 != 0,
        'CAP1_R020_C' + col,
        50,
        '05-050',
        'Cod atenționare: 05-050 - Cap.1: R.10 ≠ R.20 -> [' + CAP1_R010 + '] ≠ [' + CAP1_R020 + ']'
    );

    // 05-051 Validation
    var sum_CAP1_R071_073_074 = CAP1_R071 + CAP1_R073 + CAP1_R074;
    addWarning(
        CAP1_R070 === sum_CAP1_R071_073_074 && CAP1_R070 != 0 && sum_CAP1_R071_073_074 != 0,
        'CAP1_R070_C' + col,
        51,
        '05-051',
        'Cod atenționare: 05-051 - Cap.1: R.70 ≠ R.71 + R.73 + R.74 -> [' + CAP1_R070 + '] ≠ [' + sum_CAP1_R071_073_074 + ']'
    );
});
