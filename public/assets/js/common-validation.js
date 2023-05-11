    
$(document).ready(function (){

    $("#addroomForm").validate({
      errorClass: "error",
      rules: {
        roomno: {
          required: true
        },
        roomtype: {
          required: true
        },
      },
      messages: {
        roomno: {
          required: "Please enter room no.",
        },
        roomtype: {
          required: "Please select user type",
        },
      },

      submitHandler: function (form) {
        form.submit();
      }
    });

    // Login Form
    $("#loginForm").validate({
      errorClass: "error",
      rules: {
        email: {
          required: true
        },
        password: {
          required: true
        },
      },
      messages: {
        email: {
          required: "Please Enter your Email Id",
        },
        password: {
          required: "Please Enter your Password",
        },
      },

      submitHandler: function (form) {
        form.submit();
      }
    });


    // Register Form 
    $("#registerForm").validate({
      errorClass: "error",
      rules: {
        fullname: {
          required: true
        },
        username: {
          required: true
        },
        email: {
          required: true
        },
        password: {
          required: true
        },
        confirmpassword: {
          required: true,
          equalTo: "#password",
        },
        aboutme: {
          required: true
        },
        location: {
          required: true
        },
        workingat: {
          required: true
        },
        relationship: {
          required: true
        },
        referralcode: {
          required: true
        },
      },
      messages: {
        fullname: {
          required: "Please enter Full Name.",
        },
        username: {
          required: "Please enter Username.",
        },
        email: {
          required: "Please enter Email.",
        },
        password: {
          required: "Please enter Password.",
        },
        aboutme: {
          required: "Please enter About Yourself.",
        },
        location: {
          required: "Please enter your Location.",
        },
        workingat: {
          required: "Please enter your Working Place.",
        },
        relationship: {
          required: "Please select your Relationhsip Status.",
        },
        referralcode: {
          required: "Please enter Referral Code.",
        },
      },

      submitHandler: function (form) {
        form.submit();
      }
    });
});












