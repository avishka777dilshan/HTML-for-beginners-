$(function(){
    $("form[name='registration']").validate({
        rules:{
            name:"required",  
            email:{ required: true, email: true},
            password:{ required:true, minlength:5},
            confirmpassword:{ required:true, minlength:5,equalTo:"#password"}
        },
        messages:{
            name: "Please enter your name",
            email:{required:"please enter your email address", email:"Please enter a valid e mail address"},
            password:{required: "Please provide a password", minlength:"Your password must be consist of at least 5 characters"},
            confirmpassword:{ required:"Please re-enter the password", minlength:"Your password must be consist of at least 5 characters",equalTo: "Please enter the same as above"}
        }
    });
});