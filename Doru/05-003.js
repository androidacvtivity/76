// Rânduri specifice pentru Capitolul 1 care nu se împart la 10
const specialRowsCap1 = [31, 51, 52, 71, 72, 73, 74];

specialRowsCap1.forEach(function (row) {
    // Validare pentru Capitolul 1
    let col1ValueCap1 = parseFloat(values["CAP1_R" + row + "_C1"]);
    let colSumCap1 = 0;

    // Verificăm dacă col1ValueCap1 este un număr valid, atribuim 0 dacă este NaN
    if (isNaN(col1ValueCap1)) {
        col1ValueCap1 = 0;
    }

    // Sumăm valorile de la Coloana 2 până la Coloana 12 pentru Capitolul 1
    for (let col = 2; col <= 12; col++) {
        let colValue = parseFloat(values["CAP1_R" + row + "_C" + col]);
        if (isNaN(colValue)) {
            colValue = 0;
        }
        colSumCap1 += colValue;
    }


    // Afișăm valorile pentru Capitolul 1 în consolă pentru depanare
    console.log("Capitolul 1 - Rând " + row + ": col1Value = " + col1ValueCap1 + ", colSum = " + colSumCap1);

    // Validăm dacă Coloana 1 este egală cu suma Coloanelor 2-12 pentru Capitolul 1
    if (col1ValueCap1 !== colSumCap1) {
        webform.errors.push({
            'fieldName': 'CAP1_R' + row + '_C1',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 05-003 - Capitolul 1: Col.1 trebuie să fie egală cu suma Col.2-12 pentru rândul @row. Valoarea Col.1: [@col1], Suma Col.2-12: [@colSum]',
                {
                    '@row': row,
                    '@col1': col1ValueCap1,
                    '@colSum': colSumCap1
                })
        });
    }
});
