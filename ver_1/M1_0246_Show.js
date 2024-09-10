(function ($) {
    Drupal.behaviors.m1 = {
        attach: function (context, settings) {
            // Când TRIM se schimbă, ascunde/afișează capitolul II
            jQuery('select[name="TRIM"]').change(function () {
                var trimValue = jQuery(this).val();
                toggleCap2(trimValue);
            });

            // La submit, revalidează și reaplică logica de ascundere a capitolului II
            jQuery('#mywebform-edit-form').on('submit', function (event) {
                var values = Drupal.settings.mywebform.values;
                var trimValue = values['TRIM']; // Capturăm valoarea TRIM din formular
                toggleCap2(trimValue);
            });

            function toggleCap2(trimValue) {
                if (trimValue == 1 || trimValue == 2 || trimValue == 4) {
                    // Ascunde capitolul 2
                    jQuery('#header_cap_2').hide();
                    jQuery('#header_cap_3').hide();
                    jQuery('#CAP2').hide();

                    // Curăță valorile din câmpurile Capitolului II
                    jQuery('input[name^="CAP2"]').val('');
                    var caemFields = ['CAP2_CAEM_C2', 'CAP2_CAEM_C3', 'CAP2_CAEM_C4', 'CAP2_CAEM_C5', 'CAP2_CAEM_C6', 'CAP2_CAEM_C7', 'CAP2_CAEM_C8', 'CAP2_CAEM_C9', 'CAP2_CAEM_C10', 'CAP2_CAEM_C11', 'CAP2_CAEM_C12'];
                    caemFields.forEach(function (fieldName) {
                        jQuery('#select2-' + fieldName + '-container').text('');
                        jQuery('select[name="' + fieldName + '"]').val(null).trigger('change');
                    });
                } else if (trimValue == 3) {
                    // Afișează capitolul 2
                    jQuery('#header_cap_2').show();
                    jQuery('#header_cap_3').show();
                    jQuery('#CAP2').show();
                }
            }
        }
    }
})(jQuery);
