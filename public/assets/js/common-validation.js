    
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


    $("#searchappointmentForm").validate({
      errorClass: "error",
      rules: {
        searchpatient: {
          required: true
        },
      },
      messages: {
        searchpatient: {
          required: "Please enter your email / mobile",
        },
      },

      submitHandler: function (form) {
        form.submit();
      }
    });

    $("#addAssignHelperForm").validate({
      errorClass: "error",
      rules: {
        searchpatient: {
          required: true
        },
      },
      messages: {
        searchpatient: {
          required: "Please enter your email / mobile",
        },
      },

      submitHandler: function (form) {
        form.submit();
      }
    });

    $("#assignnewhelperForm").validate({
      errorClass: "error",
      rules: {
        getHelper: {
          required: true
        },
        pid: {
          required: true
        },
      },
      messages: {
        getHelper: {
          required: "Please select helper",
        },
        pid: {
          required: "Please enter patient id.",
        },
      },

      submitHandler: function (form) {
        form.submit();
      }
    });


    $("#searchroomForm").validate({
      errorClass: "error",
      rules: {
        searchpatient: {
          required: true
        },
      },
      messages: {
        searchpatient: {
          required: "Please enter your email / mobile",
        },
      },

      submitHandler: function (form) {
        form.submit();
      }
    });


    $("#assignnewroomForm").validate({
      errorClass: "error",
      rules: {
        getRoom: {
          required: true
        },
        roomno: {
          required: true
        },
      },
      messages: {
        getRoom: {
          required: "Please select room type",
        },
        roomno: {
          required: "Please select room no.",
        },
      },

      submitHandler: function (form) {
        form.submit();
      }
    });

   $("#loginForm").validate({
      errorClass: "error",
      rules: {
        email: {
          required: true
        },
        password: {
          required: true
        },
        usertype: {
          required: true
        },
      },
      messages: {
        emaile: {
          required: "Please enter your email",
        },
        usertype: {
          required: "Please select user type",
        },
        password: {
          required: "Please enter your password",
        },
      },

      submitHandler: function (form) {
        form.submit();
      }
    });

    /*add user form*/
    $("#adduserForm").validate({
      errorClass: "error",
      rules: {
        fullname: {
          required: true,
        },
        email: {
          required: true
        },
        mobile: {
          required: true,
        },
        dob: {
          required: true
        },
        bloodgroup: {
          required: true,
        },
        departmenttype: {
          required: true
        },
        roletype: {
          required: true,
        },
        country: {
          required: true
        },
        state: {
          required: true,
        },
        city: {
          required: true
        },
        registeredthrough: {
          required: true,
        },
        password: {
          required: true
        },
      },
      messages: {
        fullname: {
          required: "Please enter your Full Name",
        },
        email: {
          required: "Please enter your email",
        },
        mobile: {
          required: "Please enter your Mobile No.",
        },
        dob: {
          required: "Please select your DOB",
        },
        bloodgroup: {
          required: "Please enter your Blood Group.",
        },
        departmenttype: {
          required: "Please enter department tpe",
        },
        roletype: {
          required: "Please enter role type",
        },
        country: {
          required: "Please enter your Country",
        },
        state: {
          required: "Please enter your State",
        },
        city: {
          required: "Please enter your City",
        },
        registeredthrough: {
          required: "Please enter registered through",
        },
        password: {
          required: "Please enter your password",
        },
      },

      submitHandler: function (form) {
        form.submit();
      }
    });


    /*Add Patient Validation Form*/
    $("#patientForm").validate({
      errorClass: "error",
      rules: {
        pname: {
          required: true,
          minlength: 4,
          maxlength: 20,
        },
        email: {
          required: true
        },
        mobile: {
          required: true,
        },
        dob: {
          required: true,
        },
        prooftype: {
          required: true
        },
        paddress: {
          required: true,
        },
        caddress: {
          required: true,
        },
        referenceid: {
          required: true,
        },
        gender: {
          required: true,
        },
        maritalstatus: {
          required: true,
        },
        bloodgroup: {
          required: true,
        },
        weight: {
          required: true,
        },
        height: {
          required: true,
        },
        disabled: {
          required: true,
        },
        disable_specify: {
          required: true,
        },
        registered_at: {
          required: true,
        },
        referredby: {
          required: true,
        },
        referredcno: {
          required: true,
        },
        wardtype: {
          required: true,
        },
        country: {
          required: true,
        },
        state: {
          required: true,
        },
        city: {
          required: true,
        },
       
      },
      messages: {
        pname: {
          required: "Please enter your Full Name",
        },
        email: {
          required: "Please enter your email",
        },
        mobile: {
          required: "Please enter your Mobile No.",
        },
        dob: {
          required: "Please select dob",
        },
        prooftype: {
          required: "Please enter prooftype",
        },
        paddress: {
          required: "Please enter your permanent address",
        },
        caddress: {
          required: "Please enter your correspondence address",
        },
        referenceid: {
          required: "Please enter your reference id",
        },
        gender: {
          required: "Please select gender",
        },
        maritalstatus: {
          required: "Please select marital status",
        },
        bloodgroup: {
          required: "Please enter your blood group",
        },
        weight: {
          required: "Please enter your weight",
        },
        height: {
          required: "Please enter your height",
        },
        disabled: {
          required: "Please select gender",
        },
        disable_specify: {
          required: "Please select disable specify",
        },
        registered_at: {
          required: "Please enter registered at",
        },
        referredby: {
          required: "Please enter referred by",
        },
        referredcno: {
          required: "Please enter referred contact no.",
        },
        wardtype: {
          required: "Please select wardtype",
        },
        country: {
          required: "Please enter your country",
        },
        state: {
          required: "Please enter your state",
        },
        city: {
          required: "Please enter your city",
        },
        
      },

      submitHandler: function (form) {
        form.submit();
      }
    });

/*Add appointment Validation Form*/
$("#addAppointmentForm").validate({
  errorClass: "error",
  rules: {
    appoint_date: {
      required: true,
    },
    appoint_time: {
      required: true
    },
    adminid: {
      required: true,
    },
    docid: {
      required: true,
    },
    pcase: {
      required: true,
    },
  },
  messages: {
    appoint_date: {
      required: "Please select Appointment date",
    },
    appoint_time: {
      required: "Please select Appointment time",
    },
    adminid: {
      required: "Please enter your admin id",
    },
    docid: {
      required: "Please select doctor",
    },
    pcase: {
      required: "Please enter your case",
    },
    
  },

  submitHandler: function (form) {
    form.submit();
  }
});
/*end*/
/*Assign helper Form*/

$("#addAssignHelperForm").validate({
  errorClass: "error",
  rules: {
    assignedby: {
      required: true,
    },
  },
  messages: {
    assignedby: {
      required: "Please enter Assigned by",
    },
  },

  submitHandler: function (form) {
    form.submit();
  }
});
/*end*/

/*Assign Room Form*/

$("#assignRoomForm").validate({
  errorClass: "error",
  rules: {
    issuedby: {
      required: true,
    },
    confirmedby: {
      required: true,
    },
  },
  messages: {
    issuedby: {
      required: "Please enter Issued By",
    },
    confirmedby: {
      required: "Please enter Confirmed By",
    },
  },

  submitHandler: function (form) {
    form.submit();
  }
});
/*end*/

/*Add Department Form*/

$("#addDepartmentForm").validate({
  errorClass: "error",
  rules: {
    dname: {
      required: true,
    },
    d_description: {
      required: true,
    },
  },
  messages: {
    dname: {
      required: "Please enter Department Name",
    },
    d_description: {
      required: "Please enter Department Description",
    },
  },

  submitHandler: function (form) {
    form.submit();
  }
});
/*end*/

/*Add Doctor Validation Form*/
$("#adddoctorForm").validate({
  errorClass: "error",
  rules: {
    docname: {
      required: true,
      minlength: 4,
      maxlength: 20,
    },
    docemail: {
      required: true
    },
    docmobile: {
      required: true,
    },
    licenseno: {
      required: true,
    },
    prooftype: {
      required: true
    },
    govid: {
      required: true,
    },
    paddress: {
      required: true,
    },
    caddress: {
      required: true,
    },
    specialisation: {
      required: true,
    },
    gender: {
      required: true,
    },
    age: {
      required: true,
    },
    joining_date: {
      required: true,
    },
    appoint_day: {
      required: true,
    },
    appoint_time: {
      required: true,
    },
    timetype: {
      required: true,
    },
    hqualification: {
      required: true,
    },
    designation: {
      required: true,
    },
    qualified_from: {
      required: true,
    },
    yof_exp: {
      required: true,
    },
    bloodgroup: {
      required: true,
    },
    lastemployedby: {
      required: true,
    },
    maritalstatus: {
      required: true,
    },
    country: {
      required: true,
    },
    state: {
      required: true,
    },
    city: {
      required: true,
    },
    passwords: {
      required: true,
    },
  },
  messages: {
    docname: {
      required: "Please enter doctor name",
    },
    docemail: {
      required: "Please enter doctor email",
    },
    docmobile: {
      required: "Please enter doctor mobile No.",
    },
    licenseno: {
      required: "Please enter liscence no.",
    },
    prooftype: {
      required: "Please select prooftype",
    },
    govid: {
      required: "Please enter government id",
    },
    paddress: {
      required: "Please enter permanent address",
    },
    caddress: {
      required: "Please enter correspondence address",
    },
    specialisation: {
      required: "Please enter specialisation",
    },
    gender: {
      required: "Please select gender",
    },
    age: {
      required: "Please enter age",
    },
    joining_date: {
      required: "Please select joining date",
    },
    appoint_day: {
      required: "Please enter joining day",
    },
    appoint_time: {
      required: "Please select joining time",
    },
    timetype: {
      required: "Please select time type",
    },
    hqualification: {
      required: "Please enter highest qualification",
    },
    designation: {
      required: "Please enter designation",
    },
    qualified_from: {
      required: "Please enter qualified from",
    },
    yof_exp: {
      required: "Please enter year of passing",
    },
    bloodgroup: {
      required: "Please enter blood group",
    },
    lastemployedby: {
      required: "Please enter last employed by",
    },
    maritalstatus: {
      required: "Please select marital status",
    },
    country: {
      required: "Please enter country",
    },
    state: {
      required: "Please enter state",
    },
    city: {
      required: "Please enter city",
    },
    passwords: {
      required: "Please enter password",
    },
  },

  submitHandler: function (form) {
    form.submit();
  }
});

/*Add Doctor-type*/

$("#addDoctorTypeForm").validate({
  errorClass: "error",
  rules: {
    doctype: {
      required: true,
    },
    docsubtype: {
      required: true,
    },
  },
  messages: {
    doctype: {
      required: "Please enter Doctor type",
    },
    docsubtype: {
      required: "Please enter Doctor Sub-type",
    },
  },

  submitHandler: function (form) {
    form.submit();
  }
});
/*end*/

/*Add Helper*/

$("#addhelperForm").validate({
  errorClass: "error",
  rules: {
    helpername: {
      required: true,
    },
    email: {
      required: true,
    },
    mobile: {
      required: true,
    },
    prooftype: {
      required: true,
    },
    govid: {
      required: true,
    },
    gender: {
      required: true,
    },
    dob: {
      required: true,
    },
    maritalstatus: {
      required: true,
    },
    bloodgroup: {
      required: true,
    },
  },
  messages: {
    helpername: {
      required: "Please enter helper name",
    },
    email: {
      required: "Please enter email",
    },
    mobile: {
      required: "Please enter mobile no.",
    },
    prooftype: {
      required: "Please select proof type",
    },
    govid: {
      required: "Please enter government id",
    },
    gender: {
      required: "Please select gender",
    },
    dob: {
      required: "Please select DOB",
    },
    maritalstatus: {
      required: "Please select marital status",
    },
    bloodgroup: {
      required: "Please enter blood-group",
    },
    
  },

  submitHandler: function (form) {
    form.submit();
  }
});
/*end*/
});












