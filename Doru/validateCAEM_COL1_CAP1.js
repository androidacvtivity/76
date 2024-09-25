function validateCAEM_COL1_CAP1(values) {
    // Initialize the values object if undefined
    if (typeof values === 'undefined') {
        values = {};
    }

    // Use the Select2 API to retrieve the selected CAEM value from the main field
    var caem = jQuery('#CAEM').select2('val');  // Get CAEM from the main activity
    var cap1_caem_c2_value = jQuery('#CAP1_CAEM_C2').select2('val');  // Get the value from the second field (Col 2)

    console.log('Main CAEM value:', caem);
    console.log('CAP1 CAEM C2 value:', cap1_caem_c2_value);

    // Handle case when fields_CAP1_CAEM2 (second column) is undefined or empty
    if (typeof cap1_caem_c2_value === 'undefined' || cap1_caem_c2_value === null || cap1_caem_c2_value === '') {
        // Optionally add an error for undefined or empty values
        webform.errors.push({
            'fieldName': 'CAP1_CAEM_C2',
            'msg': Drupal.t('Cod eroare: A.015 Trebuie selectat un cod CAEM pentru coloana 2.')
        });
        return; // Exit the function early since no valid CAEM is selected in column 2
    }

    // Check if the CAEM value from the main activity matches the second field
    if (caem !== cap1_caem_c2_value) {
        // Push error if CAEM does not match
        webform.errors.push({
            'fieldName': 'CAP1_CAEM_C1',
            'msg': Drupal.t(`Cod eroare: A.014 Cod CAEM (${caem}) trebuie sa fie acelasi ca si in Activitatea principală (${cap1_caem_c2_value})`)
        });
    }
}
