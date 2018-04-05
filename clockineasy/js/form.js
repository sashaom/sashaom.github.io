$(document).ready(function() {
    $('#contactForm').validate({
        rules: {
            
             email: {
                required: true,
            },
            pass: {
                required: true,
            }
        },
        errorPlacement: function(error,element) {
            return true;
        }
    });

    $('#contactForm').submit(function(e) {
        e.preventDefault();
        if ($(this).valid()) {
            $.ajax({
                    type: 'POST',
                    url: 'php/form.php',
                    data: $(this).serialize()
                })
                formSuccess();
        }
        else {
            formError();
        }
    });
});

function formError() {
    alert  ('error');
}

function formSuccess() {
   alert  ('done');
}
