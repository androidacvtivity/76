//Analyze this code for such errors
webform.validators.m1 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;

    //    
    function roundToDecimal(value, decimals) {
        var factor = Math.pow(10, decimals);
        return Math.round(value * factor) / factor;
    }
    //   
    var cap2Errors = validateCap2SumAndTrim(values);
    if (cap2Errors && cap2Errors.length > 0) {
        for (var i = 0; i < cap2Errors.length; i++) {
            webform.errors.push(cap2Errors[i]);
        }
    }
    //--------------------------------------------

    // Apelăm funcția de validare pentru CAEM2
    var caem2Errors = validateCAEM2(values);
    if (caem2Errors && caem2Errors.length > 0) {
        for (var i = 0; i < caem2Errors.length; i++) {
            webform.errors.push(caem2Errors[i]);

        }
    }


    // Start 05-00(3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 21, 22, 23, 25, 28, 30, 36, 37, 39, 40, 42, 43, 44, 50, 51)
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

            // var raport1 = CAP1_R030 + CAP1_R040;
            // if (raport1 > 0) {
            //     var calcul1 = (CAP1_R050 * 1000) / raport1;
            //     calcul1 = parseFloat(calcul1).toFixed(1);
            //     if (calcul1 > 570 || calcul1 < 450) {
            //         webform.warnings.push({
            //             'fieldName': 'CAP1_R050_C' + arr_CAP1_inputs_2[i],
            //             'weight': 12,
            //             'msg': Drupal.t('Cod atenționare: 05-012 - Cap.1: R.50 * 1000 / (R.30 + R.40) ≤ 570 și > 450 pe toate coloanele. -> [@sum]', { '@sum': calcul1 })
            //         });
            //     }
            // }

            var raport1 = CAP1_R030 + CAP1_R040; // This is a number with one digit after the decimal point
            if (raport1 > 0) {
                var calcul1 = (CAP1_R050 * 1000) / raport1; // calcul1 is a number
                //calcul1 = Math.round(calcul1 * 10) / 10; // Now calcul1 is rounded to one decimal place as a number
                calcul1 = roundToDecimal(calcul1, 1);
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
                    'fieldName': 'CAP1_R030_C' + arr_CAP1_inputs_2[i],
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
                    'fieldName': 'CAP1_R074_C' + arr_CAP1_inputs_2[i],
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
            //End 05-025

            // Start 05-028
            var CAP1_R010_C1 = 0;
            if (!isNaN(parseFloat(values['CAP1_R010_C1']))) {
                CAP1_R010_C1 = parseFloat(values['CAP1_R010_C1']);
            }
            if (CAP1_R031 > CAP1_R010_C1) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R030_C1',
                    'weight': 28,
                    'msg': Drupal.t('Cod atenționare: 05-028 - Cap.1: Col.1 R.30 ≤ R.10 -> [@CAP1_R031] ≤ [@CAP1_R010_C1]', { '@CAP1_R031': CAP1_R031, '@CAP1_R010_C1': CAP1_R010_C1 })
                });
            }
            //End 05-028

            // Start 05-030
            if (CAP1_R040 > 0 && CAP1_R073 == 0) {
                webform.errors.push({
                    'fieldName': 'CAP1_R073_C' + arr_CAP1_inputs_2[i],
                    'weight': 30,
                    'msg': Drupal.t('Cod eroare: 05-030 - Cap.1: Dacă există R.40 ar trebui să fie R.73 și invers, pe toate coloanele.')
                });
            }
            if (CAP1_R073 > 0 && CAP1_R040 == 0) {
                webform.errors.push({
                    'fieldName': 'CAP1_R040_C' + arr_CAP1_inputs_2[i],
                    'weight': 30,
                    'msg': Drupal.t('Cod eroare: 05-030 - Cap.1: Dacă există R.40 ar trebui să fie R.73 și invers, pe toate coloanele.')
                });
            }
            // End 05-030

            // Start 05-036
            if (CAP1_R030 > 0) {
                var calcul2 = ((CAP1_R070 - CAP1_R073) * 1000 / (CAP1_R030)) / 3;
                calcul2 = parseFloat(calcul2).toFixed(1);
                if ((calcul2 < 5000) || (calcul2 > 20000)) {
                    webform.warnings.push({
                        'fieldName': 'CAP1_R070_C' + arr_CAP1_inputs_2[i],
                        'weight': 36,
                        'msg': Drupal.t('Cod atenționare: 05-036 - Cap.1: (R.70 - R.73 * 1000 / R.30) / 3 > 5000 și < 20000 pe fiecare coloană. -> [@sum]', { '@sum': calcul2 })
                    });
                }
            }
            // End 05-036

            // Start 05-037
            if (CAP1_R031 > 0) {
                var calcul3 = ((CAP1_R074 * 1000) / (CAP1_R031)) / 3;
                calcul3 = parseFloat(calcul3).toFixed(1);
                if ((calcul3 < 8000) || (calcul3 > 18000)) {
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
                var calcul4 = ((CAP1_R073 * 1000) / (CAP1_R040)) / 3;
                calcul4 = parseFloat(calcul4).toFixed(1);
                if ((calcul4 < 5000) || (calcul4 > 20000)) {
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
            if (!isNaN(parseFloat(values['CAP1_R050_C' + arr_CAP1_inputs_2[i]])) || !isNaN(parseFloat(values['CAP1_R051_C' + arr_CAP1_inputs_2[i]]))) {
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
                var calcul5 = ((CAP1_R070 - CAP1_R074) * 1000 / (CAP1_R030 - CAP1_R031)) / 3;
                calcul5 = parseFloat(calcul5).toFixed(1);
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
            if ((CAP1_R070 == sum_CAP1_R071_073_074) && (CAP1_R070 != 0) && (sum_CAP1_R071_073_074 != 0)) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R070_C' + arr_CAP1_inputs_2[i],
                    'weight': 51,
                    'msg': Drupal.t('Cod atenționare: 05-051 - Cap.1: R.70 ≠ R.71 + R.73 + R.74 -> [@CAP1_R070] ≠ [@sum_CAP1_R071_073_074]', { '@CAP1_R070': CAP1_R070, '@sum_CAP1_R071_073_074': sum_CAP1_R071_073_074 })
                });
            }
            // End 05-051
        }
    }


    // Start 05-015 \ 05-024
    for (var k = 2; k < 13; k++) {
        var fields_CAP1_CAEM1 = jQuery('#CAP1 thead tr td:nth-child(' + k + ')').find('select').val();
        var select_normal_caem = function () {
            if (
                (fields_CAP1_CAEM1.substring(0, 3) == 'Q86') ||
                (fields_CAP1_CAEM1.substring(0, 3) == 'Q87') ||
                (fields_CAP1_CAEM1.substring(0, 5) == 'P8510') ||
                (fields_CAP1_CAEM1.substring(0, 5) == 'P8520') ||
                (fields_CAP1_CAEM1.substring(0, 5) == 'P8531') ||
                (fields_CAP1_CAEM1.substring(0, 5) == 'P8532') ||
                (fields_CAP1_CAEM1.substring(0, 5) == 'P8541') ||
                (fields_CAP1_CAEM1.substring(0, 5) == 'P8542') ||
                (fields_CAP1_CAEM1.substring(0, 5) == 'P8551') ||
                (fields_CAP1_CAEM1.substring(0, 5) == 'P8552')
            ) {
                return true;
            } else {
                return false;
            }
        }();

        // Start 05-015
        if ((fields_CAP1_CAEM1 !== '' && k > 2) || (fields_CAP1_CAEM1 !== '' && k == 2)) {
            if (values['CAP1_R031_C' + k] == '' && select_normal_caem) {
                warnings_push_r31c_015_secondary(k);
            } else if (values['CAP1_R031_C' + k] != '') {
                field_r31_full_error_015(k);
            }
            if (values['CAP1_R074_C' + k] == '' && select_normal_caem) {
                warnings_push_r74c_015_secondary(k);
            } else if (values['CAP1_R074_C' + k] != '') {
                field_r74_full_error_015(k);
            }
        }
        function field_r31_full_error_015(k) {
            if ((fields_CAP1_CAEM1.substring(0, 4) == 'P856') || (fields_CAP1_CAEM1.substring(0, 5) == 'P8553') || (fields_CAP1_CAEM1.substring(0, 5) == 'P8559')) {
                warnings_push_r31c_015_secondary(k);
            } else if (select_normal_caem) {

            } else {
                warnings_push_r31c_015_secondary(k);
            }
        }
        function field_r74_full_error_015(k) {
            if ((fields_CAP1_CAEM1.substring(0, 4) == 'P856') || (fields_CAP1_CAEM1.substring(0, 5) == 'P8553') || (fields_CAP1_CAEM1.substring(0, 5) == 'P8559')) {
                warnings_push_r74c_015_secondary(k);
            } else if (select_normal_caem) {

            } else {
                warnings_push_r74c_015_secondary(k);
            }
        }
        function warnings_push_r31c_015_secondary(k) {
            webform.warnings.push({
                'fieldName': 'CAP1_R031_C' + k,
                'weight': 15,
                'msg': Drupal.t('Cod atenționare: 05-015 - Cap.1: R.31 se introduce, dacă Activitatea CAEM = {Q86,Q87,P85}, excepție  P856, P8553 și P8559, Col.2-12')
            });
        }
        function warnings_push_r74c_015_secondary(k) {
            webform.warnings.push({
                'fieldName': 'CAP1_R074_C' + k,
                'weight': 15,
                'msg': Drupal.t('Cod atenționare: 05-015 - Cap.1: R.74 se introduce, dacă Activitatea CAEM = {Q86,Q87,P85}, excepție  P856, P8553 și P8559, Col.2-12')
            });
        }
        // End 05-015


    }
    // End 05-015 \ 05-024
    // //Acum este deselectat dar la validare se declanseaza 05-031 
    // // Start 05-031
    // for (var h = 2; h < 13; h++) {
    //     var fields_CAP1_CAEM3 = jQuery('#CAP1 thead tr td:nth-child(' + h + ')').find('select').val();
    //     for (var m = 2; m < 13; m++) {
    //         if (h != m) {
    //             var fields_CAP1_CAEM4 = jQuery('#CAP1 thead tr td:nth-child(' + m + ')').find('select').val();
    //             if (fields_CAP1_CAEM4 == fields_CAP1_CAEM3 && fields_CAP1_CAEM4 !== '') {
    //                 webform.errors.push({
    //                     'fieldName': 'CAP1_CAEM_C' + m,
    //                     'weight': 31,
    //                     'msg': Drupal.t('Cod eroare: 05-031 - Cod CAEM nu trebuie să se repete.')
    //                 });
    //             }
    //         }
    //     }
    //     var fields_CAP2_CAEM2 = jQuery('#CAP2 thead tr td:nth-child(' + h + ')').find('select').val();
    //     for (var m = 2; m < 13; m++) {
    //         if (h != m) {
    //             var fields_CAP2_CAEM3 = jQuery('#CAP2 thead tr td:nth-child(' + m + ')').find('select').val();
    //             if (fields_CAP2_CAEM3 == fields_CAP2_CAEM2 && fields_CAP2_CAEM3 !== '') {
    //                 webform.errors.push({
    //                     'fieldName': 'CAP2_CAEM_C' + m,
    //                     'weight': 31,
    //                     'msg': Drupal.t('Cod eroare: 05-031 - Cod CAEM nu trebuie să se repete.')
    //                 });
    //             }
    //         }
    //     }
    // }


    // Start 05-031 - Validarea codurilor CAEM pentru duplicate
    var trimValue = jQuery('select[name="TRIM"]').val();  // Obținem valoarea curentă a TRIM

    // Începem validarea pentru CAP1, care se verifică în orice TRIM
    for (var h = 2; h < 13; h++) {
        var fields_CAP1_CAEM3 = jQuery('#CAP1 thead tr td:nth-child(' + h + ')').find('select').val();

        // Verificăm dacă valoarea nu este goală înainte de comparare
        if (fields_CAP1_CAEM3 !== '') {
            for (var m = 2; m < 13; m++) {
                if (h != m) {
                    var fields_CAP1_CAEM4 = jQuery('#CAP1 thead tr td:nth-child(' + m + ')').find('select').val();

                    // Validăm doar dacă ambele valori nu sunt goale și sunt egale
                    if (fields_CAP1_CAEM4 == fields_CAP1_CAEM3 && fields_CAP1_CAEM4 !== '') {
                        webform.errors.push({
                            'fieldName': 'CAP1_CAEM_C' + m,
                            'weight': 31,
                            'msg': Drupal.t('Cod eroare: 05-031 - Cod CAEM nu trebuie să se repete.')
                        });
                    }
                }
            }
        }
    }

    // Dacă TRIM este 3, verificăm și capitolul CAP2
    if (trimValue == 3) {
        for (var h = 2; h < 13; h++) {
            var fields_CAP2_CAEM2 = jQuery('#CAP2 thead tr td:nth-child(' + h + ')').find('select').val();

            // Verificăm dacă valoarea nu este goală înainte de comparare
            if (fields_CAP2_CAEM2 !== '') {
                for (var m = 2; m < 13; m++) {
                    if (h != m) {
                        var fields_CAP2_CAEM3 = jQuery('#CAP2 thead tr td:nth-child(' + m + ')').find('select').val();

                        // Validăm doar dacă ambele valori nu sunt goale și sunt egale
                        if (fields_CAP2_CAEM3 == fields_CAP2_CAEM2 && fields_CAP2_CAEM3 !== '') {
                            webform.errors.push({
                                'fieldName': 'CAP2_CAEM_C' + m,
                                'weight': 31,
                                'msg': Drupal.t('Cod eroare: 05-031 - Cod CAEM nu trebuie să se repete.')
                            });
                        }
                    }
                }
            }
        }
    }
    // End 05-031




    var TRIM = 0;
    if (!isNaN(Number(values['TRIM']))) {
        TRIM = Number(values['TRIM']);
    }
    if (TRIM == 3) {








        // Start Cap.2
        // Start 05-001
        for (var i = 1; i <= 9; i++) {
            if (!isNaN(parseFloat(values["CAP2_R0" + (i) + "0_C1"]))) {
                var R010_90_C1 = parseFloat(values["CAP2_R0" + (i) + "0_C1"]);
            }
            let sum_R010_90_C2_12 = 0;
            for (let s = 2; s <= 12; s++) {
                sum_R010_90_C2_12 += parseFloat(values["CAP2_R0" + (i) + "0_C" + (s)]);
            }
            sum_R010_90_C2_12 = parseFloat(sum_R010_90_C2_12).toFixed(1);
            if ((R010_90_C1 < (sum_R010_90_C2_12)) || (R010_90_C1 > (sum_R010_90_C2_12))) {
                webform.errors.push({
                    'fieldName': 'CAP2_R0' + (i) + '0_C1',
                    'weight': 1,
                    'msg': Drupal.t('Cod eroare: 05-001 - Col.1 = Suma Col.2-12 pe toate rândurile (Cap.1-2), excepție R.120 Cap.1 -> [@R010_90_C1] = [@sum_R010_90_C2_12]', { '@R010_90_C1': R010_90_C1, '@sum_R010_90_C2_12': sum_R010_90_C2_12 })
                });
            }
        }
        for (var i = 10; i <= 16; i++) {
            if (!isNaN(parseFloat(values["CAP2_R" + (i) + "0_C1"]))) {
                var R100_160_C1 = parseFloat(values["CAP2_R" + (i) + "0_C1"]);
            }
            let sum_R100_160_C2_12 = 0;
            for (let s = 2; s <= 12; s++) {
                sum_R100_160_C2_12 += parseFloat(values["CAP2_R" + (i) + "0_C" + (s)]);
            }
            sum_R100_160_C2_12 = parseFloat(sum_R100_160_C2_12).toFixed(1);
            if ((R100_160_C1 < (sum_R100_160_C2_12)) || (R100_160_C1 > (sum_R100_160_C2_12))) {
                webform.errors.push({
                    'fieldName': 'CAP2_R' + (i) + '0_C1',
                    'weight': 1,
                    'msg': Drupal.t('Cod eroare: 05-001 - Col.1 = Suma Col.2-12 pe toate rândurile (Cap.1-2), excepție R.120 Cap.1 -> [@R100_160_C1] = [@sum_R100_160_C2_12]', { '@R100_160_C1': R100_160_C1, '@sum_R100_160_C2_12': sum_R100_160_C2_12 })
                });
            }
        }
        // End 05-001

        // Start 05-021 \ 07-00(7, 9, 16, 18)
        var arr_CAP2_inputs_1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        var arr_CAP2_L = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110', '120'];
        var valid_ = 0;
        for (var j = 0; j < arr_CAP2_inputs_1.length; j++) {
            for (var l = 0; l < arr_CAP2_L.length; l++) {
                if (!isNaN(parseFloat(values['CAP2_R0' + arr_CAP2_L[l] + '_C' + arr_CAP2_inputs_1[j]]))) {
                    valid_ = 1;
                } else if (!isNaN(parseFloat(values['CAP2_R' + arr_CAP2_L[l] + '_C' + arr_CAP2_inputs_1[j]]))) {
                    valid_ = 1;
                }
            }
        }
        if (valid_ == 1) {
            var arr_CAP2_inputs_2 = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
            for (var i = 0; i < arr_CAP2_inputs_2.length; i++) {

                // Start 05-021
                var fields_CAP2_CAEM1 = jQuery('#CAP2 thead tr td:nth-child(' + arr_CAP2_inputs_2[i] + ')').find('select').val();
                var CAP2_R010 = 0;
                if (!isNaN(parseFloat(values['CAP2_R010_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R010 = parseFloat(values['CAP2_R010_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R010_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R020 = 0;
                if (!isNaN(parseFloat(values['CAP2_R020_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R020 = parseFloat(values['CAP2_R020_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R020_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R030 = 0;
                if (!isNaN(parseFloat(values['CAP2_R030_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R030 = parseFloat(values['CAP2_R030_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R030_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R040 = 0;
                if (!isNaN(parseFloat(values['CAP2_R040_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R040 = parseFloat(values['CAP2_R040_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R040_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R050 = 0;
                if (!isNaN(parseFloat(values['CAP2_R050_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R050 = parseFloat(values['CAP2_R050_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R050_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R060 = 0;
                if (!isNaN(parseFloat(values['CAP2_R060_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R060 = parseFloat(values['CAP2_R060_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R060_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R070 = 0;
                if (!isNaN(parseFloat(values['CAP2_R070_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R070 = parseFloat(values['CAP2_R070_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R070_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R080 = 0;
                if (!isNaN(parseFloat(values['CAP2_R080_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R080 = parseFloat(values['CAP2_R080_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R080_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R090 = 0;
                if (!isNaN(parseFloat(values['CAP2_R090_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R090 = parseFloat(values['CAP2_R090_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R090_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R100 = 0;
                if (!isNaN(parseFloat(values['CAP2_R100_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R100 = parseFloat(values['CAP2_R100_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R100_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R110 = 0;
                if (!isNaN(parseFloat(values['CAP2_R110_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R110 = parseFloat(values['CAP2_R110_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R110_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R120 = 0;
                if (!isNaN(parseFloat(values['CAP2_R120_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R120 = parseFloat(values['CAP2_R120_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R120_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                var CAP2_R160 = 0;
                if (!isNaN(parseFloat(values['CAP2_R160_C' + arr_CAP2_inputs_2[i]]))) {
                    CAP2_R160 = parseFloat(values['CAP2_R160_C' + arr_CAP2_inputs_2[i]]);
                    if (fields_CAP2_CAEM1 == '') {
                        webform.errors.push({
                            'fieldName': 'CAP2_R160_C' + arr_CAP2_inputs_2[i],
                            'weight': 21,
                            'msg': Drupal.t('Cod eroare: 05-021 - Cap.2: Pentru orice coloană cu date există cod CAEM, Cap.1-2')
                        });
                    }
                }
                // End 05-021

                // Start 07-007
                var sum_CAP_R020_120 = CAP2_R020 + CAP2_R030 + CAP2_R040 + CAP2_R050 + CAP2_R060 + CAP2_R070 + CAP2_R080 + CAP2_R090 + CAP2_R100 + CAP2_R110 + CAP2_R120;
                if ((CAP2_R010 < (sum_CAP_R020_120)) || (CAP2_R010 > (sum_CAP_R020_120))) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R010_C' + arr_CAP2_inputs_2[i],
                        'weight': 7,
                        'msg': Drupal.t('Cod eroare: 07-007 - Cap.2: SUM(R..20, ..., 120) = R.10, pe toate coloanele. -> [@sum_CAP_R020_120] = [@CAP2_R010]', { '@sum_CAP_R020_120': sum_CAP_R020_120, '@CAP2_R010': CAP2_R010 })
                    });
                }
                // End 07-007

                // Start 07-009
                if (CAP2_R010 > 0) {
                    var min_CAP2_R020 = 0 * CAP2_R020;
                    var min_CAP2_R030 = 5000 * CAP2_R030;
                    var min_CAP2_R040 = 5000 * CAP2_R040;
                    var min_CAP2_R050 = 6000 * CAP2_R050;
                    var min_CAP2_R060 = 7000 * CAP2_R060;
                    var min_CAP2_R070 = 8000 * CAP2_R070;
                    var min_CAP2_R080 = 10000 * CAP2_R080;
                    var min_CAP2_R090 = 15000 * CAP2_R090;
                    var min_CAP2_R100 = 20000 * CAP2_R100;
                    var min_CAP2_R110 = 25000 * CAP2_R110;
                    var min_CAP2_R120 = 30000 * CAP2_R120;
                    var min_CAP2_R160 = 0;
                    min_CAP2_R160 = (min_CAP2_R020 + min_CAP2_R030 + min_CAP2_R040 + min_CAP2_R050 + min_CAP2_R060 + min_CAP2_R070 + min_CAP2_R080 + min_CAP2_R090 + min_CAP2_R100 + min_CAP2_R110 + min_CAP2_R120 + min_CAP2_R160) / 1000;
                    min_CAP2_R160 = parseFloat(min_CAP2_R160).toFixed(1);
                    var max_CAP2_R020 = 5000 * CAP2_R020;
                    var max_CAP2_R030 = 5000 * CAP2_R030;
                    var max_CAP2_R040 = 6000 * CAP2_R040;
                    var max_CAP2_R050 = 7000 * CAP2_R050;
                    var max_CAP2_R060 = 8000 * CAP2_R060;
                    var max_CAP2_R070 = 10000 * CAP2_R070;
                    var max_CAP2_R080 = 15000 * CAP2_R080;
                    var max_CAP2_R090 = 20000 * CAP2_R090;
                    var max_CAP2_R100 = 25000 * CAP2_R100;
                    var max_CAP2_R110 = 30000 * CAP2_R110;
                    var max_CAP2_R120 = 40000 * CAP2_R120;
                    var max_CAP2_R160 = 0;
                    max_CAP2_R160 = (max_CAP2_R020 + max_CAP2_R030 + max_CAP2_R040 + max_CAP2_R050 + max_CAP2_R060 + max_CAP2_R070 + max_CAP2_R080 + max_CAP2_R090 + max_CAP2_R100 + max_CAP2_R110 + max_CAP2_R120 + max_CAP2_R160) / 1000;
                    max_CAP2_R160 = parseFloat(max_CAP2_R160).toFixed(1);
                    if ((CAP2_R160 < min_CAP2_R160) || (CAP2_R160 > max_CAP2_R160)) {
                        webform.warnings.push({
                            'fieldName': 'CAP2_R160_C' + arr_CAP2_inputs_2[i],
                            'weight': 9,
                            'msg': Drupal.t('Cod atenționare: 07-009 - Cap.2: Verificarea la minimum și maximum. -> Cap.2 R.160 = [@CAP2_R160], minim = [@min_CAP2_R160] și maxim = [@max_CAP2_R160]', { '@CAP2_R160': CAP2_R160, '@min_CAP2_R160': min_CAP2_R160, '@max_CAP2_R160': max_CAP2_R160 })
                        });
                    }
                }
                // End 07-009

                // Start 07-016
                if (CAP2_R120 == 0 && CAP2_R010 > 0) {
                    var max_CAP2_R020 = 5000 * CAP2_R020;
                    var max_CAP2_R030 = 5000 * CAP2_R030;
                    var max_CAP2_R040 = 6000 * CAP2_R040;
                    var max_CAP2_R050 = 7000 * CAP2_R050;
                    var max_CAP2_R060 = 8000 * CAP2_R060;
                    var max_CAP2_R070 = 10000 * CAP2_R070;
                    var max_CAP2_R080 = 15000 * CAP2_R080;
                    var max_CAP2_R090 = 20000 * CAP2_R090;
                    var max_CAP2_R100 = 25000 * CAP2_R100;
                    var max_CAP2_R110 = 30000 * CAP2_R110;
                    var max_CAP2_R160 = 0;
                    max_CAP2_R160 = (max_CAP2_R020 + max_CAP2_R030 + max_CAP2_R040 + max_CAP2_R050 + max_CAP2_R060 + max_CAP2_R070 + max_CAP2_R080 + max_CAP2_R090 + max_CAP2_R100 + max_CAP2_R110 + max_CAP2_R160) / 1000;
                    max_CAP2_R160 = parseFloat(max_CAP2_R160).toFixed(1);
                    if ((CAP2_R160 > max_CAP2_R160)) {
                        webform.errors.push({
                            'fieldName': 'CAP2_R160_C' + arr_CAP2_inputs_2[i],
                            'weight': 16,
                            'msg': Drupal.t('Cod eroare: 07-016 - Cap.2: Verificarea la maximum dacă lipsește R.120 -> Cap.2 R.160 = [@CAP2_R160], maxim = [@max_CAP2_R160]', { '@CAP2_R160': CAP2_R160, '@max_CAP2_R160': max_CAP2_R160 })
                        });
                    }
                }
                // End 07-016

                // Start 07-018
                if (CAP2_R020 > 0) {
                    webform.warnings.push({
                        'fieldName': 'CAP2_R010_C' + arr_CAP2_inputs_2[i],
                        'weight': 18,
                        'msg': Drupal.t('Cod atenționare: 07-018 - Cap.2: Asigurați-vă de corectitudinea datelor. Salariul minim = 5000 lei. -> [@CAP2_R020]', { '@CAP2_R020': CAP2_R020 })
                    });
                }
                // End 07-018
            }
        }
        // End 05-021 \ 07-00(7, 9, 16, 18)
        // End Cap.2

        // Start Cap.1-2
        // Start 07-00(6, 15, 17)
        var arr_CAP1_2_inputs_1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        for (var i = 0; i < arr_CAP1_2_inputs_1.length; i++) {

            // Start 07-006
            var CAP1_R030 = 0;
            if (!isNaN(parseFloat(values['CAP1_R030_C' + arr_CAP1_2_inputs_1[i]]))) {
                CAP1_R030 = parseFloat(values['CAP1_R030_C' + arr_CAP1_2_inputs_1[i]]);
            }
            var CAP2_R010 = 0;
            if (!isNaN(parseFloat(values['CAP2_R010_C' + arr_CAP1_2_inputs_1[i]]))) {
                CAP2_R010 = parseFloat(values['CAP2_R010_C' + arr_CAP1_2_inputs_1[i]]);
            }
            if (CAP1_R030 < CAP2_R010) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R030_C' + arr_CAP1_2_inputs_1[i],
                    'weight': 6,
                    'msg': Drupal.t('Cod atenționare: 07-006 - Cap.2: R.10 ≤ Cap.1 R.30, pe toate coloanele. -> [@CAP2_R010] ≤ [@CAP1_R030]', { '@CAP2_R010': CAP2_R010, '@CAP1_R030': CAP1_R030 })
                });
            }
            // End 07-006

            // Start 07-015
            var CAP1_R070 = 0;
            if (!isNaN(parseFloat(values['CAP1_R070_C' + arr_CAP1_2_inputs_1[i]]))) {
                CAP1_R070 = parseFloat(values['CAP1_R070_C' + arr_CAP1_2_inputs_1[i]]);
            }
            var CAP1_R073 = 0;
            if (!isNaN(parseFloat(values['CAP1_R073_C' + arr_CAP1_2_inputs_1[i]]))) {
                CAP1_R073 = parseFloat(values['CAP1_R073_C' + arr_CAP1_2_inputs_1[i]]);
            }
            var CAP2_R160 = 0;
            if (!isNaN(parseFloat(values['CAP2_R160_C' + arr_CAP1_2_inputs_1[i]]))) {
                CAP2_R160 = parseFloat(values['CAP2_R160_C' + arr_CAP1_2_inputs_1[i]]);
            }
            if (CAP1_R073 > 0) {
                var calcul6 = ((CAP1_R070) - (CAP1_R073)) / 3;
                calcul6 = parseFloat(calcul6).toFixed(1);
                if (CAP2_R160 > calcul6) {
                    webform.warnings.push({
                        'fieldName': 'CAP2_R160_C' + arr_CAP1_2_inputs_1[i],
                        'weight': 15,
                        'msg': Drupal.t('Cod atenționare: 07-015 - Cap.2: R.160 ≤ R.70 - R.73 / 3 Cap.1 pe toate coloanele. -> [@CAP2_R160] ≤ [@calcul6]', { '@CAP2_R160': CAP2_R160, '@calcul6': calcul6 })
                    });
                }
            }
            // End 07-015





            // Start 07-017
            var CAP1_R010 = 0;
            if (!isNaN(parseFloat(values['CAP1_R010_C' + arr_CAP1_2_inputs_1[i]]))) {
                CAP1_R010 = parseFloat(values['CAP1_R010_C' + arr_CAP1_2_inputs_1[i]]);
            }
            var CAP2_R010 = 0;
            if (!isNaN(parseFloat(values['CAP2_R010_C' + arr_CAP1_2_inputs_1[i]]))) {
                CAP2_R010 = parseFloat(values['CAP2_R010_C' + arr_CAP1_2_inputs_1[i]]);
            }
            if (CAP1_R010 > 0) {
                var calcul7 = (CAP1_R030 * 100) / CAP1_R010;
                calcul7 = parseFloat(calcul7).toFixed(1);
                if (calcul7 >= 70 && CAP2_R010 == 0) {
                    webform.warnings.push({
                        'fieldName': 'CAP2_R010_C' + arr_CAP1_2_inputs_1[i],
                        'weight': 17,
                        'msg': Drupal.t('Cod atenționare: 07-017 - Dacă Cap.1 R.30 * 100 / R.10 ≥ 70%, în Cap.2 ar trebui să existe R.10, pe toate coloanele. -> [@calcul7]% ≥ [70]%', { '@calcul7': calcul7 })
                    });
                }
            }
            // End 07-017
        }
        // End 07-00(6, 15, 17)

        // Start 07-010
        for (var h = 2; h < 13; h++) {
            var fields_CAP1_CAEM5 = jQuery('#CAP1 thead tr td:nth-child(' + h + ')').find('select').val();
            var fields_CAP2_CAEM4 = jQuery('#CAP2 thead tr td:nth-child(' + h + ')').find('select').val();
            if ((fields_CAP1_CAEM5 !== fields_CAP2_CAEM4) || ((fields_CAP1_CAEM5 !== '') && (fields_CAP2_CAEM4 == ''))) {
                webform.errors.push({
                    'fieldName': 'CAP2_CAEM_C' + h,
                    'weight': 10,
                    'msg': Drupal.t('Cod eroare: 07-010 - Cod CAEM din Cap.2 trebuie să coincidă cu cod CAEM din Cap.1')
                });
            }
        }
        // End 07-010

        // Start 07-023
        var CAP1_R120_C1 = 0;
        if (!isNaN(parseFloat(values['CAP1_R120_C1']))) {
            CAP1_R120_C1 = parseFloat(values['CAP1_R120_C1']);
        }
        var CAP2_R010_C1 = 0;
        if (!isNaN(parseFloat(values['CAP2_R010_C1']))) {
            CAP2_R010_C1 = parseFloat(values['CAP2_R010_C1']);
        }
        var CAP2_R160_C1 = 0;
        if (!isNaN(parseFloat(values['CAP2_R160_C1']))) {
            CAP2_R160_C1 = parseFloat(values['CAP2_R160_C1']);
        }
        var calcul8 = (CAP2_R160_C1 * 1000 / CAP2_R010_C1) / CAP1_R120_C1 * 100;
        calcul8 = parseFloat(calcul8).toFixed(1);
        if ((calcul8 < 85) || (calcul8 > 130)) {
            webform.warnings.push({
                'fieldName': 'CAP2_R160_C1',
                'weight': 23,
                'msg': Drupal.t('Cod atenționare: 07-023 - (Cap.2 R.160 Col.1 * 1000 / R.10 Col.1) / Cap.1 R.120 Col.1 * 100 = [85-130]% -> [@calcul8]%', { '@calcul8': calcul8 })
            });
        }
        // End 07-023

        // Start 07-024
        var CAP1_R030_C1 = 0;
        if (!isNaN(parseFloat(values['CAP1_R030_C1']))) {
            CAP1_R030_C1 = parseFloat(values['CAP1_R030_C1']);
        }
        var CAP1_R070_C1 = 0;
        if (!isNaN(parseFloat(values['CAP1_R070_C1']))) {
            CAP1_R070_C1 = parseFloat(values['CAP1_R070_C1']);
        }
        var CAP1_R073_C1 = 0;
        if (!isNaN(parseFloat(values['CAP1_R073_C1']))) {
            CAP1_R073_C1 = parseFloat(values['CAP1_R073_C1']);
        }
        var SumF2 = CAP1_R070_C1 - CAP1_R073_C1;
        var SumF3 = CAP1_R030_C1 - CAP2_R010_C1;
        if ((SumF2 != 0) && (SumF3 != 0)) {
            var calcul9 = (SumF2 / 3 - CAP2_R160_C1) * 1000 / SumF3;
            calcul9 = parseFloat(calcul9).toFixed(1);
            if (calcul9 <= 3000) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R070_C1',
                    'weight': 24,
                    'msg': Drupal.t('Cod atenționare: 07-024 - (Cap.1 Col.1 (R.70 - R.73) / 3 - Cap.2 R.160 Col.1) * 1000 / (Cap.1 R.30 Col.1 - Cap.2 R.10 Col.1) > 3000 -> [@calcul9] > [3000]', { '@calcul9': calcul9 })
                });
            }
        }
        // End 07-024
        // End Cap.1-2
    }

    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.validatorsStatus['m1'] = 1;
    validateWebform();
}