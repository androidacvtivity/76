// This function handles showing/hiding Chapter 2 based on TRIM value.
jQuery('select[name="TRIM"]').change(function () {
    var trimValue = jQuery(this).val(); // Capture the value of TRIM

    if (trimValue == 1 || trimValue == 2 || trimValue == 4) {
        // Hide Chapter 2 and related headers if TRIM is 1, 2, or 4
        jQuery('#header_cap_2').hide();
        jQuery('#header_cap_3').hide();
        jQuery('#CAP2').hide();

        // Clear all input values and checkboxes in Chapter 2
        jQuery('input[name^="CAP2"]').val('');            // Clear text inputs for CAP2
      

        // Clear specific select2 fields: CAP2_CAEM_C2 through CAP2_CAEM_C12
        var caemFields = ['CAP2_CAEM_C2', 'CAP2_CAEM_C3', 'CAP2_CAEM_C4', 'CAP2_CAEM_C5', 'CAP2_CAEM_C6', 'CAP2_CAEM_C7', 'CAP2_CAEM_C8', 'CAP2_CAEM_C9', 'CAP2_CAEM_C10', 'CAP2_CAEM_C11', 'CAP2_CAEM_C12'];
        caemFields.forEach(function (fieldName) {
            // Clear the displayed text in the select2 container
            jQuery('#select2-' + fieldName + '-container').text('');
            // Clear the actual select value
            jQuery('select[name="' + fieldName + '"]').val(null).trigger('change');
        });

      
    } else {
        // Show Chapter 2 if TRIM is 3
        jQuery('#header_cap_2').show();
        jQuery('#header_cap_3').show();
        jQuery('#CAP2').show();

      
    }
});
