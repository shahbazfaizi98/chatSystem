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

  $('#login-btn').click(function(){
    $('#loginForm').validate();
    if($('#loginForm').valid()){
        var loginid = $('#username').val();
        var password = $('#password').val();
        var usertype = $('#usertype').val();
        $.ajax({
        type: 'post',
        url: base_url + 'web/login',
        dataType: 'json',
        beforeSend: function(){
            $('#loader').show();
            $('#final-book-btn').prop('disabled', true);
        },
        data: {loginid: loginid, password: password, usertype: usertype},
        success: function (response){
            $('#loader').hide();
            if (response.error_code == 200){
            $('#login-form-error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#login-form-error').removeClass(response.error_class).html('');
            window.location.href =base_url+"web/dashboard"  
            }, 3000);
        } else if (response.error_code == 100) {
            $('#login-btn').prop('disabled', false);
            $('#login-form-error').addClass(response.error_class).html(response.error_msg).show();
            setTimeout(function(){ $('#login-form-error').removeClass(response.error_class).html(''); }, 3000);
        }
        }

        });
    }
  });

  /*
	Function Name: adduserForm
	Created Date: 24-02-2023
	Created By: Sajda & Saziya
  */
  $("#addUserFormBtn").click(function(){
    $("#adduserForm").validate();
    if($("#adduserForm").valid()){

      var fullname = $("#fullname").val();
      var email = $("#email").val();
      var mobile = $("#mobile").val();
      var dob = $("#dob").val();
      var bloodgroup = $("#bloodgroup").val();
      var country = $("#country").val();
      var state = $("#state").val();
      var city = $("#city").val();
      var departmenttype = $("#departmenttype").val();
      var roletype = $("#roletype").val();
      var registeredthrough = $("#registeredthrough").val();
      var password = $("#password").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/submitaddUserForm',
        dataType: 'json',
        data: {fullname: fullname, email: email, mobile: mobile, dob: dob, bloodgroup: bloodgroup, country: country, state: state, city: city, departmenttype: departmenttype, roletype: roletype, registeredthrough: registeredthrough, password: password},
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
  /*End adduserForm*/

  /*
	Function Name: updateuserForm
	Created Date: 03-03-2023
	Created By: Sajda & Saziya
  */
  $("#updateUserFormBtn").click(function(){
    $("#updateuserForm").validate();
    if($("#updateuserForm").valid()){

      var uid = $("#uid").val();
      var fullname = $("#fullname").val();
      var email = $("#email").val();
      var mobile = $("#mobile").val();
      var dob = $("#dob").val();
      var bloodgroup = $("#bloodgroup").val();
      var country = $("#country").val();
      var state = $("#state").val();
      var city = $("#city").val();
      var departmenttype = $("#departmenttype").val();
      var roletype = $("#roletype").val();
      var registeredthrough = $("#registeredthrough").val();
      

      $.ajax({
        type: 'post',
        url: base_url + 'web/submitupdateUserForm',
        dataType: 'json',
        data: {uid: uid, fullname: fullname, email: email, mobile: mobile, dob: dob, bloodgroup: bloodgroup, country: country, state: state, city: city, departmenttype: departmenttype, roletype: roletype, registeredthrough: registeredthrough},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href='listuser';
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }
  });
  /*End updateuserForm*/

  $("#addPatientBtn").click(function(){
    $("#patientForm").validate();
    //if($("#patientForm").valid()){

      var pname = $("#pname").val();
      var email = $("#email").val();
      var mobile = $("#mobile").val();
      var dob = $("#dob").val();
      var prooftype = $("#prooftype").val();
      var paddress = $("#paddress").val();
      var caddress = $("#caddress").val();
      var referenceid = $("#referenceid").val();
      var gender = $("#gender").val();
      var maritalstatus = $("#maritalstatus").val();
      var bloodgroup = $("#bloodgroup").val();
      var weight = $("#weight").val();
      var height = $("#height").val();
      var disabled = $("#disabled").val();
      var disable_specify = $("#disable_specify").val();
      var registered_at = $("#registered_at").val();
      var referredby = $("#referredby").val();
      var referredcno = $("#referredcno").val();
      var wardtype = $("#wardtype").val();
      var country = $("#country").val();
      var state = $("#state").val();
      var city = $("#city").val();
     

      $.ajax({
        type: 'post',
        url: base_url + 'web/submitPatientForm',
        dataType: 'json',
        data: {pname: pname, email: email, mobile: mobile, dob: dob, prooftype: prooftype, paddress: paddress, caddress: caddress, referenceid: referenceid, gender: gender, maritalstatus: maritalstatus, bloodgroup: bloodgroup, weight: weight, height: height, disabled: disabled, disable_specify, registered_at: registered_at, referredby: referredby, referredcno: referredcno, wardtype: wardtype, country: country, state: state, city: city},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href= base_url + 'web/addappointment?pid='+response.pid;
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    //}
  });

  $("#updatePatientBtn").click(function(){
    $("#updatepatientForm").validate();
    if($("#updatepatientForm").valid()){

      var pid = $("#pid").val();
      var pname = $("#pname").val();
      var email = $("#email").val();
      var mobile = $("#mobile").val();
      var dob = $("#dob").val();
      var prooftype = $("#prooftype").val();
      var paddress = $("#paddress").val();
      var caddress = $("#caddress").val();
      var referenceid = $("#referenceid").val();
      var gender = $("#gender").val();
      var maritalstatus = $("#maritalstatus").val();
      var bloodgroup = $("#bloodgroup").val();
      var weight = $("#weight").val();
      var height = $("#height").val();
      var disabled = $("#disabled").val();
      var disable_specify = $("#disable_specify").val();
      var registered_at = $("#registered_at").val();
      var referredby = $("#referredby").val();
      var referredcno = $("#referredcno").val();
      var wardtype = $("#wardtype").val();
      var country = $("#country").val();
      var state = $("#state").val();
      var city = $("#city").val();
      var password = $("#password").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/submitupdatePatientForm',
        dataType: 'json',
        data: {pid: pid, pname: pname, email: email, mobile: mobile, dob: dob, prooftype: prooftype, paddress: paddress, caddress: caddress, referenceid: referenceid, gender: gender, maritalstatus: maritalstatus, bloodgroup: bloodgroup, weight: weight, height: height, disabled: disabled, disable_specify, registered_at: registered_at, referredby: referredby, referredcno: referredcno, wardtype: wardtype, country: country, state: state, city: city, password: password},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href='listpatient';
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }
  });
/*end*/

  /*
	Function Name: addAppointmentForm
	Created Date: 12-03-2023
	*/
  $("#addAppointmentBtn").click(function(){
    $("#addAppointmentForm").validate();
    //if($("#addAppointmentForm").valid()){

      var appoint_date = $("#appoint_date").val();
      var appoint_time = $("#appoint_time").val();
      var docid = $("#docid").val();
      var pcase = $("#case").val();
      var adminid = $("#adminid").val();
      var pid = $("#pid").val();
      
      $.ajax({
        type: 'post',
        url: base_url + 'web/submitaddAppointmentForm',
        dataType: 'json',
        data: {appoint_date: appoint_date, appoint_time: appoint_time, docid: docid, pcase: pcase, adminid: adminid, pid:pid},
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
    //}
  });
  /*End addAppointmentForm*/

  /*
	Function Name: updateAppointmentForm
	Created Date: 12-03-2023
	*/
  $("#updateAppointmentBtn").click(function(){
    $("#updateAppointmentForm").validate();
    if($("#updateAppointmentForm").valid()){

      var aid = $("#aid").val();
      var appoint_date = $("#appoint_date").val();
      var appoint_time = $("#appoint_time").val();
      var appoint_refid = $("#appoint_refid").val();
      var confirm_date = $("#confirm_date").val();
      var confirm_time = $("#confirm_time").val();
      var cancel_date = $("#cancel_date").val();
      var cancel_time = $("#cancel_time").val();
      var cancellationreason = $("#cancellationreason").val();
      var rescheduled_date = $("#rescheduled_date").val();
      var rescheduled_time = $("#rescheduled_time").val();
      var rescheduled_reason = $("#rescheduled_reason").val();
      var rescheduled_by = $("#rescheduled_by").val();
      var adminid = $("#adminid").val();
      
      $.ajax({
        type: 'post',
        url: base_url + 'web/submitupdateAppointmentForm',
        dataType: 'json',
        data: {aid: aid, appoint_date: appoint_date, appoint_time: appoint_time, appoint_refid: appoint_refid, confirm_date: confirm_date, confirm_time: confirm_time, cancel_date: cancel_date, cancel_time: cancel_time, cancellationreason: cancellationreason, rescheduled_date: rescheduled_date, rescheduled_time: rescheduled_time, rescheduled_reason: rescheduled_reason, rescheduled_by: rescheduled_by, adminid: adminid},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href='listappointment';
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }
  });
  /*End updateAppointmentForm*/

  /*
	Function Name: addDepartmentForm
	Created Date: 12-03-2023
	*/
  $("#addDepartmentBtn").click(function(){
    $("#addDepartmentForm").validate();
    if($("#addDepartmentForm").valid()){

      var dname = $("#dname").val();
      var d_description = $("#d_description").val();
      
      $.ajax({
        type: 'post',
        url: base_url + 'web/submitaddDepartmentForm',
        dataType: 'json',
        data: {dname: dname, d_description: d_description},
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
  /*End addDepartmentForm*/

  /*
	Function Name: updateDepartmentForm
	Created Date: 12-03-2023
	*/
  $("#updateDepartmentBtn").click(function(){
    $("#updateDepartmentForm").validate();
    if($("#updateDepartmentForm").valid()){

      var did = $("#did").val();
      var dname = $("#dname").val();
      var d_description = $("#d_description").val();
      
      $.ajax({
        type: 'post',
        url: base_url + 'web/submitupdateDepartmentForm',
        dataType: 'json',
        data: {did: did, dname: dname, d_description: d_description},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href='listdepartment';
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }
  });
  /*End updateDepartmentForm*/

  /*
	Function Name: addhelperForm
	Created Date: 26-02-2023
	Created By: Saziya
	*/
  $("#addHelperFormBtn").click(function(){
    $("#addhelperForm").validate();
    if($("#addhelperForm").valid()){

      var helpername = $("#helpername").val();
      var helperemail = $("#email").val();
      var helpermobile = $("#mobile").val();
      var prooftype = $("#prooftype").val();
      var govid = $("#govid").val();
      var gender = $("#gender").val();
      var dob = $("#dob").val();
      var maritalstatus = $("#maritalstatus").val();
      var bloodgroup = $("#bloodgroup").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/submitaddHelperForm',
        dataType: 'json',
        data: {helpername: helpername, helperemail: helperemail, helpermobile: helpermobile, prooftype: prooftype, govid: govid, gender: gender, dob: dob, maritalstatus: maritalstatus, bloodgroup: bloodgroup},
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
  /*End addhelperForm*/

  /*
	Function Name: updatehelperForm
	Created Date: 02-03-2023
	Created By: Saziya
	*/
  $("#updateHelperFormBtn").click(function(){
    $("#updatehelperForm").validate();
    if($("#updatehelperForm").valid()){

      var hid = $("#hid").val();
      var helpername = $("#helpername").val();
      var helperemail = $("#helperemail").val();
      var helpermobile = $("#helpermobile").val();
      var prooftype = $("#prooftype").val();
      var govid = $("#govid").val();
      var gender = $("#gender").val();
      var dob = $("#dob").val();
      var maritalstatus = $("#maritalstatus").val();
      var bloodgroup = $("#bloodgroup").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/submitupdateHelperForm',
        dataType: 'json',
        data: {hid: hid, helpername: helpername, helperemail: helperemail, helpermobile: helpermobile, prooftype: prooftype, govid: govid, gender: gender, dob: dob, maritalstatus: maritalstatus, bloodgroup: bloodgroup},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href='listhelper';
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }
  });
  /*End updatehelperForm*/

  /*
	Function Name: addAssignHelperForm
	Created Date: 10-03-2023
	Created By: Saziya
	*/

  $("#addAssignHelperBtn").click(function(){
    $("#addAssignHelperForm").validate();
    if($("#addAssignHelperForm").valid()){

      var assignedby = $("#assignedby").val();
      
      $.ajax({
        type: 'post',
        url: base_url + 'web/submitAddAssignHelperForm',
        dataType: 'json',
        data: {assignedby: assignedby},
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

  $("#assignHelperBtn").click(function(){
    $("#assignnewhelperForm").validate();
    if($("#assignnewhelperForm").valid()){

      var pid = $("#pid").val();
      var hid = $("#getHelper").val(); 
      
      $.ajax({
        type: 'post',
        url: base_url + 'web/save-new-helper',
        dataType: 'json',
        data: {pid: pid, hid:hid},
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
  /*End addAssignHelperForm*/

  /*
	Function Name: updateAssignHelperForm
	Created Date: 10-03-2023
	Created By: Saziya
	*/
  $("#updateAssignHelperBtn").click(function(){
    $("#updateassignhelperForm").validate();
    if($("#updateassignhelperForm").valid()){

      var assignhid = $("#assignhid").val();
      var assignedby = $("#assignedby").val();
      
      $.ajax({
        type: 'post',
        url: base_url + 'web/submitupdateAssignHelper',
        dataType: 'json',
        data: {assignhid: assignhid, assignedby: assignedby},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href='listassignhelper';
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }
  });
  /*End updateAssignHelperForm*/
  
  /*
	Function Name: adddoctorForm
	Created Date: 27-02-2023
	Created By: Sajda
	*/
  $("#addDoctorFormBtn").click(function(){
    $("#adddoctorForm").validate();
    if($("#adddoctorForm").valid()){

      var docname = $("#docname").val();
      var docemail = $("#docemail").val();
      var docmobile = $("#docmobile").val();
      var licenseno = $("#licenseno").val();
      var prooftype = $("#prooftype").val();
      var govid = $("#govid").val();
      var paddress = $("#paddress").val();
      var caddress = $("#caddress").val();
      var specialisation = $("#specialisation").val();
      var gender = $("#gender").val();
      var age = $("#age").val();
      var joining_date = $("#joining_date").val();
      var appoint_day = $("#appoint_day").val();
      var appoint_time = $("#appoint_time").val();
      var timetype = $("#timetype").val();
      var hqualification = $("#hqualification").val();
      var designation = $("#designation").val();
      var qualified_from = $("#qualified_from").val();
      var yof_exp = $("#yof_exp").val();
      var bloodgroup = $("#bloodgroup").val();
      var lastemployedby = $("#lastemployedby").val();
      var maritalstatus = $("#maritalstatus").val();
      var country = $("#country").val();
      var state = $("#state").val();
      var city = $("#city").val();
      var password = $("#password").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/submitaddDoctorForm',
        dataType: 'json',
        data: {docname: docname, docemail: docemail, docmobile: docmobile, licenseno: licenseno, prooftype: prooftype, govid: govid, paddress: paddress, caddress: caddress, specialisation: specialisation, gender: gender, age: age, joining_date: joining_date, appoint_day: appoint_day, appoint_time: appoint_time, timetype: timetype, hqualification: hqualification, designation: designation, qualified_from: qualified_from, yof_exp: yof_exp, bloodgroup: bloodgroup, lastemployedby: lastemployedby, maritalstatus: maritalstatus, country: country, state: state, city: city, password: password},
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
  /*End adddoctorForm*/

  /*
	Function Name: updatedoctorForm
	Created Date: 04-03-2023
	Created By: Sajda
	*/
  $("#updateDoctorFormBtn").click(function(){
    $("#updatedoctorForm").validate();
    if($("#updatedoctorForm").valid()){

      var docid = $("#docid").val();
      var docname = $("#docname").val();
      var docemail = $("#docemail").val();
      var docmobile = $("#docmobile").val();
      var licenseno = $("#licenseno").val();
      var prooftype = $("#prooftype").val();
      var govid = $("#govid").val();
      var paddress = $("#paddress").val();
      var caddress = $("#caddress").val();
      var specialisation = $("#specialisation").val();
      var gender = $("#gender").val();
      var age = $("#age").val();
      var joining_date = $("#joining_date").val();
      var appoint_day = $("#appoint_day").val();
      var appoint_time = $("#appoint_time").val();
      var timetype = $("#timetype").val();
      var hqualification = $("#hqualification").val();
      var designation = $("#designation").val();
      var qualified_from = $("#qualified_from").val();
      var yof_exp = $("#yof_exp").val();
      var bloodgroup = $("#bloodgroup").val();
      var lastemployedby = $("#lastemployedby").val();
      var maritalstatus = $("#maritalstatus").val();
      var country = $("#country").val();
      var state = $("#state").val();
      var city = $("#city").val();
      var password = $("#password").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/submitupdateDoctorForm',
        dataType: 'json',
        data: {docid: docid, docname: docname, docemail: docemail, docmobile: docmobile, licenseno: licenseno, prooftype: prooftype, govid: govid, paddress: paddress, caddress: caddress, specialisation: specialisation, gender: gender, age: age, joining_date: joining_date, appoint_day: appoint_day, appoint_time: appoint_time, timetype: timetype, hqualification: hqualification, designation: designation, qualified_from: qualified_from, yof_exp: yof_exp, bloodgroup: bloodgroup, lastemployedby: lastemployedby, maritalstatus: maritalstatus, country: country, state: state, city: city, password: password},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href='listdoctor';
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }
  });
  /*End updatedoctorForm*/

  /*
	Function Name: addDoctorTypeForm
	Created Date: 27-02-2023
	Created By: Sajda
	*/
  $("#addDoctorTypeBtn").click(function(){
    $("#addDoctorTypeForm").validate();
    if($("#addDoctorTypeForm").valid()){

      var doctype = $("#doctype").val();
      var docsubtype = $("#docsubtype").val();
     
      $.ajax({
        type: 'post',
        url: base_url + 'web/submitAddDoctorTypeForm',
        dataType: 'json',
        data: {doctype: doctype, docsubtype: docsubtype},
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
  /*End addDoctorTypeForm*/

  /*
	Function Name: updatedoctortypeForm
	Created Date: 10-03-2023
	Created By: Sajda
	*/
  $("#updateDoctorTypeFormBtn").click(function(){
    $("#updatedoctortypeForm").validate();
    if($("#updatedoctortypeForm").valid()){

      var dctid = $("#dctid").val();
      var doctype = $("#doctype").val();
      var docsubtype = $("#docsubtype").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/submitupdateDoctorTypeForm',
        dataType: 'json',
        data: {dctid: dctid, doctype: doctype, docsubtype: docsubtype},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href='listdoctortype';
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }
  });
  /*End updatedoctorForm*/

  $("#searchappointmentBtn").click(function(){
    $("#searchappointmentForm").validate();
    if($("#searchappointmentForm").valid()){
      //alert("hi");
      var searchpatient = $("#searchpatient").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/search-patient',
        dataType: 'json',
        data: {searchpatient: searchpatient},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href= base_url + 'web/addappointment?pid='+response.pid;
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }
  });


  $("#searchroomBtn").click(function(){
    $("#searchroomForm").validate();
    if($("#searchroomForm").valid()){
      //alert("hi");
      var searchpatient = $("#searchpatient").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/search-room',
        dataType: 'json',
        data: {searchpatient: searchpatient},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href= base_url + 'web/assign-new-room?pid='+response.pid;
            }
            else if (response.error_code==203) {
              alert(response.error_msg);
              window.location.href= base_url + 'web/already-assigned-room?pid='+response.pid;

            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }
  });

  $("#addAssignHelperBtn").click(function(){

    $("#addAssignHelperForm").validate();
    if($("#addAssignHelperForm").valid()){
      //alert("hi");
      var searchpatient = $("#searchpatient").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/search-helper',
        dataType: 'json',
        data: {searchpatient: searchpatient},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href= base_url + 'web/assign-new-helper?pid='+response.pid;
            }
            else if (response.error_code==203) {
              alert(response.error_msg);
              window.location.href= base_url + 'web/already-assigned-helper?pid='+response.pid;

            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
    }

  });

  $('#getRoom').change(function(){
     $('#roomno').html('');
     var roomtype = $("#getRoom").val();

     $.ajax({
        type: 'post',
        url: base_url + 'web/get-all-rooms',
        dataType: 'json',
        data: {roomtype: roomtype},
        success: function (response){
            console.log(response);
            var output = '';
            $.each(response.roomlist, function(key,val){
              console.log(val);
              output+=`<option value="${val.roomid}">${val.roomno}</option>`;
            });
            $("#roomno").append(output);
        }
      });
     
  });

  $("#assignRoomBtn").click(function(){
    $("#assignnewroomForm").validate();
    if($("#assignnewroomForm").valid()){

      var getRoom = $("#getRoom").val();
      var roomno = $("#roomno").val();
      var pid = $("#pid").val();

      $.ajax({
        type: 'post',
        url: base_url + 'web/save-new-room',
        dataType: 'json',
        data: {getRoom: getRoom, roomno: roomno, pid: pid},
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

  $("#discardRoomBtn").click(function(){
      var roomid = $("#roomid").val();
      var pid = $("#pid").val();
      //alert(roomid);
      $.ajax({
        type: 'post',
        url: base_url + 'web/discard-room',
        dataType: 'json',
        data: {roomid: roomid, pid: pid},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href= base_url + 'web/addassignroom';
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
  });

  $("#discardHelperBtn").click(function(){
      var hid = $("#hid").val();
      var pid = $("#pid").val();
      //alert(roomid);
      $.ajax({
        type: 'post',
        url: base_url + 'web/discard-helper',
        dataType: 'json',
        data: {hid: hid, pid: pid},
        success: function (response){
            if(response.error_code==200){
              alert(response.error_msg);
              window.location.href= base_url + 'web/addassignhelper';
            }else if(response.error_code==100){
              alert(response.error_msg);
              window.location.reload();
            }
        }
      });
  });



  $('.cls').click(function(){
    window.location.reload();
  });

  $('.btn-close').click(function(){
    window.location.reload();
  });


  function trim(el) {
    el.value = el.value.
    replace(/(^\s*)|(\s*$)/gi, ""). // removes leading and trailing spaces
    replace(/[ ]{2,}/gi, " "). // replaces multiple spaces with one space
    replace(/\n +/, "\n"); // Removes spaces after newlines
    return;
}  
