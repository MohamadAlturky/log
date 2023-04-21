$(document).ready(function () {
    
    $('body').animate({ 'opacity': '100' }, 'middle');
    


    $.validator.addMethod('validateEmail', function (value, element) {
        re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
        return re.test(value)
    })
    $.validator.addMethod('hasLowerCase', function (value, element) {

        for(var i = 0; i < value.length; i++){
            if(value[i] <= 'z' && value[i] >= 'a'){
                return true
            }
        }
        return false
    })
    $.validator.addMethod('hasUpperCase', function (value, element) {

        for(var i = 0; i < value.length; i++){
            if(value[i] <= 'Z' && value[i] >= 'A'){
                return true
            }
        }
        return false
    })
    $.validator.addMethod('hasNumber', function (value, element) {

        for(var i = 0; i < value.length; i++){
            if(value[i] <= '9' && value[i] >= '0'){
                return true
            }
        }
        return false
    })
    $.validator.addMethod('hasSpecialCharacter', function (value, element) {
        const specialCharacters = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
        for (let i = 0; i < value.length; i++) {
          if (specialCharacters.includes(value[i])) {
            return true;
          }
        }
        return false;
    })



    $("#signup-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                validateEmail: true
            },
            password: {
                required: true,
                minlength: 8,
                hasLowerCase:true,
                hasUpperCase:true,
                hasNumber:true,
                hasSpecialCharacter:true
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            },
            agree_terms: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name"
            },
            email: {
                required: "Please enter your email address",
                validateEmail: "Please enter a valid email address"

            },
            password: {
                required: "Please enter your password",
                minlength: "Your password must be at least 8 characters long",
                hasLowerCase:"your password must have lowercase characters",
                hasUpperCase:"your password must have uppercase characters",
                hasNumber:"your password must have a number",
                hasSpecialCharacter:"your password must have a special character"
            },
            confirm_password: {
                required: "Please confirm your password",
                equalTo: "Your passwords do not match"
            },
            agree_terms: {
                required: "Please agree to the terms and conditions"
            }
        },
        errorElement: "small",
        errorClass: "text-danger",
        errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                element.closest('.form-group').append(error);
            }
        ,
        highlight: function (element) {
            $(element).closest(".form-group").removeClass("has-success").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error").addClass("has-success");
        }
    });

    $('#submit').click(function (e) {
        e.preventDefault();
        if ($('#signup-form').valid()) {
            window.location.href = '';
        }
    });
});