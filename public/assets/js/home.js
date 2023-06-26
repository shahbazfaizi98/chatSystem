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
    var hid = $('#hid').val();
    $("#allusers").html('');
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
        //console.log(result);
        if (result.length==0) {
          $("#nouserfound").show();
        }
        
        $.each(result, function (key, val) {
          var output = '';
          var friendid = val['friendid'];
          var fullname = val['fullname'];
          output += `<div class="flex items-center justify-between py-3">
          <div class="flex flex-1 items-center space-x-4">
              <a href="profile.html">
                  <img src="`+base_url+`public/assets/images/avatars/avatar-2.jpg" class="bg-gray-200 rounded-full w-10 h-10">
              </a>
              <div class="flex flex-col">
                  <span class="block capitalize font-semibold"> ${fullname} </span>
                  <span class="block capitalize text-sm"> Australia </span>
              </div>
          </div>
          
          <button type="button" id=frnd`+friendid+` href="#" class="test btn border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800" onclick="addFriendBtn('${hid}','${friendid}');"> Add Friend </button>
      </div>`;
        $("#allusers").append(output);
        //console.log("check output",output);
        });
      }
    });
  }

  function addFriendBtn(uid,fid){

    //const div = document.querySelector('.test');
    // console.log("Ceck div----",div);return false;
    // div.addEventListener('click', () => {
    //   div.classList.add('hidden');
    // })
    //console.log("Check--------------------->",div);
    var uid = uid;
    var fid = fid;
    $.ajax({
      type: 'post',
      url: base_url + 'web/save-friend',
      dataType: 'json',
      data: {uid: uid, fid: fid},
      success: function (response){
         if(response.error_code==200){
          //div.remove();
          setTimeout(function () {
            $("#allusers").html('');
            loadmore_items();
          }, 1000);
        }
        else{
          alert(response.error_msg);
          window.location.reload();
        }
      }
    });
  }

  function load_more_posts(){
    var base_url = $('#baseurl').val();
    var offsetnum = $("#offsetnum").val();
    // $("#allposts").html('');
    $.ajax({
      url: base_url + 'web/get-post',
      data:{
        offsetnum: offsetnum
      },
      method: "POST",
      dataType : "JSON",
      beforeSend: function(){
        $('#loader').show();
      },
      success :function(data){
        $('#loader').hide();
        var result = data.posts;
        $("#offsetnum").val(10);
        console.log("hiiiiiii",result.length);
        if (result.length>9) {
          $("#btnloadmore").show();
        }
        else{
          $("#btnloadmore").hide();
        }
        
        $.each(result, function (key, val) {
          var outputone = '';
          var outputtwo = '';
          var outputthree = '';
          var outputfour = '';
          var postid = val['postid'];
          
          outputone +=`<div class="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
    
          <!-- post header-->
          <div class="flex justify-between items-center px-4 py-3">
              <div class="flex flex-1 items-center space-x-4">
                  <a href="#">
                      <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">  
                          <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-2.jpg" class="bg-gray-200 border border-white rounded-full w-8 h-8">
                      </div>
                  </a>
                  <span class="block capitalize font-semibold dark:text-gray-100"> Johnson smith </span>
              </div>
            <div>
              <a href="#"> <i class="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700"></i> </a>
              <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">
            
                  <ul class="space-y-1">
                    <li> 
                        <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                         <i class="uil-share-alt mr-1"></i> Share
                        </a> 
                    </li>
                    <li> 
                        <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                         <i class="uil-edit-alt mr-1"></i>  Edit Post 
                        </a> 
                    </li>
                    <li> 
                        <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                         <i class="uil-comment-slash mr-1"></i>   Disable comments
                        </a> 
                    </li> 
                    <li> 
                        <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                         <i class="uil-favorite mr-1"></i>  Add favorites 
                        </a> 
                    </li>
                    <li>
                      <hr class="-mx-2 my-2 dark:border-gray-800">
                    </li>
                    <li> 
                        <a href="#" class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                         <i class="uil-trash-alt mr-1"></i>  Delete
                        </a> 
                    </li>
                  </ul>
              
              </div>
            </div>
          </div>

          <div uk-lightbox>
              <a href="<?=ASSET_WEB_URL?>assets/images/post/img4.jpg">  
                  <img src="<?=ASSET_WEB_URL?>assets/images/post/img4.jpg" alt="">
              </a>
          </div>
          

          <div class="py-3 px-4 space-y-3"> 
             
              <div class="flex space-x-4 lg:font-bold">
                  <a href="#" class="flex items-center space-x-2">
                      <div class="p-2 rounded-full text-black">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" class="dark:text-gray-100">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                      </div>
                      <div> Like</div>
                  </a>
                  <a href="#" class="flex items-center space-x-2">
                      <div class="p-2 rounded-full text-black">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" class="dark:text-gray-100">
                              <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                          </svg>
                      </div>
                      <div> Comment</div>
                  </a>
                  <a href="#" class="flex items-center space-x-2 flex-1 justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" class="dark:text-gray-100">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <div> Share</div>
                  </a>
              </div>
              <div class="flex items-center space-x-3"> 
                  <div class="flex items-center">
                      <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-1.jpg" alt="" class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900">
                      <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-4.jpg" alt="" class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2">
                      <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-2.jpg" alt="" class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2">
                  </div>
                  <div class="dark:text-gray-100">
                      Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                  </div>
              </div>

              <div class="border-t pt-4 space-y-4 dark:border-gray-600">
                  <div class="flex">
                      <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                          <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-1.jpg" alt="" class="absolute h-full rounded-full w-full">
                      </div>
                      <div class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                          <p class="leading-6">In ut odio libero vulputate <urna class="i uil-heart"></urna> <i
                                  class="uil-grin-tongue-wink"> </i> </p>
                          <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"></div>
                      </div>
                  </div>
                  <div class="flex">
                      <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                          <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-1.jpg" alt="" class="absolute h-full rounded-full w-full">
                      </div>
                      <div class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                          <p class="leading-6">Nam liber tempor cum soluta nobis eleifend option <i class="uil-grin-tongue-wink-alt"></i>
                          </p>
                          <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"></div>
                      </div>
                  </div>
              </div>

              <div class="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                  <input type="text" placeholder="Add your Comment.." class="bg-transparent max-h-10 shadow-none">
                  <div class="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                      <a href="#"> <i class="uil-image"></i></a>
                      <a href="#"> <i class="uil-video"></i></a>
                  </div>
              </div>

          </div>

      </div>`;

        $("#allposts").append(outputone);
        //console.log("check output----------------->",outputone);
        });
      }
    });
  }

  function load_more_posts_items(){
    var base_url = $('#baseurl').val();
    var offsetval = $("#offsetnum").val();
    var offsetnum = parseInt(offsetval)+parseInt(10);
    // $("#allposts").html('');
    $.ajax({
      url: base_url + 'web/get-post',
      data:{
        offsetnum: offsetval
      },
      method: "POST",
      dataType : "JSON",
      beforeSend: function(){
        $('#loader').show();
      },
      success :function(data){
        $("#offsetnum").val(offsetnum);
        $('#loader').hide();
        var result = data.posts;
        console.log(result);
        if (result.length>9) {
          $("#btnloadmore").show();
        }
        else{
          $("#btnloadmore").hide();
        }
        
        $.each(result, function (key, val) {
          var outputone = '';
          var outputtwo = '';
          var outputthree = '';
          var outputfour = '';
          var postid = val['postid'];
          
          outputone +=`<div class="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
    
          <!-- post header-->
          <div class="flex justify-between items-center px-4 py-3">
              <div class="flex flex-1 items-center space-x-4">
                  <a href="#">
                      <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">  
                          <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-2.jpg" class="bg-gray-200 border border-white rounded-full w-8 h-8">
                      </div>
                  </a>
                  <span class="block capitalize font-semibold dark:text-gray-100"> Johnson smith </span>
              </div>
            <div>
              <a href="#"> <i class="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 dark:hover:bg-gray-700"></i> </a>
              <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700" uk-drop="mode: hover;pos: top-right">
            
                  <ul class="space-y-1">
                    <li> 
                        <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                         <i class="uil-share-alt mr-1"></i> Share
                        </a> 
                    </li>
                    <li> 
                        <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                         <i class="uil-edit-alt mr-1"></i>  Edit Post 
                        </a> 
                    </li>
                    <li> 
                        <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                         <i class="uil-comment-slash mr-1"></i>   Disable comments
                        </a> 
                    </li> 
                    <li> 
                        <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 hover:text-gray-800 rounded-md dark:hover:bg-gray-800">
                         <i class="uil-favorite mr-1"></i>  Add favorites 
                        </a> 
                    </li>
                    <li>
                      <hr class="-mx-2 my-2 dark:border-gray-800">
                    </li>
                    <li> 
                        <a href="#" class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md dark:hover:bg-red-600">
                         <i class="uil-trash-alt mr-1"></i>  Delete
                        </a> 
                    </li>
                  </ul>
              
              </div>
            </div>
          </div>

          <div uk-lightbox>
              <a href="<?=ASSET_WEB_URL?>assets/images/post/img4.jpg">  
                  <img src="<?=ASSET_WEB_URL?>assets/images/post/img4.jpg" alt="">
              </a>
          </div>
          

          <div class="py-3 px-4 space-y-3"> 
             
              <div class="flex space-x-4 lg:font-bold">
                  <a href="#" class="flex items-center space-x-2">
                      <div class="p-2 rounded-full text-black">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" class="dark:text-gray-100">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                      </div>
                      <div> Like</div>
                  </a>
                  <a href="#" class="flex items-center space-x-2">
                      <div class="p-2 rounded-full text-black">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" class="dark:text-gray-100">
                              <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                          </svg>
                      </div>
                      <div> Comment</div>
                  </a>
                  <a href="#" class="flex items-center space-x-2 flex-1 justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="22" height="22" class="dark:text-gray-100">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <div> Share</div>
                  </a>
              </div>
              <div class="flex items-center space-x-3"> 
                  <div class="flex items-center">
                      <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-1.jpg" alt="" class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900">
                      <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-4.jpg" alt="" class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2">
                      <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-2.jpg" alt="" class="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2">
                  </div>
                  <div class="dark:text-gray-100">
                      Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                  </div>
              </div>

              <div class="border-t pt-4 space-y-4 dark:border-gray-600">
                  <div class="flex">
                      <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                          <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-1.jpg" alt="" class="absolute h-full rounded-full w-full">
                      </div>
                      <div class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                          <p class="leading-6">In ut odio libero vulputate <urna class="i uil-heart"></urna> <i
                                  class="uil-grin-tongue-wink"> </i> </p>
                          <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"></div>
                      </div>
                  </div>
                  <div class="flex">
                      <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                          <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-1.jpg" alt="" class="absolute h-full rounded-full w-full">
                      </div>
                      <div class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
                          <p class="leading-6">Nam liber tempor cum soluta nobis eleifend option <i class="uil-grin-tongue-wink-alt"></i>
                          </p>
                          <div class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"></div>
                      </div>
                  </div>
              </div>

              <div class="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                  <input type="text" placeholder="Add your Comment.." class="bg-transparent max-h-10 shadow-none">
                  <div class="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                      <a href="#"> <i class="uil-image"></i></a>
                      <a href="#"> <i class="uil-video"></i></a>
                  </div>
              </div>

          </div>

      </div>`;

        $("#allposts").append(outputone);
        //console.log("check output----------------->",outputone);
        });
      }
    });
  }

  $('#submitBtn').click(function(){
    $('#userinfoForm').validate();
    if($('#userinfoForm').valid()){

      var uid = $("#uid").val();
      var fullname = $("#fullname").val();
      var aboutme = $("#aboutme").val();
      var location = $("#location").val();
      var workingat = $("#workingat").val();
      var relationship = $("#relationship").val();
      // var createdat = $("#createdat").val();
      // var modifiedat = $("#modifiedat").val();
        
        $.ajax({
          type : "post",
          url : "submitUserinfo",
          dataType : "JSON",
          data : {uid: uid, fullname: fullname, aboutme: aboutme, location: location, workingat: workingat, relationship: relationship},
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


  function dataofalluser(){

    $.ajax({
      type : "POST",
      url : base_url + 'web/get-all-user-data',
      dataType : "JSON",
      data : {},
      success : function(response){
        var posts = response.post.total;
        var friends = response.friends.totalfriends;
        var request = response.requests.totalrequests;
        // console.log(response);
        $('#userpostdata').text(posts);
        $('#userfrienddata').text(friends);
        $('#userrequestdata').text(request);
        
      }
    }) 

  }

  function loadfriend_msg(){
    var base_url = $('#baseurl').val();
    var hid = $('#hid').val();
    $("#allusers").html('');
    $.ajax({
      url: base_url + 'web/friend-list',
      data:{
        
      },
      dataType : "JSON",
      beforeSend: function(){
        $('#loader').show();
      },
      success :function(data){
        $('#loader').hide();
        var result = data.peoples;
        //console.log(result);
        if (result.length==0) {
          $("#nouserfound").show();
        }
        
        $.each(result, function (key, val) {
          var output = '';
          var friendid = val['friendid'];
          var fullname = val['fullname'];
          output += `<li>
          <a href="#" class="block flex items-center py-3 px-4 space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="w-12 h-12 rounded-full relative flex-shrink-0">
                  <img src="assets/images/avatars/avatar-2.jpg" alt="" class="absolute h-full rounded-full w-full">
                  <span class="absolute bg-green-500 border-2 border-white bottom-0 h-3 m-0.5 right-0 rounded-full shadow-md w-3"></span>
              </div>
              <div class="flex-1 min-w-0 relative text-gray-500">
                  <h4 class="text-black font-semibold dark:text-white">${fullname}</h4>
                  <span class="absolute right-0 top-1 text-xs">Sun</span>
                  <p class="truncate">Esmod tincidunt ut laoreet</p>
              </div>
          </a>
      </li>`;
        $("#friendlist").append(output);
        //console.log("check output",output);
        });
      }
    });
  }

  function loadfriend_requested(){
    var base_url = $('#baseurl').val();
    var hid = $('#hid').val();
    $("#allusers").html('');
    $.ajax({
      url: base_url + 'web/get-friend-request',
      data:{
        
      },
      dataType : "JSON",
      beforeSend: function(){
        $('#loader').show();
      },
      success :function(data){
        $('#loader').hide();
        var result = data.peoples;
        //console.log(result);
        if (result.length==0) {
          $("#nouserfound").show();
        }
        
        $.each(result, function (key, val) {
          var output = '';
          var friendid = val['friendid'];
          var fullname = val['fullname'];
          output += `<div class="flex items-center justify-between py-3">
          <div class="flex flex-1 items-center space-x-4">
              <a href="profile.html">
                  <img src="`+base_url+`public/assets/images/avatars/avatar-2.jpg" class="bg-gray-200 rounded-full w-10 h-10">
              </a>
              <div class="flex flex-col">
                  <span class="block capitalize font-semibold"> ${fullname} </span>
                  <span class="block capitalize text-sm"> Australia </span>
              </div>
          </div>
          
          <button type="button" id=frnd`+friendid+` href="#" class="test btn border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800" style="background: #2ea12ec7;color:#fff;" onclick="addFriendRequestBtn('${hid}','${friendid}','1');"> Accept </button> &nbsp;&nbsp;&nbsp;

          <button type="button" id=frnd`+friendid+` href="#" class="test btn border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-black hover:border-pink-600 dark:border-gray-800" style="background: #1776edd1;color:#fff;" onclick="addFriendRequestBtn('${hid}','${friendid}','3');"> Reject </button> &nbsp;&nbsp;&nbsp;

          <button type="button" id=frnd`+friendid+` href="#" class="test btn border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800" style="background: #e31e1ed1;color:#fff;" onclick="addFriendRequestBtn('${hid}','${friendid}','2');"> Block </button>
      </div>`;
        $("#friendRequestedDiv").append(output);
        //console.log("check output",output);
        });
      }
    });
  }

  function addFriendRequestBtn(uid,fid,flag){

    //const div = document.querySelector('.test');
    // console.log("Ceck div----",div);return false;
    // div.addEventListener('click', () => {
    //   div.classList.add('hidden');
    // })
    //console.log("Check--------------------->",div);
    var uid = uid;
    var fid = fid;
    var flag = flag;
    var status = status
  
    $.ajax({
      type: 'post',
      url: base_url + 'web/save-friend-request',
      dataType: 'json',
      data: {uid: uid, fid: fid,flag:flag},
      success: function (response){
         if(response.error_code==200){
          dataofalluser();
          window.location.reload();
        }
        else{
          alert(response.error_msg);
          window.location.reload();
        }
      }
    });
  }

  function loadfriends_list(){
    var base_url = $('#baseurl').val();
    var hid = $('#hid').val();
    $("#allusers").html('');
    $.ajax({
      url: base_url + 'web/get-friends',
      data:{
        
      },
      dataType : "JSON",
      beforeSend: function(){
        $('#loader').show();
      },
      success :function(data){
        $('#loader').hide();
        var result = data.peoples;
        //console.log(result);
        if (result.length==0) {
          $("#nofriends").show();
        }
        
        $.each(result, function (key, val) {
          var output = '';
          var friendid = val['friendid'];
          var fullname = val['fullname'];
          output += `<div class="flex items-center justify-between py-3">
          <div class="flex flex-1 items-center space-x-4">
              <a href="profile.html">
                  <img src="`+base_url+`public/assets/images/avatars/avatar-2.jpg" class="bg-gray-200 rounded-full w-10 h-10">
              </a>
              <div class="flex flex-col">
                  <span class="block capitalize font-semibold"> ${fullname} </span>
                  <span class="block capitalize text-sm"> Australia </span>
              </div>
          </div>
          
          <button type="button" id=frnd`+friendid+` href="#" class="test btn border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800" style="background: #1776edd1;color:#fff;" onclick="addFriendsBtn('${hid}','${friendid}','4');"> Send Message </button> &nbsp;&nbsp;&nbsp;

          <button type="button" id=frnd`+friendid+` href="#" class="test btn border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800" style="background: #2ea12ec7;color:#fff;" onclick="addFriendsBtn('${hid}','${friendid}','2');"> Remove </button> &nbsp;&nbsp;&nbsp;

          <button type="button" id=frnd`+friendid+` href="#" class="test btn border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800" style="background: #e31e1ed1;color:#fff;" onclick="addFriendsBtn('${hid}','${friendid}','3');"> Block </button>
      </div>`;
        $("#friendsDiv").append(output);
        //console.log("check output",output);
        });
      }
    });
  }

  function addFriendsBtn(uid,fid,flag){

    //const div = document.querySelector('.test');
    // console.log("Ceck div----",div);return false;
    // div.addEventListener('click', () => {
    //   div.classList.add('hidden');
    // })
    //console.log("Check--------------------->",div);
    var uid = uid;
    var fid = fid;
    var flag = flag;
  
    $.ajax({
      type: 'post',
      url: base_url + 'web/save-friends',
      dataType: 'json',
      data: {uid: uid, fid: fid,flag:flag},
      success: function (response){
         if(response.error_code==200){
          //loadfriend_requested();
          window.location.reload();
        }
        else{
          alert(response.error_msg);
          window.location.reload();
        }
      }
    });
  }  
