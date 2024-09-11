(function ($) {
    Drupal.behaviors.m1 = {
        attach: function (context, settings) {
            // Eveniment care detectează validarea și aplică logica personalizată
            webform.validators.m1 = function (values, allowOverpass) {
                // Verificăm valoarea lui TRIM
                var trimValue = values['TRIM'];

                // Dacă TRIM nu este 3, resetăm câmpurile CAEM2
                if (trimValue != 3) {
                    // Iterăm prin toate câmpurile CAEM2
                    for (var h = 2; h < 13; h++) {
                        var fields_CAP2_CAEM2 = jQuery('#CAP2 thead tr td:nth-child(' + h + ') select');
                        fields_CAP2_CAEM2.each(function () {
                            // Deselectăm câmpurile CAEM2
                            jQuery(this).val('');  // Resetăm valoarea
                            jQuery(this).find('option:selected').prop('selected', false);  // Deselectăm opțiunile selectate
                        });
                    }
                }

                // După resetarea câmpurilor CAEM2, continuăm cu restul validărilor
                validateUniqueCAEMFields(values);

                // Alte validări (dacă există)
                // ...
            };

            // Funcție de validare pentru a verifica dacă codurile CAEM sunt unice pe coloane
            function validateUniqueCAEMFields(values) {
                for (var h = 2; h < 13; h++) {
                    var fields_CAP1_CAEM3 = jQuery('#CAP1 thead tr td:nth-child(' + h + ') select').val();

                    // Verificăm dacă codurile CAEM se repetă în CAP1
                    for (var m = 2; m < 13; m++) {
                        if (h != m) {
                            var fields_CAP1_CAEM4 = jQuery('#CAP1 thead tr td:nth-child(' + m + ') select').val();
                            if (fields_CAP1_CAEM4 == fields_CAP1_CAEM3 && fields_CAP1_CAEM4 !== '') {
                                webform.errors.push({
                                    'fieldName': 'CAP1_CAEM_C' + m,
                                    'weight': 31,
                                    'msg': Drupal.t('Cod eroare: 05-031 - Cod CAEM nu trebuie să se repete.')
                                });
                            }
                        }
                    }

                    // Verificăm codurile CAEM în CAP2
                    var fields_CAP2_CAEM2 = jQuery('#CAP2 thead tr td:nth-child(' + h + ') select').val();
                    for (var m = 2; m < 13; m++) {
                        if (h != m) {
                            var fields_CAP2_CAEM3 = jQuery('#CAP2 thead tr td:nth-child(' + m + ') select').val();
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
    }
})(jQuery);
