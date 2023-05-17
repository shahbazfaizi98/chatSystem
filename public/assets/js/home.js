var base_url = $('#baseurl').val();
var asset_url = $('#base_url').attr('asset');
console.log("Check base------>",base_url);

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
      // var email = $('#email').val();
      var loginid = $('#email').val();
      var password = $('#password').val();

      $.ajax({
        type: 'post',
        url: 'web/login',
        dataType: 'json',
        beforeSend: function(){
                    $('#loader').show();
                    $('#final-book-btn').prop('disabled', true);
        },
        data: {loginid: loginid, password: password},
        success: function(response){
          $('#loader').hide();
            if (response.error_code == 200){
              $('#login-form-error').addClass(response.error_class).html(response.error_msg).show();
              setTimeout(function(){ $('#login-form-error').removeClass(response.error_class).html('');
              window.location.href =base_url+"web/dashboard"  
              }, 3000);
            }
            else if (response.error_code == 100) {
              $('#login-btn').prop('disabled', false);
              $('#login-form-error').addClass(response.error_class).html(response.error_msg).show();
              setTimeout(function(){ $('#login-form-error').removeClass(response.error_class).html(''); }, 3000);
            }
        }
      });
    }
  });



  $('#registerBtn').click(function(){
    $('#registerForm').validate();
    if($('#registerForm').valid()){
      var fullname = $("#fullname").val();
      var username = $("#username").val();
      var email = $("#email").val();
      var password = $("#password").val();
      // var confirmpassword = $("#confirmpassword").val();
      var aboutme = $("#aboutme").val();
      var location = $("#location").val();
      var workingat = $("#workingat").val();
      var relationship = $("#relationship").val();
      // var referralcode = $("#referralcode").val();
      var createdat = $("#createdat").val();
      var modifiedat = $("#modifiedat").val();
        
        $.ajax({
          type : "post",
          url : "submitRegisteredUser",
          dataType : "JSON",
          data : {fullname: fullname, username: username, email: email, password: password, aboutme: aboutme, location: location, workingat: workingat, relationship: relationship, createdat: createdat, modifiedat: modifiedat},
          success : function(response){
            if(response.error_code == 200){
              alert(response.error_msg);
              window.location.reload();
            }
            else if(response.error_code == 100){
              alert(response.error_msg);
              window.location.reload();
            }
          }
        }) 
    }
  }); 

  $('#email').blur(function(){
    var email = $("#email").val();
    if(email!=''){

      $.ajax({
        type: 'post',
        url: base_url + 'web/check-email',
        dataType: 'json',
        data: {email: email},
        success: function (response){
           if(response.error_code==200){
              alert(response.error_msg); 
              return false;
            }
        }
      });
    }
  });

  $('#username').blur(function(){
    var username = $("#username").val();
    if(username!=''){

      $.ajax({
        type: 'post',
        url: base_url + 'web/check-username',
        dataType: 'json',
        data: {username: username},
        success: function (response){
          if(response.error_code==200){
            alert(response.error_msg);
            return false;
          }
        }
      });
    }
  });

  $('#referralcode').blur(function(){
    var referralcode = $("#referralcode").val();
    if(referralcode!=''){

      $.ajax({
        type: 'post',
        url: base_url + 'web/check-referralcode',
        dataType: 'json',
        data: {referralcode: referralcode},
        success: function (response){
           if(response.error_code==100){
            alert(response.error_msg); 
            return false;
          }
        }
      });
    }
  });


  function loadmore_items(){
    var base_url = $('#baseurl').val();
    $.ajax({
      url: base_url + 'web/get-people',
      data:{
        
      },
      dataType : "JSON",
      beforeSend: function(){
        $('#loader').show();
      },
      success :function(data){
        $('#loader').hide();
        var result = data.peoples;
        //console.log(asset_url);
        $.each(result, function (key, val) {
          var output = '';
          output += `<div class="flex items-center justify-between py-3">
          <div class="flex flex-1 items-center space-x-4">
              <a href="profile.html">
                  <img src="`+base_url+`public/assets/images/avatars/avatar-2.jpg" class="bg-gray-200 rounded-full w-10 h-10">
              </a>
              <div class="flex flex-col">
                  <span class="block capitalize font-semibold"> Johnson smith </span>
                  <span class="block capitalize text-sm"> Australia </span>
              </div>
          </div>
          
          <a href="#" class="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"> Add Friend </a>
      </div>`;
        $("#allusers").append(output);
        //console.log("check output",output);
        });
      }
    });
  }


  
