(function ($) {
    Drupal.behaviors.m1 = {
        attach: function (context, settings) {

            jQuery('#mywebform-edit-form').on('mywebform:gridRefreshField', 'input.dynamic-region', function () {
                var val = jQuery(this).val();  // Get the value without converting to String first

                // Ensure val is not null or undefined before proceeding
                if (val !== null && val !== undefined) {
                    var processed_val = String(val).trim();  // Safely convert to string and trim

                    // Use strict comparison to avoid type coercion
                    if (val !== processed_val) {
                        jQuery(this).val(processed_val).trigger('change');
                    }
                } else {
                    console.warn("Input value is null or undefined");
                }
            });

            jQuery('#mywebform-edit-form', context).on('keypress', 'input.numeric, input.money, input.float', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            jQuery('#mywebform-edit-form', context).on('paste', 'input.numeric, input.money, input.float', function (event) {
                var obj = event.originalEvent || event;

                if (typeof obj.clipboardData !== 'undefined') {
                    var value = obj.clipboardData.getData('text/plain').trim();  // Trim whitespace to handle cases like " 123 "

                    // Use regex to validate if the pasted value is a valid number (allows decimals)
                    var isNumeric = /^[+-]?\d+(\.\d+)?$/.test(value);
                    var number = isNumeric ? Number(value) : NaN;  // Convert to number if valid, otherwise set to NaN

                    if (!isNumeric || isNaN(number) || is_negative(number)) {  // Prevent invalid number or negative values
                        event.preventDefault();
                        console.warn("Pasted value is not a valid number or is negative:", value);
                    } else {
                        jQuery(this).val(number);  // Set valid number to input field
                    }
                }
            });

            jQuery('#mywebform-edit-form').on('mywebform:sync', 'input', function () {
                var $this = jQuery(this);
                var fieldName = $this.attr('field');
            });

            jQuery('#mywebform-edit-form').on('mywebform:sync', 'select.Section-caem', function () {
                fill_section2_caem_fields(jQuery(this));
            });

            // Hide Cap2  Start
            function toggleCap2(trimValue) {
                if (trimValue == 1 || trimValue == 2 || trimValue == 4) {
                    jQuery('#header-1-2').hide();
                    jQuery('#CAP2').hide();
                    jQuery('input[name^="CAP2"]').val('');
                    jQuery('select[name^="CAP2_CAEM"]').each(function () {
                        jQuery(this).val('').trigger('change');
                        jQuery(this).next('.select2-container').find('.select2-selection--single').attr('tabindex', '0');
                    });
                } else if (trimValue == 3) {
                    jQuery('#header-1-2').show();
                    jQuery('#CAP2').show();
                    jQuery('#row-header-1, #row-header-2, #row-header-3, #row-10, #row-30, #row-40, #row-50, #row-60, #row-70, #row-80, #row-90, #row-100, #row-110, #row-120, #row-160, #Caption_Cap2').show();

                    // New logic to auto-select CAEM from Chapter 1 to Chapter 2 when trim == 3
                    var caemValueChapter1 = jQuery('#CAP1_CAEM_C2').val();
                    jQuery('#CAP2_CAEM_C2').val(caemValueChapter1).trigger('change');  // Set CAEM2 in Chapter 2
                }
            }

            // Event for detecting changes in the select TRIM value
            jQuery('select[name="TRIM"]').change(function () {
                var trimValue = jQuery(this).val();
                toggleCap2(trimValue);
            });

            // Call toggleCap2 initially if needed
            var initialTrimValue = jQuery('select[name="TRIM"]').val();
            toggleCap2(initialTrimValue);
        }
    }
})(jQuery);

function fill_section2_caem_fields($element) {
    var caem = $element.val();

    jQuery('select.Section2-caem')
        .myWebformSelect2SetVal(caem)
        .trigger('change');
}
