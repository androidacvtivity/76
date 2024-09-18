(function ($) {
    Drupal.behaviors.m1 = {
        attach: function (context, settings) {
            // Event listeners for dynamic updates
            jQuery('#mywebform-edit-form').on('mywebform:gridRefreshField', 'input.dynamic-region', function () {
                var val = jQuery(this).val();  // Get the value without converting to String first
                if (val !== null && val !== undefined) {
                    var processed_val = String(val).trim();
                    if (val !== processed_val) {
                        jQuery(this).val(processed_val).trigger('change');
                    }
                } else {
                    console.warn("Input value is null or undefined");
                }
            });

            jQuery('#mywebform-edit-form', context).on('mywebform:sync', 'select.Section-caem', function () {
                fill_section2_caem_fields(jQuery(this));
            });

            // Add your TRIM handling here
            var trimValue = jQuery('select[name="TRIM"]').val();
            if (trimValue === '3') {
                fill_section2_caem_fields();  // Call function to fill CAEM fields if TRIM == 3
            }
        }
    }
})(jQuery);

function fill_section2_caem_fields($element) {
    var caem = $element ? $element.val() : null;

    // If $element is null, we set values across all relevant fields
    if (!caem) {
        jQuery('select.Section2-caem').each(function () {
            var cap1Value = jQuery(this).closest('tr').find('.Section-caem').val();
            if (cap1Value) {
                jQuery(this).val(cap1Value).trigger('change');
            }
        });
    } else {
        jQuery('select.Section2-caem')
            .myWebformSelect2SetVal(caem)
            .trigger('change');
    }
}
