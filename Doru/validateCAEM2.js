// Inside webform.validators.m1 function

function validateCAEM2(values) {
    const errors = [];

    const columns = ['C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12'];

    columns.forEach(col => {
        const cap1Field = values[`CAP1_CAEM_${col}`];
        const cap2Field = values[`CAP2_CAEM_${col}`];

        // Check if CAP1_CAEM is selected
        if (cap1Field && cap1Field !== '') {
            // Automatically set the corresponding CAP2_CAEM field to the same value
            if (!cap2Field || cap2Field !== cap1Field) {
                values[`CAP2_CAEM_${col}`] = cap1Field; // Set CAP2_CAEM to CAP1_CAEM value
                jQuery(`select[name="CAP2_CAEM_${col}"]`).val(cap1Field).trigger('change');
            }
        } else {
            // Trigger validation error if CAP1_CAEM is not selected but data exists
            if (parseFloat(values[`CAP1_R10_${col}`]) || parseFloat(values[`CAP1_R20_${col}`])) {
                errors.push({
                    'fieldName': `CAP1_CAEM_${col}`,
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: 05-021 - Cap.1: Pentru orice coloană cu date trebuie selectat codul CAEM.')
                });
            }
        }
    });

    return errors;
}
