//--------------------------------------

// Define the rounding function
function roundToDecimal(number, decimalPlaces) {
    var factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}

// Define a function to safely parse numeric values
function getNumericValue(value) {
    var num = parseFloat(value);
    return isNaN(num) ? 0 : num;
}

// Arrays of inputs and rows
var arr_CAP1_inputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var arr_CAP1_rows = ['010', '020', '030', '031', '040', '050', '051', '052', '070', '071', '072', '073', '074', '120'];

// Check if any values are present to proceed
var valid_ = arr_CAP1_inputs.some(function (col) {
    return arr_CAP1_rows.some(function (row) {
        var value = values['CAP1_R' + row + '_C' + col];
        return value !== null && value !== undefined && !isNaN(parseFloat(value));
    });
});

if (valid_) {
    for (var i = 0; i < arr_CAP1_inputs.length; i++) {
        var col = arr_CAP1_inputs[i];
        var fields_CAP1_CAEM2 = jQuery('#CAP1 thead tr td:nth-child(' + col + ')').find('select').val();

        // Initialize variables safely
        var CAP1 = {};
        arr_CAP1_rows.forEach(function (row) {
            var key = 'R' + row;
            var value = getNumericValue(values['CAP1_' + key + '_C' + col]);
            CAP1[key] = value;

            // Validation 05-021: Check for CAEM code
            if ((fields_CAP1_CAEM2 === null || fields_CAP1_CAEM2 === undefined || fields_CAP1_CAEM2.trim() === '')) {
                webform.errors.push({
                    'fieldName': 'CAP1_' + key + '_C' + col,
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        });

        // Validation functions
        function addError(condition, field, weight, code, message, variables) {
            if (condition) {
                webform.errors.push({
                    'fieldName': field,
                    'weight': weight,
                    'msg': Drupal.t(message, variables)
                });
            }
        }

        function addWarning(condition, field, weight, code, message, variables) {
            if (condition) {
                webform.warnings.push({
                    'fieldName': field,
                    'weight': weight,
                    'msg': Drupal.t(message, variables)
                });
            }
        }

        // Start Validations

        // Validation 05-003
        addError(
            CAP1.R070 < CAP1.R071,
            'CAP1_R071_C' + col,
            3,
            '05-003',
            'Cod eroare: 05-003 - Cap.1: R.71 ≤ R.70 pe toate coloanele. -> [@CAP1_R071] ≤ [@CAP1_R070]',
            { '@CAP1_R071': CAP1.R071, '@CAP1_R070': CAP1.R070 }
        );

        // Validation 05-007
        var sum_R071_074 = CAP1.R071 + CAP1.R072 + CAP1.R073 + CAP1.R074;
        addWarning(
            CAP1.R070 < sum_R071_074,
            'CAP1_R070_C' + col,
            7,
            '05-007',
            'Cod atenționare: 05-007 - Cap.1: Suma R.(71, 72, 73, 74) ≤ R.70 -> [@sum_R071_074] ≤ [@CAP1_R070]',
            { '@sum_R071_074': sum_R071_074, '@CAP1_R070': CAP1.R070 }
        );

        // Validation 05-009
        addWarning(
            CAP1.R020 > CAP1.R010,
            'CAP1_R020_C' + col,
            9,
            '05-009',
            'Cod atenționare: 05-009 - Cap.1: R.20 ≤ R.10 -> [@CAP1_R020] ≤ [@CAP1_R010]',
            { '@CAP1_R020': CAP1.R020, '@CAP1_R010': CAP1.R010 }
        );

        // Validation 05-010
        addWarning(
            CAP1.R040 > CAP1.R030,
            'CAP1_R040_C' + col,
            10,
            '05-010',
            'Cod atenționare: 05-010 - Cap.1: R.40 ≤ R.30 -> [@CAP1_R040] ≤ [@CAP1_R030]',
            { '@CAP1_R040': CAP1.R040, '@CAP1_R030': CAP1.R030 }
        );

        // Validation 05-012
        var raport1 = CAP1.R030 + CAP1.R040;
        if (raport1 > 0) {
            var calcul1 = roundToDecimal((CAP1.R050 * 1000) / raport1, 1);
            addWarning(
                calcul1 > 570 || calcul1 < 450,
                'CAP1_R050_C' + col,
                12,
                '05-012',
                'Cod atenționare: 05-012 - Cap.1: R.50 * 1000 / (R.30 + R.40) ≤ 570 și > 450 pe toate coloanele. -> [@sum]',
                { '@sum': calcul1 }
            );
        }

        // Validation 05-013
        if (CAP1.R030 > 0 && CAP1.R070 === 0) {
            addWarning(
                true,
                'CAP1_R030_C' + col,
                13,
                '05-013',
                'Cod atenționare: 05-013 - Cap.1: Dacă există R.30 ar trebui să fie R.70 și invers.'
            );
        }
        if (CAP1.R070 > 0 && CAP1.R030 === 0) {
            addWarning(
                true,
                'CAP1_R070_C' + col,
                13,
                '05-013',
                'Cod atenționare: 05-013 - Cap.1: Dacă există R.30 ar trebui să fie R.70 și invers.'
            );
        }

        // Validation 05-014
        addError(
            CAP1.R031 > CAP1.R030,
            'CAP1_R031_C' + col,
            14,
            '05-014',
            'Cod eroare: 05-014 - Cap.1: R.31 ≤ R.30 -> [@CAP1_R031] ≤ [@CAP1_R030]',
            { '@CAP1_R031': CAP1.R031, '@CAP1_R030': CAP1.R030 }
        );

        // Validation 05-023
        if ((CAP1.R050 > 0 && CAP1.R030 === 0) || (CAP1.R030 > 0 && CAP1.R050 === 0)) {
            addWarning(
                true,
                CAP1.R050 > 0 ? 'CAP1_R030_C' + col : 'CAP1_R050_C' + col,
                23,
                '05-023',
                'Cod atenționare: 05-023 - Cap.1: Dacă există R.30 ar trebui să fie și R.50 și invers, pentru toate coloanele.'
            );
        }

        // Validation 05-025
        if ((CAP1.R031 > 0 && CAP1.R074 === 0) || (CAP1.R074 > 0 && CAP1.R031 === 0)) {
            addWarning(
                true,
                CAP1.R031 > 0 ? 'CAP1_R074_C' + col : 'CAP1_R031_C' + col,
                25,
                '05-025',
                'Cod atenționare: 05-025 - Cap.1: Dacă există R.31 ar trebui să fie R.74 și invers, pe toate coloanele.'
            );
        }

        // Validation 05-028
        if (col === '1') {
            var CAP1_R010_C1 = getNumericValue(values['CAP1_R010_C1']);
            if (CAP1.R031 > CAP1_R010_C1) {
                addWarning(
                    true,
                    'CAP1_R031_C' + col,
                    28,
                    '05-028',
                    'Cod atenționare: 05-028 - Cap.1: Col.1 R.31 ≤ R.10 -> [@CAP1_R031] ≤ [@CAP1_R010_C1]',
                    { '@CAP1_R031': CAP1.R031, '@CAP1_R010_C1': CAP1_R010_C1 }
                );
            }
        }

        // Validation 05-030
        if ((CAP1.R040 > 0 && CAP1.R073 === 0) || (CAP1.R073 > 0 && CAP1.R040 === 0)) {
            addError(
                true,
                CAP1.R040 > 0 ? 'CAP1_R073_C' + col : 'CAP1_R040_C' + col,
                30,
                '05-030',
                'Cod eroare: 05-030 - Cap.1: Dacă există R.40 ar trebui să fie R.73 și invers, pe toate coloanele.'
            );
        }

        // Validation 05-036
        if (CAP1.R030 > 0) {
            var calcul2 = roundToDecimal(((CAP1.R070 - CAP1.R073) * 1000) / (CAP1.R030 * 3), 1);
            addWarning(
                calcul2 <= 5000 || calcul2 >= 20000,
                'CAP1_R070_C' + col,
                36,
                '05-036',
                'Cod atenționare: 05-036 - Cap.1: ((R.70 - R.73) * 1000 / R.30) / 3 > 5000 și < 20000 pe fiecare coloană. -> [@sum]',
                { '@sum': calcul2 }
            );
        }

        // Validation 05-037
        if (CAP1.R031 > 0) {
            var calcul3 = roundToDecimal((CAP1.R074 * 1000) / (CAP1.R031 * 3), 1);
            addWarning(
                calcul3 <= 8000 || calcul3 >= 18000,
                'CAP1_R074_C' + col,
                37,
                '05-037',
                'Cod atenționare: 05-037 - Cap. 1: (R.74 * 1000 / R.31) / 3 > 8000 și < 18000 pe fiecare coloană. -> [@sum]',
                { '@sum': calcul3 }
            );
        }

        // Validation 05-039
        if (CAP1.R040 > 0) {
            var calcul4 = roundToDecimal((CAP1.R073 * 1000) / (CAP1.R040 * 3), 1);
            addWarning(
                calcul4 <= 5000 || calcul4 >= 20000,
                'CAP1_R073_C' + col,
                39,
                '05-039',
                'Cod atenționare: 05-039 - Cap. 1: (R.73 * 1000 / R.40) / 3 > 5000 și < 20000 pe fiecare coloană. -> [@sum]',
                { '@sum': calcul4 }
            );
        }

        // Validation 05-040
        if (CAP1.R010 > 0 && CAP1.R030 === 0) {
            addError(
                true,
                'CAP1_R030_C' + col,
                40,
                '05-040',
                'Cod eroare: 05-040 - Cap.1: Dacă există R.10 ar trebui să fie R.30, pe toate coloanele.'
            );
        }

        // Validation 05-042
        if (CAP1.R051 > 0 || CAP1.R052 > 0) {
            addError(
                CAP1.R051 <= CAP1.R052,
                'CAP1_R051_C' + col,
                42,
                '05-042',
                'Cod eroare: 05-042 - Cap.1: R.51 > R.52 -> [@CAP1_R051] > [@CAP1_R052]',
                { '@CAP1_R051': CAP1.R051, '@CAP1_R052': CAP1.R052 }
            );
        }

        // Validation 05-043
        if ((CAP1.R040 > 0 && CAP1.R030 === 0 && CAP1.R070 !== CAP1.R073) ||
            ((CAP1.R070 === CAP1.R073) && (CAP1.R040 === 0 || CAP1.R030 > 0) && CAP1.R070 !== 0)) {
            addWarning(
                true,
                'CAP1_R070_C' + col,
                43,
                '05-043',
                'Cod atenționare: 05-043 - Cap.1: Dacă R.40 > 0 și R.30 = 0, atunci R.70 = R.73 și invers, pe fiecare coloană.'
            );
        }

        // Validation 05-044
        var SumF1 = CAP1.R030 - CAP1.R031;
        if (SumF1 !== 0) {
            var calcul5 = roundToDecimal(((CAP1.R070 - CAP1.R074) * 1000) / (SumF1 * 3), 1);
            addWarning(
                calcul5 <= 4000,
                'CAP1_R070_C' + col,
                44,
                '05-044',
                'Cod atenționare: 05-044 - Cap.1: ((R.70 - R.74) * 1000 / (R.30 - R.31)) / 3 > 4000 -> [@sum] > [4000]',
                { '@sum': calcul5 }
            );
        }

        // Validation 05-050
        if (CAP1.R010 === CAP1.R020 && CAP1.R010 !== 0) {
            addWarning(
                true,
                'CAP1_R020_C' + col,
                50,
                '05-050',
                'Cod atenționare: 05-050 - Cap.1: R.10 ≠ R.20, pe fiecare coloană. -> [@CAP1_R010] ≠ [@CAP1_R020]',
                { '@CAP1_R010': CAP1.R010, '@CAP1_R020': CAP1.R020 }
            );
        }

        // Validation 05-051
        var sum_R071_073_074_total = CAP1.R071 + CAP1.R073 + CAP1.R074;
        if (CAP1.R070 !== sum_R071_073_074_total && CAP1.R070 !== 0) {
            addWarning(
                true,
                'CAP1_R070_C' + col,
                51,
                '05-051',
                'Cod atenționare: 05-051 - Cap.1: R.70 ≠ R.71 + R.73 + R.74 -> [@CAP1_R070] ≠ [@sum_R071_073_074]',
                { '@CAP1_R070': CAP1.R070, '@sum_R071_073_074': sum_R071_073_074_total }
            );
        }
    }
}

//-------------------------------------------
