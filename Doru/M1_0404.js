(function ($) {
    Drupal.behaviors.m1 = {
        attach: function (context, settings) {


            jQuery('#mywebform-edit-form').on('mywebform:gridRefreshField', 'input.dynamic-region', function () {
                var val = jQuery(this).val();  // Get the value without converting to String first

                // Ensure val is not null or undefined before proceeding
                if (val !== null && val !== undefined) {
                    var processed_val = String(val).trim();  // Safely convert to string and trim

                    // Use strict comparison to avoid type coercion
                    if (val !== processed_val) {
                        jQuery(this).val(processed_val).trigger('change');
                    }
                } else {
                    console.warn("Input value is null or undefined");
                }
            });


            jQuery('#mywebform-edit-form', context).on('keypress', 'input.numeric, input.money, input.float', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });



            //
            jQuery('#mywebform-edit-form', context).on('paste', 'input.numeric, input.money, input.float', function (event) {
                var obj = event.originalEvent || event;

                if (typeof obj.clipboardData !== 'undefined') {
                    var value = obj.clipboardData.getData('text/plain').trim();  // Trim whitespace to handle cases like " 123 "

                    // Use regex to validate if the pasted value is a valid number (allows decimals)
                    var isNumeric = /^[+-]?\d+(\.\d+)?$/.test(value);
                    var number = isNumeric ? Number(value) : NaN;  // Convert to number if valid, otherwise set to NaN

                    if (!isNumeric || isNaN(number) || is_negative(number)) {  // Prevent invalid number or negative values
                        event.preventDefault();
                        console.warn("Pasted value is not a valid number or is negative:", value);
                    } else {
                        jQuery(this).val(number);  // Set valid number to input field
                    }
                }
            });

            //

            jQuery('#mywebform-edit-form').on('mywebform:sync', 'input', function () {
                var $this = jQuery(this);
                var fieldName = $this.attr('field');
            });

            jQuery('#mywebform-edit-form').on('mywebform:sync', 'select.Section-caem', function () {
                fill_section2_caem_fields(jQuery(this));
            });


            // Hide Cap2  Start
            // Funcție pentru a ascunde sau afișa capitolul 1.2 în funcție de TRIM
            function toggleCap2(trimValue) {
                if (trimValue == 1 || trimValue == 2 || trimValue == 4) {
                    // Ascundere capitol 1.2 dacă TRIM nu este 3
                    jQuery('#header-1-2').hide();  // Ascunde headerul capitolului 1.2
                    jQuery('#CAP2').hide();        // Ascunde tabelul corespunzător capitolului 1.2
                    jQuery('#row-header-1, #row-header-2, #row-header-3, #row-10, #row-30, #row-40, #row-50, #row-60, #row-70, #row-80, #row-90, #row-100, #row-110, #row-120, #row-160, #Caption_Cap2').hide();

                    // Curățăm toate valorile input-urilor din capitolul 1.2
                    jQuery('input[name^="CAP2"]').val('');

                    // Deselectăm valorile select2 și setăm tabindex la 0
                    jQuery('select[name^="CAP2_CAEM"]').each(function () {
                        jQuery(this).val('').trigger('change');  // Deselectăm valorile CAEM2
                        jQuery(this).next('.select2-container').find('.select2-selection--single').attr('tabindex', '0');  // Setăm tabindex la 0
                    });

                } else if (trimValue == 3) {
                    // Afișăm capitolul 1.2 dacă TRIM este 3
                    jQuery('#header-1-2').show();  // Afișează headerul capitolului 1.2
                    jQuery('#CAP2').show();        // Afișează tabelul corespunzător capitolului 1.2
                    jQuery('#row-header-1, #row-header-2, #row-header-3, #row-10, #row-30, #row-40, #row-50, #row-60, #row-70, #row-80, #row-90, #row-100, #row-110, #row-120, #row-160, #Caption_Cap2').show();

                    // Afișăm și lăsăm formularul să funcționeze implicit fără a face modificări
                }
            }

            // Eveniment pentru a detecta schimbarea valorii select TRIM
            jQuery('select[name="TRIM"]').change(function () {
                var trimValue = jQuery(this).val();
                toggleCap2(trimValue);
            });

            // Apelează funcția toggleCap2 inițial dacă este nevoie
            var initialTrimValue = jQuery('select[name="TRIM"]').val();
            toggleCap2(initialTrimValue);

            // Hide Cap2  End


        }
    }
})(jQuery)

function fill_section2_caem_fields($element) {
    var caem = $element.val();

    jQuery('select.Section2-caem')
        .myWebformSelect2SetVal(caem)
        .trigger('change');
}

webform.validators.m1 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;


//------------------------------------------------



    // Ensure that CAEM values between Capitolul 1 and Capitolul 2 are properly synced after validation
    const columns = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12'];

    // Sync and validate CAEM codes between Capitolul 1 and Capitolul 2
    columns.forEach(col => {
        const cap1Field = values[`CAP1_CAEM_${col}`]; // Get CAEM value from Capitolul 1
        const cap2Element = jQuery(`#CAP2_CAEM_${col}`); // Use jQuery to get the element in Capitolul 2

        if (cap2Element.length) {
            const cap2Field = cap2Element.val(); // Retrieve the current value from Capitolul 2

            // Step 1: If CAP1_CAEM is filled and CAP2_CAEM is empty, assign CAP1_CAEM to CAP2_CAEM
            if (cap1Field && !cap2Field) {
                cap2Element.val(cap1Field).trigger('change'); // Assign CAEM value from Capitolul 1 to Capitolul 2 and trigger change
                console.log(`Assigned CAP2_CAEM_${col} = ${cap1Field}`); // Debug log
            }

            // Step 2: Validate that CAP1_CAEM and CAP2_CAEM are equal
            if (cap1Field && cap2Field && cap1Field !== cap2Field) {
                // Add error if the values do not match
                errors.push({
                    'fieldName': `CAP2_CAEM_${col}`,
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: Codul CAEM selectat din Cap.2 nu corespunde cu codul CAEM din Cap.1 pentru coloana @col.', { '@col': col })
                });
            }
        }
    });

    // Return errors if any are found
//-------------------------------------------------------------







    validatePhoneNumber(values.PHONE);
 

    //    
    function roundToDecimal(value, decimals) {
        if (!isNaN(value)) {
            var factor = Math.pow(10, decimals);
            return Math.round(value * factor) / factor;
        } else {
            console.warn("Value provided is not a number:", value);
            return 0; // Default fallback value
        }
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

    // Check if the field is empty or has more than 9 digits
    function validatePhoneNumber(phone) {
        // Check if the phone number is valid (exactly 9 digits)
        if (!values.PHONE || !/^[0-9]{9}$/.test(values.PHONE)) {
            webform.errors.push({
                'fieldName': 'PHONE',
                'msg': Drupal.t(' Cod eroare: A.09 Introduceți doar un număr de telefon format din 9 cifre')
            });
        }
        // Check if the first digit is 0
        if (values.PHONE && values.PHONE[0] !== '0') {
            webform.errors.push({
                'fieldName': 'PHONE',
                'msg': Drupal.t(' Cod eroare: A.09 Prima cifră a numărului de telefon trebuie să fie 0')
            });
        }
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


function validateCap2SumAndTrim(values) {
    // Preluăm valoarea TRIM
    var trimValue = 0;
    if (!isNaN(Number(values['TRIM']))) {
        trimValue = Number(values['TRIM']);
    }

    // Definim câmpurile din Capitolul II
    var fields = [
        'CAP2_R10_', 'CAP2_R20_', 'CAP2_R30_', 'CAP2_R40_', 'CAP2_R50_',
        'CAP2_R60_', 'CAP2_R70_', 'CAP2_R80_', 'CAP2_R90_', 'CAP2_R100_',
        'CAP2_R110_', 'CAP2_R120_', 'CAP2_R160_'
    ];

    // Variabilă pentru a aduna valorile și pentru a colecta câmpurile cu date
    var cap2Sum = 0;
    var errors = [];

    // Iterăm prin toate rândurile și coloanele din Cap2 pentru a aduna valorile și a colecta câmpurile care au date
    for (var i = 0; i < fields.length; i++) {
        for (var j = 1; j <= 12; j++) {
            var fieldName = fields[i] + 'C' + j;
            var cellValue = parseFloat(values[fieldName]);
            if (!isNaN(cellValue) && cellValue > 0) {
                cap2Sum += cellValue;

                // Adaugă eroare pentru fiecare câmp specific dacă TRIM nu este 3
                if (trimValue != 3) {
                    errors.push({
                        'fieldName': fieldName,
                        'weight': 1,
                        'msg': Drupal.t('Eroare: Capitolul II conține date în câmpul [@fieldName] (valoare: @cellValue), dar TRIM nu este egal cu 3. Vă rugăm să corectați.', {
                            '@fieldName': fieldName,
                            '@cellValue': cellValue
                        })
                    });
                }
            }
        }
    }

    // Returnăm toate erorile dacă există
    if (errors.length > 0) {
        return errors;
    }

    return null; // Nicio eroare
}


function validateCAEM2(values) {
    // Preluăm valoarea TRIM
    var trimValue = 0;
    if (!isNaN(Number(values['TRIM']))) {
        trimValue = Number(values['TRIM']);
    }

    var caemFields = [
        'CAP2_CAEM_C2', 'CAP2_CAEM_C3', 'CAP2_CAEM_C4', 'CAP2_CAEM_C5',
        'CAP2_CAEM_C6', 'CAP2_CAEM_C7', 'CAP2_CAEM_C8', 'CAP2_CAEM_C9',
        'CAP2_CAEM_C10', 'CAP2_CAEM_C11', 'CAP2_CAEM_C12'
    ];

    var caem2HasData = false;
    var errors = [];

    // Iterăm prin câmpurile CAEM pentru a verifica dacă sunt completate
    for (var i = 0; i < caemFields.length; i++) {
        var caemField = values[caemFields[i]]; // CAEM specific coloanei

        // Verificăm dacă CAEM este completat
        if (caemField && caemField !== '') {
            caem2HasData = true;

            // Dacă TRIM nu este 3 și CAEM este completat, afișăm eroare
            if (trimValue != 3) {
                errors.push({
                    'fieldName': caemFields[i],
                    'weight': 1,
                    'msg': Drupal.t('Eroare: Câmpul [@fieldName] (genul de activitate) este completat, dar TRIM nu este egal cu 3. Vă rugăm să corectați.', {
                        '@fieldName': caemFields[i]
                    })
                });
            }
        }
    }

    // Returnăm erorile, dacă există
    if (errors.length > 0) {
        return errors;
    }

    return null; // Nicio eroare
}


function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }
    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }
    return toFloat(a.error_code) - toFloat(b.error_code);
}