//--------------------------------------

// Define the rounding function
function roundToDecimal(number, decimalPlaces) {
    var factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}

var arr_CAP1_inputs_1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var arr_CAP1_L = ['10', '20', '30', '31', '40', '50', '51', '52', '70', '71', '72', '73', '74'];
var valid_ = 0;
for (var j = 0; j < arr_CAP1_inputs_1.length; j++) {
    for (var l = 0; l < arr_CAP1_L.length; l++) {
        if (!isNaN(parseFloat(values['CAP1_R0' + arr_CAP1_L[l] + '_C' + arr_CAP1_inputs_1[j]]))) {
            valid_ = 1;
        }
    }
}
if (valid_ == 1) {
    var arr_CAP1_inputs_2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    for (var i = 0; i < arr_CAP1_inputs_2.length; i++) {

        // Start 05-021
        var fields_CAP1_CAEM2 = jQuery('#CAP1 thead tr td:nth-child(' + arr_CAP1_inputs_2[i] + ')').find('select').val();
        var CAP1_R010 = 0;
        if (!isNaN(parseFloat(values['CAP1_R010_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R010 = parseFloat(values['CAP1_R010_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R010_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R020 = 0;
        if (!isNaN(parseFloat(values['CAP1_R020_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R020 = parseFloat(values['CAP1_R020_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R020_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R030 = 0;
        if (!isNaN(parseFloat(values['CAP1_R030_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R030 = parseFloat(values['CAP1_R030_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R030_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R031 = 0;
        if (!isNaN(parseFloat(values['CAP1_R031_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R031 = parseFloat(values['CAP1_R031_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R031_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R040 = 0;
        if (!isNaN(parseFloat(values['CAP1_R040_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R040 = parseFloat(values['CAP1_R040_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R040_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R050 = 0;
        if (!isNaN(parseFloat(values['CAP1_R050_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R050 = parseFloat(values['CAP1_R050_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R050_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R051 = 0;
        if (!isNaN(parseFloat(values['CAP1_R051_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R051 = parseFloat(values['CAP1_R051_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R051_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R052 = 0;
        if (!isNaN(parseFloat(values['CAP1_R052_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R052 = parseFloat(values['CAP1_R052_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R052_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R070 = 0;
        if (!isNaN(parseFloat(values['CAP1_R070_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R070 = parseFloat(values['CAP1_R070_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R070_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R071 = 0;
        if (!isNaN(parseFloat(values['CAP1_R071_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R071 = parseFloat(values['CAP1_R071_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R071_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R072 = 0;
        if (!isNaN(parseFloat(values['CAP1_R072_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R072 = parseFloat(values['CAP1_R072_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R072_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R073 = 0;
        if (!isNaN(parseFloat(values['CAP1_R073_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R073 = parseFloat(values['CAP1_R073_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R073_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R074 = 0;
        if (!isNaN(parseFloat(values['CAP1_R074_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R074 = parseFloat(values['CAP1_R074_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R074_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        var CAP1_R120 = 0;
        if (!isNaN(parseFloat(values['CAP1_R120_C' + arr_CAP1_inputs_2[i]]))) {
            CAP1_R120 = parseFloat(values['CAP1_R120_C' + arr_CAP1_inputs_2[i]]);
            if (fields_CAP1_CAEM2 == '') {
                webform.errors.push({
                    'fieldName': 'CAP1_R120_C' + arr_CAP1_inputs_2[i],
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                });
            }
        }
        // End 05-021

        // Start 05-003
        if (CAP1_R070 < CAP1_R071) {
            webform.errors.push({
                'fieldName': 'CAP1_R071_C' + arr_CAP1_inputs_2[i],
                'weight': 3,
                'msg': Drupal.t('Cod eroare: 05-003 - Cap.1: R.71 ≤ R.70 pe toate coloanele. -> [@CAP1_R071] ≤ [@CAP1_R070]', { '@CAP1_R071': CAP1_R071, '@CAP1_R070': CAP1_R070 })
            });
        }
        // End 05-003

        // Start 05-007
        var sum_CAP1_R071_074 = CAP1_R071 + CAP1_R072 + CAP1_R073 + CAP1_R074;
        if (CAP1_R070 < sum_CAP1_R071_074) {
            webform.warnings.push({
                'fieldName': 'CAP1_R070_C' + arr_CAP1_inputs_2[i],
                'weight': 7,
                'msg': Drupal.t('Cod atenționare: 05-007 - Cap.1: Suma R.(71, 72, 73, 74) ≤ R.70 -> [@sum_CAP1_R071_074] ≤ [@CAP1_R070]', { '@sum_CAP1_R071_074': sum_CAP1_R071_074, '@CAP1_R070': CAP1_R070 })
            });
        }
        // End 05-007

        // Start 05-009
        if (CAP1_R020 > CAP1_R010) {
            webform.warnings.push({
                'fieldName': 'CAP1_R020_C' + arr_CAP1_inputs_2[i],
                'weight': 9,
                'msg': Drupal.t('Cod atenționare: 05-009 - Cap.1: R.20 ≤ R.10 -> [@CAP1_R020] ≤ [@CAP1_R010]', { '@CAP1_R020': CAP1_R020, '@CAP1_R010': CAP1_R010 })
            });
        }
        // End 05-009

        // Start 05-010
        if (CAP1_R040 > CAP1_R030) {
            webform.warnings.push({
                'fieldName': 'CAP1_R040_C' + arr_CAP1_inputs_2[i],
                'weight': 10,
                'msg': Drupal.t('Cod atenționare: 05-010 - Cap.1: R.40 ≤ R.30 -> [@CAP1_R040] ≤ [@CAP1_R030]', { '@CAP1_R040': CAP1_R040, '@CAP1_R030': CAP1_R030 })
            });
        }
        // End 05-010

        // Start 05-012
        var raport1 = CAP1_R030 + CAP1_R040; // Sum of R.30 and R.40
        if (raport1 > 0) {
            var calcul1 = (CAP1_R050 * 1000) / raport1; // Calculate the ratio
            calcul1 = roundToDecimal(calcul1, 1); // Round to one decimal place
            if (calcul1 > 570 || calcul1 < 450) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R050_C' + arr_CAP1_inputs_2[i],
                    'weight': 12,
                    'msg': Drupal.t('Cod atenționare: 05-012 - Cap.1: R.50 * 1000 / (R.30 + R.40) ≤ 570 și > 450 pe toate coloanele. -> [@sum]', { '@sum': calcul1 })
                });
            }
        }
        // End 05-012

        // Start 05-013
        if (CAP1_R030 > 0 && CAP1_R070 == 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R030_C' + arr_CAP1_inputs_2[i],
                'weight': 13,
                'msg': Drupal.t('Cod atenționare: 05-013 - Cap.1: Dacă există R.30 ar trebui să fie R.70 și invers.')
            });
        }
        if (CAP1_R070 > 0 && CAP1_R030 == 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R070_C' + arr_CAP1_inputs_2[i],
                'weight': 13,
                'msg': Drupal.t('Cod atenționare: 05-013 - Cap.1: Dacă există R.30 ar trebui să fie R.70 și invers.')
            });
        }
        // End 05-013

        // Start 05-014
        if (CAP1_R031 > CAP1_R030) {
            webform.errors.push({
                'fieldName': 'CAP1_R031_C' + arr_CAP1_inputs_2[i],
                'weight': 14,
                'msg': Drupal.t('Cod eroare: 05-014 - Cap.1: R.31 ≤ R.30 -> [@CAP1_R031] ≤ [@CAP1_R030]', { '@CAP1_R031': CAP1_R031, '@CAP1_R030': CAP1_R030 })
            });
        }
        // End 05-014

        // Start 05-023
        if (CAP1_R050 > 0 && CAP1_R030 == 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R050_C' + arr_CAP1_inputs_2[i],
                'weight': 23,
                'msg': Drupal.t('Cod atenționare: 05-023 - Cap.1: Dacă există R.30 ar trebui să fie și R.50 și invers, pentru toate coloanele.')
            });
        }
        if (CAP1_R030 > 0 && CAP1_R050 == 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R030_C' + arr_CAP1_inputs_2[i],
                'weight': 23,
                'msg': Drupal.t('Cod atenționare: 05-023 - Cap.1: Dacă există R.30 ar trebui să fie și R.50 și invers, pentru toate coloanele.')
            });
        }
        // End 05-023

        // Start 05-025
        if (CAP1_R031 > 0 && CAP1_R074 == 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R031_C' + arr_CAP1_inputs_2[i],
                'weight': 25,
                'msg': Drupal.t('Cod atenționare: 05-025 - Cap.1: Dacă există R.31 ar trebui să fie R.74 și invers, pe toate coloanele.')
            });
        }
        if (CAP1_R074 > 0 && CAP1_R031 == 0) {
            webform.warnings.push({
                'fieldName': 'CAP1_R074_C' + arr_CAP1_inputs_2[i],
                'weight': 25,
                'msg': Drupal.t('Cod atenționare: 05-025 - Cap.1: Dacă există R.31 ar trebui să fie R.74 și invers, pe toate coloanele.')
            });
        }
        // End 05-025

        // Start 05-028
        var CAP1_R010_C1 = 0;
        if (!isNaN(parseFloat(values['CAP1_R010_C1']))) {
            CAP1_R010_C1 = parseFloat(values['CAP1_R010_C1']);
        }
        if (CAP1_R031 > CAP1_R010_C1) {
            webform.warnings.push({
                'fieldName': 'CAP1_R031_C' + arr_CAP1_inputs_2[i],
                'weight': 28,
                'msg': Drupal.t('Cod atenționare: 05-028 - Cap.1: Col.1 R.31 ≤ R.10 -> [@CAP1_R031] ≤ [@CAP1_R010_C1]', { '@CAP1_R031': CAP1_R031, '@CAP1_R010_C1': CAP1_R010_C1 })
            });
        }
        // End 05-028

        // Start 05-030
        if (CAP1_R040 > 0 && CAP1_R073 == 0) {
            webform.errors.push({
                'fieldName': 'CAP1_R040_C' + arr_CAP1_inputs_2[i],
                'weight': 30,
                'msg': Drupal.t('Cod eroare: 05-030 - Cap.1: Dacă există R.40 ar trebui să fie R.73 și invers, pe toate coloanele.')
            });
        }
        if (CAP1_R073 > 0 && CAP1_R040 == 0) {
            webform.errors.push({
                'fieldName': 'CAP1_R073_C' + arr_CAP1_inputs_2[i],
                'weight': 30,
                'msg': Drupal.t('Cod eroare: 05-030 - Cap.1: Dacă există R.40 ar trebui să fie R.73 și invers, pe toate coloanele.')
            });
        }
        // End 05-030

        // Start 05-036
        if (CAP1_R030 > 0) {
            var calcul2 = ((CAP1_R070 - CAP1_R073) * 1000) / (CAP1_R030 * 3);
            calcul2 = roundToDecimal(calcul2, 1);
            if (calcul2 <= 5000 || calcul2 >= 20000) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R070_C' + arr_CAP1_inputs_2[i],
                    'weight': 36,
                    'msg': Drupal.t('Cod atenționare: 05-036 - Cap.1: ((R.70 - R.73) * 1000 / R.30) / 3 > 5000 și < 20000 pe fiecare coloană. -> [@sum]', { '@sum': calcul2 })
                });
            }
        }
        // End 05-036

        // Start 05-037
        if (CAP1_R031 > 0) {
            var calcul3 = (CAP1_R074 * 1000) / (CAP1_R031 * 3);
            calcul3 = roundToDecimal(calcul3, 1);
            if (calcul3 <= 8000 || calcul3 >= 18000) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R074_C' + arr_CAP1_inputs_2[i],
                    'weight': 37,
                    'msg': Drupal.t('Cod atenționare: 05-037 - Cap. 1: (R.74 * 1000 / R.31) / 3 > 8000 și < 18000 pe fiecare coloană. -> [@sum]', { '@sum': calcul3 })
                });
            }
        }
        // End 05-037

        // Start 05-039
        if (CAP1_R040 > 0) {
            var calcul4 = (CAP1_R073 * 1000) / (CAP1_R040 * 3);
            calcul4 = roundToDecimal(calcul4, 1);
            if (calcul4 <= 5000 || calcul4 >= 20000) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R073_C' + arr_CAP1_inputs_2[i],
                    'weight': 39,
                    'msg': Drupal.t('Cod atenționare: 05-039 - Cap. 1: (R.73 * 1000 / R.40) / 3 > 5000 și < 20000 pe fiecare coloană. -> [@sum]', { '@sum': calcul4 })
                });
            }
        }
        // End 05-039

        // Start 05-040
        if (CAP1_R010 > 0 && CAP1_R030 == 0) {
            webform.errors.push({
                'fieldName': 'CAP1_R030_C' + arr_CAP1_inputs_2[i],
                'weight': 40,
                'msg': Drupal.t('Cod eroare: 05-040 - Cap.1: Dacă există R.10 ar trebui să fie R.30, pe toate coloanele.')
            });
        }
        // End 05-040

        // Start 05-042
        if (!isNaN(parseFloat(values['CAP1_R051_C' + arr_CAP1_inputs_2[i]])) || !isNaN(parseFloat(values['CAP1_R052_C' + arr_CAP1_inputs_2[i]]))) {
            if (CAP1_R051 <= CAP1_R052 && (CAP1_R051 > 0 || CAP1_R052 > 0)) {
                webform.errors.push({
                    'fieldName': 'CAP1_R051_C' + arr_CAP1_inputs_2[i],
                    'weight': 42,
                    'msg': Drupal.t('Cod eroare: 05-042 - Cap.1: R.51 > R.52 -> [@CAP1_R051] > [@CAP1_R052]', { '@CAP1_R051': CAP1_R051, '@CAP1_R052': CAP1_R052 })
                });
            }
        }
        // End 05-042

        // Start 05-043
        if ((CAP1_R040 > 0 && CAP1_R030 === 0) && CAP1_R070 !== CAP1_R073) {
            webform.warnings.push({
                'fieldName': 'CAP1_R070_C' + arr_CAP1_inputs_2[i],
                'weight': 43,
                'msg': Drupal.t('Cod atenționare: 05-043 - Cap.1: Dacă R.40 > 0 și R.30 = 0, atunci R.70 = R.73 și invers, pe fiecare coloană.')
            });
        }
        if ((CAP1_R070 === CAP1_R073 && CAP1_R040 === 0) || (CAP1_R070 === CAP1_R073 && CAP1_R030 > 0)) {
            if (CAP1_R070 !== 0) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R070_C' + arr_CAP1_inputs_2[i],
                    'weight': 43,
                    'msg': Drupal.t('Cod atenționare: 05-043 - Cap.1: Dacă R.40 > 0 și R.30 = 0, atunci R.70 = R.73 și invers, pe fiecare coloană.')
                });
            }
        }
        // End 05-043

        // Start 05-044
        var SumF1 = CAP1_R030 - CAP1_R031;
        if (SumF1 != 0) {
            var calcul5 = ((CAP1_R070 - CAP1_R074) * 1000) / (SumF1 * 3);
            calcul5 = roundToDecimal(calcul5, 1);
            if (calcul5 <= 4000) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R070_C' + arr_CAP1_inputs_2[i],
                    'weight': 44,
                    'msg': Drupal.t('Cod atenționare: 05-044 - Cap.1: ((R.70 - R.74) * 1000 / (R.30 - R.31)) / 3 > 4000 -> [@sum] > [4000]', { '@sum': calcul5 })
                });
            }
        }
        // End 05-044

        // Start 05-050
        if ((CAP1_R010 == CAP1_R020) && (CAP1_R010 != 0) && (CAP1_R020 != 0)) {
            webform.warnings.push({
                'fieldName': 'CAP1_R020_C' + arr_CAP1_inputs_2[i],
                'weight': 50,
                'msg': Drupal.t('Cod atenționare: 05-050 - Cap.1: R.10 ≠ R.20, pe fiecare coloană. -> [@CAP1_R010] ≠ [@CAP1_R020]', { '@CAP1_R010': CAP1_R010, '@CAP1_R020': CAP1_R020 })
            });
        }
        // End 05-050

        // Start 05-051
        var sum_CAP1_R071_073_074 = CAP1_R071 + CAP1_R073 + CAP1_R074;
        if ((CAP1_R070 != sum_CAP1_R071_073_074) && (CAP1_R070 != 0) && (sum_CAP1_R071_073_074 != 0)) {
            webform.warnings.push({
                'fieldName': 'CAP1_R070_C' + arr_CAP1_inputs_2[i],
                'weight': 51,
                'msg': Drupal.t('Cod atenționare: 05-051 - Cap.1: R.70 ≠ R.71 + R.73 + R.74 -> [@CAP1_R070] ≠ [@sum_CAP1_R071_073_074]', { '@CAP1_R070': CAP1_R070, '@sum_CAP1_R071_073_074': sum_CAP1_R071_073_074 })
            });
        }
        // End 05-051
    }
}

//-------------------------------------------
