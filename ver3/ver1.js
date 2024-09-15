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

// Validate fields and check for valid values
if (valid_ == 1) {
    arr_CAP1_inputs_2.forEach(function (inputIndex) {
        // Check if the select element exists before calling .val()
        var fields_CAP1_CAEM2;
        var selectElement = jQuery('#CAP1 thead tr td:nth-child(' + inputIndex + ')').find('select');

        // Only call .val() if the select element is found
        if (selectElement.length > 0) {
            fields_CAP1_CAEM2 = selectElement.val().trim();
        } else {
            fields_CAP1_CAEM2 = ''; // Handle case where select is not found
        }

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

        // Validation logic goes here (e.g., 05-003, 05-007, etc.)
        // ...
    });
}
