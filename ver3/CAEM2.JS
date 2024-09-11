CAP2_CAEM_C2	Genul de activitate din coloana 2	dec / DataSet / Data / CAP2_CAEM_C2			text	select2			0	0	0	0	0	0	0	185	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> caem Section3 - caem
CAP2_CAEM_C3	Genul de activitate din coloana 3	dec / DataSet / Data / CAP2_CAEM_C3			text	select2			0	0	0	0	0	0	0	186	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> text
CAP2_CAEM_C4	Genul de activitate din coloana 4	dec / DataSet / Data / CAP2_CAEM_C4			text	select2			0	0	0	0	0	0	0	187	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> text
CAP2_CAEM_C5	Genul de activitate din coloana 5	dec / DataSet / Data / CAP2_CAEM_C5			text	select2			0	0	0	0	0	0	0	188	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> text
CAP2_CAEM_C6	Genul de activitate din coloana 6	dec / DataSet / Data / CAP2_CAEM_C6			text	select2			0	0	0	0	0	0	0	189	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> text
CAP2_CAEM_C7	Genul de activitate din coloana 7	dec / DataSet / Data / CAP2_CAEM_C7			text	select2			0	0	0	0	0	0	0	190	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> text
CAP2_CAEM_C8	Genul de activitate din coloana 8	dec / DataSet / Data / CAP2_CAEM_C8			text	select2			0	0	0	0	0	0	0	191	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> text
CAP2_CAEM_C9	Genul de activitate din coloana 9	dec / DataSet / Data / CAP2_CAEM_C9			text	select2			0	0	0	0	0	0	0	192	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> text
CAP2_CAEM_C10	Genul de activitate din coloana 10	dec / DataSet / Data / CAP2_CAEM_C10			text	select2			0	0	0	0	0	0	0	193	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> text
CAP2_CAEM_C11	Genul de activitate din coloana 11	dec / DataSet / Data / CAP2_CAEM_C11			text	select2			0	0	0	0	0	0	0	194	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> text
CAP2_CAEM_C12	Genul de activitate din coloana 12	dec / DataSet / Data / CAP2_CAEM_C12			text	select2			0	0	0	0	0	0	0	195	0	@cuiio_caem_code	<? php return declarations_get_caem_list('vocabulary_18'); ?> text


Trebuie de adaugat in codul de mai jos 

// Hide Cap2  Start

// Funcție pentru a ascunde sau afișa capitolul 1.2 în funcție de TRIM
function toggleCap2(trimValue) {
    if (trimValue == 1 || trimValue == 2 || trimValue == 4) {
        // Ascundere capitol 1.2 dacă TRIM este 4
        jQuery('#header-1-2').hide();  // Ascunde headerul capitolului 1.2
        jQuery('#CAP2').hide();       // Ascunde tabelul corespunzător capitolului 1.2
        jQuery('#row-header-1, #row-header-2, #row-header-3, #row-10, #row-10, #row-30, #row-40, #row-50, #row-60, #row-70, #row-80, #row-90, #row-100, #row-110, #row-120, #row-160, #Caption_Cap2').hide();

        // Curățăm toate valorile input-urilor din capitolul 1.2
        jQuery('input[name^="CAP2"]').val('');

    } else if (trimValue == 3) {
        // Afișăm capitolul 1.2 dacă TRIM este 1, 2 sau 3
        jQuery('#header-1-2').show();  // Ascunde headerul capitolului 1.2
        jQuery('#CAP2').show();       // Ascunde tabelul corespunzător capitolului 1.2
        jQuery('#row-header-1, #row-header-2, #row-header-3, #row-10, #row-10, #row-30, #row-40, #row-50, #row-60, #row-70, #row-80, #row-90, #row-100, #row-110, #row-120, #row-160, #Caption_Cap2').show();

    }
}

// Eveniment pentru a detecta schimbarea valorii select TRIM
jQuery('select[name="TRIM"]').change(function () {
    var trimValue = jQuery(this).val();
    toggleCap2(trimValue);
});

// Apelează funcția toggleCap2 inițial dacă este nevoie
var initialTrimValue = jQuery('select[name="TRIM"]').val();
toggleCap2(initialTrimValue);

// Hide Cap2  End  


Daca TRIM nu este egal cu 3 se deselecteaza CAEM2 pentru toate colonale in CAP 2 




