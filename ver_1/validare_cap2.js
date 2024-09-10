function validateCap2SumAndTrim(values) {
    // Preluăm valoarea TRIM
    var trimValue = 0;
    if (!isNaN(Number(values['TRIM']))) {
        trimValue = Number(values['TRIM']);
    }

    // Calculăm suma tuturor valorilor din Capitolul II
    var cap2Sum = 0;
    var fields = [
        'CAP2_R010_', 'CAP2_R020_', 'CAP2_R030_', 'CAP2_R040_', 'CAP2_R050_',
        'CAP2_R060_', 'CAP2_R070_', 'CAP2_R080_', 'CAP2_R090_', 'CAP2_R100_',
        'CAP2_R110_', 'CAP2_R120_', 'CAP2_R160_'
    ];

    // Iterăm prin toate rândurile și coloanele din Cap2 pentru a aduna valorile
    for (var i = 0; i < fields.length; i++) {
        for (var j = 1; j <= 12; j++) {
            var fieldName = fields[i] + 'C' + j;
            var cellValue = parseFloat(values[fieldName]);
            if (!isNaN(cellValue)) {
                cap2Sum += cellValue;
            }
        }
    }

    // Verificăm dacă suma este mai mare ca 0 și TRIM nu este 3
    if (cap2Sum > 0 && trimValue != 3) {
        return {
            'fieldName': 'TRIM',
            'weight': 1,
            'msg': Drupal.t('Eroare: Capitolul II conține date, dar TRIM nu este egal cu 3. Suma datelor din Cap.2 este [@cap2Sum]. Vă rugăm să corectați.', { '@cap2Sum': cap2Sum })
        };
    }

    return null; // Nicio eroare
}
