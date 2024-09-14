
var val = String(jQuery(this).val());


// ------------------------------

var val = jQuery(this).val();
if (val !== null && val !== undefined) {
    var processed_val = String(val).trim();
    if (val != processed_val) {
        jQuery(this).val(processed_val).trigger('change');
    }
} else {
    console.warn("Input value is null or undefined");
}
