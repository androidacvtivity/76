// Helper function to process CAP fields with validation codes
function processCAPField(fieldNamePrefix, index, fields_CAP1_CAEM2) {
    var fieldValue = parseFloat(values[fieldNamePrefix + '_C' + index]);

    if (!isNaN(fieldValue)) {
        // Ensure the CAEM field is not empty or contains only spaces
        if (fields_CAP1_CAEM2.trim() === '') {
            webform.errors.push({
                'fieldName': fieldNamePrefix + '_C' + index,
                'weight': 21,
                'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
            });
        }
        return fieldValue;
    }
    return 0;  // Return a default value if fieldValue is NaN
}

// Start 05-00
var arr_CAP1_inputs_1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var arr_CAP1_L = ['10', '20', '30', '31', '40', '50', '51', '52', '70', '71', '72', '73', '74'];
var valid_ = 0;

// Validate fields and check for valid values
arr_CAP1_inputs_1.forEach(function (inputIndex) {
    arr_CAP1_L.forEach(function (l) {
        if (!isNaN(parseFloat(values['CAP1_R0' + l + '_C' + inputIndex]))) {
            valid_ = 1;
        }
    });
});

if (valid_ == 1) {
    var arr_CAP1_inputs_2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

    arr_CAP1_inputs_2.forEach(function (inputIndex) {
        var fields_CAP1_CAEM2 = jQuery('#CAP1 thead tr td:nth-child(' + inputIndex + ')').find('select').val().trim(); //Uncaught TypeError: jQuery(...).find(...).val() is undefined

        // Process and validate CAP fields
        var CAP1_R010 = processCAPField('CAP1_R010', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R020 = processCAPField('CAP1_R020', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R030 = processCAPField('CAP1_R030', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R031 = processCAPField('CAP1_R031', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R040 = processCAPField('CAP1_R040', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R050 = processCAPField('CAP1_R050', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R051 = processCAPField('CAP1_R051', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R052 = processCAPField('CAP1_R052', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R070 = processCAPField('CAP1_R070', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R071 = processCAPField('CAP1_R071', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R072 = processCAPField('CAP1_R072', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R073 = processCAPField('CAP1_R073', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R074 = processCAPField('CAP1_R074', inputIndex, fields_CAP1_CAEM2);
        var CAP1_R120 = processCAPField('CAP1_R120', inputIndex, fields_CAP1_CAEM2);

        // 05-003 Validation
        if (CAP1_R070 < CAP1_R071) {
            webform.errors.push({
                'fieldName': 'CAP1_R071_C' + inputIndex,
                'weight': 3,
                'msg': Drupal.t('Cod eroare: 05-003 - Cap.1: R.71 ≤ R.70 pe toate coloanele.')
            });
        }

        // 05-007 Validation
        var sum_CAP1_R071_074 = CAP1_R071 + CAP1_R072 + CAP1_R073 + CAP1_R074;
        if (CAP1_R070 < sum_CAP1_R071_074) {
            webform.warnings.push({
                'fieldName': 'CAP1_R070_C' + inputIndex,
                'weight': 7,
                'msg': Drupal.t('Cod atenționare: 05-007 - Cap.1: Suma R.(71, 72, 73, 74) ≤ R.70.')
            });
        }

        // 05-009 Validation
        if (CAP1_R020 > CAP1_R010) {
            webform.warnings.push({
                'fieldName': 'CAP1_R020_C' + inputIndex,
                'weight': 9,
                'msg': Drupal.t('Cod atenționare: 05-009 - Cap.1: R.20 ≤ R.10.')
            });
        }

        // 05-010 Validation
        if (CAP1_R040 > CAP1_R030) {
            webform.warnings.push({
                'fieldName': 'CAP1_R040_C' + inputIndex,
                'weight': 10,
                'msg': Drupal.t('Cod atenționare: 05-010 - Cap.1: R.40 ≤ R.30.')
            });
        }

        // 05-012 Validation
        var raport1 = CAP1_R030 + CAP1_R040;
        if (raport1 > 0) {
            var calcul1 = (CAP1_R050 * 1000) / raport1;
            calcul1 = roundToDecimal(calcul1, 1);
            if (calcul1 > 570 || calcul1 < 450) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R050_C' + inputIndex,
                    'weight': 12,
                    'msg': Drupal.t('Cod atenționare: 05-012 - Cap.1: R.50 * 1000 / (R.30 + R.40) ≤ 570 și > 450.')
                });
            }
        }

        // 05-013 Validation
        if (CAP1_R030 > 0 && CAP1_R070 === 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R030_C' + inputIndex,
                'weight': 13,
                'msg': Drupal.t('Cod atenționare: 05-013 - Cap.1: Dacă există R.30 ar trebui să fie R.70 și invers.')
            });
        }
        if (CAP1_R070 > 0 && CAP1_R030 === 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R070_C' + inputIndex,
                'weight': 13,
                'msg': Drupal.t('Cod atenționare: 05-013 - Cap.1: Dacă există R.30 ar trebui să fie R.70 și invers.')
            });
        }

        // 05-014 Validation
        if (CAP1_R031 > CAP1_R030) {
            webform.errors.push({
                'fieldName': 'CAP1_R031_C' + inputIndex,
                'weight': 14,
                'msg': Drupal.t('Cod eroare: 05-014 - Cap.1: R.31 ≤ R.30.')
            });
        }

        // 05-023 Validation
        if (CAP1_R050 > 0 && CAP1_R030 === 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R030_C' + inputIndex,
                'weight': 23,
                'msg': Drupal.t('Cod atenționare: 05-023 - Cap.1: Dacă există R.30 ar trebui să fie și R.50 și invers.')
            });
        }
        if (CAP1_R030 > 0 && CAP1_R050 === 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R030_C' + inputIndex,
                'weight': 23,
                'msg': Drupal.t('Cod atenționare: 05-023 - Cap.1: Dacă există R.30 ar trebui să fie și R.50 și invers.')
            });
        }

        // 05-025 Validation
        if (CAP1_R031 > 0 && CAP1_R074 === 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R074_C' + inputIndex,
                'weight': 25,
                'msg': Drupal.t('Cod atenționare: 05-025 - Cap.1: Dacă există R.31 ar trebui să fie R.74 și invers.')
            });
        }
        if (CAP1_R074 > 0 && CAP1_R031 === 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R074_C' + inputIndex,
                'weight': 25,
                'msg': Drupal.t('Cod atenționare: 05-025 - Cap.1: Dacă există R.31 ar trebui să fie R.74 și invers.')
            });
        }

        // 05-030 Validation
        if (CAP1_R040 > 0 && CAP1_R073 === 0) {
            webform.errors.push({
                'fieldName': 'CAP1_R073_C' + inputIndex,
                'weight': 30,
                'msg': Drupal.t('Cod eroare: 05-030 - Cap.1: Dacă există R.40 ar trebui să fie R.73 și invers.')
            });
        }
        if (CAP1_R073 > 0 && CAP1_R040 === 0) {
            webform.errors.push({
                'fieldName': 'CAP1_R040_C' + inputIndex,
                'weight': 30,
                'msg': Drupal.t('Cod eroare: 05-030 - Cap.1: Dacă există R.40 ar trebui să fie R.73 și invers.')
            });
        }

        // 05-036 Validation
        if (CAP1_R030 > 0) {
            var calcul2 = ((CAP1_R070 - CAP1_R073) * 1000 / (CAP1_R030)) / 3;
            calcul2 = roundToDecimal(calcul2, 1);
            if ((calcul2 < 5000) || (calcul2 > 20000)) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R070_C' + inputIndex,
                    'weight': 36,
                    'msg': Drupal.t('Cod atenționare: 05-036 - Cap.1: (R.70 - R.73 * 1000 / R.30) / 3 > 5000 și < 20000.')
                });
            }
        }

        // 05-037 Validation
        if (CAP1_R031 > 0) {
            var calcul3 = ((CAP1_R074 * 1000) / (CAP1_R031)) / 3;
            calcul3 = roundToDecimal(calcul3, 1);
            if ((calcul3 < 8000) || (calcul3 > 18000)) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R074_C' + inputIndex,
                    'weight': 37,
                    'msg': Drupal.t('Cod atenționare: 05-037 - Cap. 1: (R.74 * 1000 / R.31) / 3 > 8000 și < 18000.')
                });
            }
        }

        // 05-039 Validation
        if (CAP1_R040 > 0) {
            var calcul4 = ((CAP1_R073 * 1000) / (CAP1_R040)) / 3;
            calcul4 = roundToDecimal(calcul4, 1);
            if ((calcul4 < 5000) || (calcul4 > 20000)) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R073_C' + inputIndex,
                    'weight': 39,
                    'msg': Drupal.t('Cod atenționare: 05-039 - Cap. 1: (R.73 * 1000 / R.40) / 3 > 5000 și < 20000.')
                });
            }
        }

        // 05-040 Validation
        if (CAP1_R010 > 0 && CAP1_R030 === 0) {
            webform.errors.push({
                'fieldName': 'CAP1_R030_C' + inputIndex,
                'weight': 40,
                'msg': Drupal.t('Cod eroare: 05-040 - Cap.1: Dacă există R.10 ar trebui să fie R.30.')
            });
        }

        // 05-042 Validation
        if (!isNaN(CAP1_R050) || !isNaN(CAP1_R051)) {
            if (CAP1_R051 <= CAP1_R052 && (CAP1_R051 > 0 || CAP1_R052 > 0)) {
                webform.errors.push({
                    'fieldName': 'CAP1_R051_C' + inputIndex,
                    'weight': 42,
                    'msg': Drupal.t('Cod eroare: 05-042 - Cap.1: R.51 > R.52.')
                });
            }
        }

        // 05-043 Validation
        if ((CAP1_R040 > 0 && CAP1_R030 === 0) && CAP1_R070 !== CAP1_R073) {
            webform.warnings.push({
                'fieldName': 'CAP1_R070_C' + inputIndex,
                'weight': 43,
                'msg': Drupal.t('Cod atenționare: 05-043 - Cap.1: Dacă R.40 > 0 și R.30 = 0, atunci R.70 = R.73.')
            });
        }
        if ((CAP1_R070 === CAP1_R073 && CAP1_R040 === 0) || (CAP1_R070 === CAP1_R073 && CAP1_R030 > 0)) {
            if (CAP1_R070 !== 0) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R070_C' + inputIndex,
                    'weight': 43,
                    'msg': Drupal.t('Cod atenționare: 05-043 - Cap.1: Dacă R.40 > 0 și R.30 = 0, atunci R.70 = R.73.')
                });
            }
        }

        // 05-044 Validation
        var SumF1 = CAP1_R030 - CAP1_R031;
        if (SumF1 != 0) {
            var calcul5 = ((CAP1_R070 - CAP1_R074) * 1000 / (CAP1_R030 - CAP1_R031)) / 3;
            calcul5 = roundToDecimal(calcul5, 1);
            if (calcul5 <= 4000) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R070_C' + inputIndex,
                    'weight': 44,
                    'msg': Drupal.t('Cod atenționare: 05-044 - Cap.1: ((R.70 - R.74) * 1000 / (R.30 - R.31)) / 3 > 4000.')
                });
            }
        }

        // 05-050 Validation
        if ((CAP1_R010 === CAP1_R020) && (CAP1_R010 != 0) && (CAP1_R020 != 0)) {
            webform.warnings.push({
                'fieldName': 'CAP1_R020_C' + inputIndex,
                'weight': 50,
                'msg': Drupal.t('Cod atenționare: 05-050 - Cap.1: R.10 ≠ R.20.')
            });
        }

        // 05-051 Validation
        var sum_CAP1_R071_073_074 = CAP1_R071 + CAP1_R073 + CAP1_R074;
        if ((CAP1_R070 === sum_CAP1_R071_073_074) && (CAP1_R070 != 0) && (sum_CAP1_R071_073_074 != 0)) {
            webform.warnings.push({
                'fieldName': 'CAP1_R070_C' + inputIndex,
                'weight': 51,
                'msg': Drupal.t('Cod atenționare: 05-051 - Cap.1: R.70 ≠ R.71 + R.73 + R.74.')
            });
        }
    });
}
