var base_url = $('#baseurl').val();
var asset_url = $('#base_url').attr('asset');

    $('#vendor_price').keypress(function(event) {
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });


  $('#addRoomBtn').click(function(){
    $('#addroomForm').validate();
    if($('#addroomForm').valid()){
        var roomno = $('#roomno').val();
        var roomtype = $('#roomtype').val();
        $.ajax({
        type: 'post',
        url: base_url + 'web/submitAddRoomForm',
        dataType: 'json',
        beforeSend: function(){
            $('#loader').show();
            $('#final-book-btn').prop('disabled', true);
        },
        data: {roomno: roomno, roomtype: roomtype},
        success: function (response){
           if(response.error_code==200){
              alert(response.error_msg);
              window.location.reload();
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }

        });
    }
  });  

  // $('#login-btn').click(function(){
  //   $('#loginForm').validate();
  //   if($('#loginForm').valid()){
  //       var loginid = $('#username').val();
  //       var password = $('#password').val();
  //       var usertype = $('#usertype').val();
  //       $.ajax({
  //       type: 'post',
  //       url: base_url + 'web/login',
  //       dataType: 'json',
  //       beforeSend: function(){
  //           $('#loader').show();
  //           $('#final-book-btn').prop('disabled', true);
  //       },
  //       data: {loginid: loginid, password: password, usertype: usertype},
  //       success: function (response){
  //           $('#loader').hide();
  //           if (response.error_code == 200){
  //           $('#login-form-error').addClass(response.error_class).html(response.error_msg).show();
  //           setTimeout(function(){ $('#login-form-error').removeClass(response.error_class).html('');
  //           window.location.href =base_url+"web/dashboard"  
  //           }, 3000);
  //       } else if (response.error_code == 100) {
  //           $('#login-btn').prop('disabled', false);
  //           $('#login-form-error').addClass(response.error_class).html(response.error_msg).show();
  //           setTimeout(function(){ $('#login-form-error').removeClass(response.error_class).html(''); }, 3000);
  //       }
  //       }

  //       });
  //   }
  // });

  $('#loginBtn').click(function(){
    $('#loginForm').validate();
    if($('#loginForm').valid()){
      alert("Login Successfully");
    }
  });

  $('#registerBtn').click(function(){
    $('#registerForm').validate();
    if($('#registerForm').valid()){
          alert("User Registered Successfully.");
    }
  }); 

  $('#email').blur(function(){
    //alert("Email already exist");
  });