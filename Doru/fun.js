webform.validators.m1 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values; // Retrieve the form values from Drupal
    var errors = []; // Array to store any validation errors

    // Get the CAEM values for C1
    var cap1Field = values[`CAP1_CAEM_C1`];  // Get the CAEM value from Capitolul 1, column C1
    var cap2Element = document.getElementById("CAP2_CAEM_C1");  // Get the element for CAP2_CAEM_C1

    if (cap2Element) {
        var cap2Field = cap2Element.value;  // Get the current value in CAP2_CAEM_C1

        // Step 1: Directly assign CAP1_CAEM_C1 to CAP2_CAEM_C1 if not equal
        if (cap1Field && cap1Field !== cap2Field) {
            document.getElementById("CAP2_CAEM_C1").value = cap1Field;  // Assign the value from CAP1 to CAP2
            console.log(`Assigned CAP2_CAEM_C1 = ${cap1Field}`);  // Log the assignment for debugging
        }

        // Step 2: Validate that CAP1_CAEM_C1 and CAP2_CAEM_C1 are equal
        if (cap1Field && cap2Field && cap1Field !== cap2Field) {
            // Add an error if the values do not match
            errors.push({
                'fieldName': 'CAP2_CAEM_C1',
                'weight': 21,
                'msg': Drupal.t('Cod eroare: Codul CAEM din Cap.2, coloana C1, nu corespunde cu codul CAEM din Cap.1, coloana C1.')
            });
        }
    } else {
        console.warn("Element CAP2_CAEM_C1 not found in the DOM.");
    }

    // Return any validation errors found
    return errors.length > 0 ? errors : null;
};
