//It is js code in Drupal
//While debugging is detected this bug
//During the calculation process, the number goes into the string and finally the string is compared with the number, which is a mistake.
//It must be avoided that during the process it changes to string and remains in number - with one digit after the comma
// Start 05-012
var raport1 = CAP1_R030 + CAP1_R040; //This is number with one digit after the comma
if (raport1 > 0) { // raport1 is nunber with one digit after the comma

    //CAP1_R050 this is number 87.3 
    //raport1 this in number 281.7
    //but here
    var calcul1 = (CAP1_R050 * 1000) / raport1; //but calcul1 It becomes string '309.9' // It must be modified here as is number with one digit after the comma
    calcul1 = parseFloat(calcul1).toFixed(1); //this same here '309.9' 
    if (calcul1 > 570 || calcul1 < 450) { //and here is '309.9' > 570 || '309.9'  < 450  
        webform.warnings.push({
            'fieldName': 'CAP1_R050_C' + arr_CAP1_inputs_2[i],
            'weight': 12,
            'msg': Drupal.t('Cod atenționare: 05-012 - Cap.1: R.50 * 1000 / (R.30 + R.40) ≤ 570 și > 450 pe toate coloanele. -> [@sum]', { '@sum': calcul1 })
        });
    }
}
// End 05-012