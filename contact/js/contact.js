function ssnFormat(){
    $("#ssn").on('blur change', function () {
        text = $(this).val().replace(/(\d{3})(\d{2})(\d{4})/, "$3-$2-$4");
        if ($(this).val() == '' || $(this).val().match(text) || $(this).val().length == 0) {
            $(this).removeClass('valid').addClass('invalid');
        }else {
            $(this).removeClass('invalid').addClass('valid');
        }
    });
}

$( "#ssn" ).on('blur change', function() {
        ssnFormat();
    });
