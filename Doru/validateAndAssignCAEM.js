// Inside webform.validators.m1 function

function validateAndAssignCAEM(values) {
    const errors = [];
    const columns = ['C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12'];

    columns.forEach(col => {
        const cap1Field = values[`CAP1_CAEM_${col}`]; // Get CAEM value from Capitolul 1
        const cap2Element = document.getElementById(`CAP2_CAEM_${col}`); // Get the Capitolul 2 element by ID
        const cap2Field = cap2Element ? cap2Element.value : ''; // Retrieve current value of Capitolul 2 CAEM

        // Step 1: If CAP1_CAEM is filled and CAP2_CAEM is empty, assign CAP1_CAEM to CAP2_CAEM
        if (cap1Field && !cap2Field) {
            if (cap2Element) {
                cap2Element.value = cap1Field; // Assign CAP1_CAEM value to CAP2_CAEM using document.getElementById
                console.log(`Assigned CAP2_CAEM_${col} = ${cap1Field}`); // Log for debugging purposes
            }
        }

        // Step 2: Validate that CAP1_CAEM and CAP2_CAEM are equal
        if (cap1Field && cap2Field) {
            if (cap1Field !== cap2Field) {
                // Add an error if the values do not match
                errors.push({
                    'fieldName': `CAP2_CAEM_${col}`,
                    'weight': 21,
                    'msg': Drupal.t('Cod eroare: Codul CAEM selectat din Cap.2 nu corespunde cu codul CAEM din Cap.1 pentru coloana @col.', { '@col': col })
                });
            }
        }
    });

    return errors;
}
