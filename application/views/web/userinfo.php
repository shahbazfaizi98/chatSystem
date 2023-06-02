<?php 
// $uid = isset($_SESSION['userdetails']['uid'])?$_SESSION['userdetails']['uid']:'';
// if($uid == ''){
//     $_SESSION['userdetails']['uid'] = $_SESSION['userdetails']['uid'];
//     $_SESSION['userdetails']['fullname'] = $_SESSION['userdetails']['fullname'];
//     $_SESSION['userdetails']['email'] = $_SESSION['userdetails']['email'];
// }
//?>
<div class="container m-auto">

                <h1 class="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-5">Profile</h1>
                <input type="hidden" id="offsetnum" value="0">
                <!-- <div class="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5"> -->

                    <div class="card">
                        <div class="card-body">
                        <form action="#" name="userinfoForm" id="userinfoForm">
                    
                    
                    <input value="<?php echo $this->User->enbdnew_decrypt($userdata['fullname']); ?>" type="text" name="fullname" id="fullname" class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style="border: 1px solid #d3d5d8 !important;" disabled>
                    <input value="<?php echo $this->User->enbdnew_decrypt($userdata['username']); ?>" type="text" name="username" id="username" class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style="border: 1px solid #d3d5d8 !important;" disabled>
                    <input value="<?php echo $this->User->enbdnew_decrypt($userdata['email']);?>" type="text" name="email" id="email" class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style="border: 1px solid #d3d5d8 !important;" disabled>
                    <input value="<?php echo $this->User->enbdnew_decrypt($userdata['aboutme']);?>" type="text" name="aboutme" id="aboutme" placeholder="About Me" class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style="border: 1px solid #d3d5d8 !important;" disabled>
                    <input value="<?php echo $this->User->enbdnew_decrypt($userdata['location']);?>" type="text" name="location" id="location" placeholder="Location" class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style="border: 1px solid #d3d5d8 !important;" disabled>
                    <input value="<?php echo $this->User->enbdnew_decrypt($userdata['workingat']);?>" type="text" name="workingat" id="workingat" placeholder="Working At/School/College" class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style="border: 1px solid #d3d5d8 !important;" disabled>

                    <div class="row" style="margin-top: 10px;"> 
                        <div class="col-md-12">
                            <div class="form-group">
                                <select name="relationship" id="relationship" class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" disabled>
                                    <?php
                                    if($userdata['relationship'] == 1)
                                    {
                                        $type = "Unmarried";
                                    }
                                    else if($userdata['relationship'] == 2)
                                    {
                                        $type = "Married";
                                    }
                                    else if($userdata['relationship'] == 3)
                                    {
                                        $type = "Engaged";
                                    }
                                    else
                                    {
                                        $type = "In a Relationship";
                                    }
                                    ?>
                                    <option value="<?php echo $userdata['relationship'];?>"><?php echo $type; ?></option>
                                    <option value="1">Unmarried</option>
                                    <option value="2">Married</option>
                                    <option value="3">Engaged</option>
                                    <option value="4">In a relationship</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 10px;">
                        <div class="col-md-12">
                            <input value="<?php echo $this->User->enbdnew_decrypt($userdata['referralcode']);?>" type="text" name="referralcode" id="referralcode" placeholder="Referral Code" class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800" style="border: 1px solid #d3d5d8 !important;" disabled>
                        </div>
                    </div>
                
                    <button type="button" name="editBtn" id="editBtn" class="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Edit</button>
                    <button style="display:none;" type="button" name="submitBtn" id="submitBtn" class="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Submit</button>
                    
                </form>
                        </div>
                    </div>

                </div> 
                
                
          

            </div>

    <script>
    $(document).ready(function () {
        //console.log("document loaded");
        loadmore_items();
        load_more_posts();

        

        $("#editBtn").click(function(){
            $("#fullname").prop('disabled',false);
            $("#aboutme").prop('disabled',false);
            $("#location").prop('disabled',false);
            $("#workingat").prop('disabled',false);
            $("#relationship").prop('disabled',false);
            $("#submitBtn").show();
            $("#editBtn").hide();
        });

        $("#submitBtn").click(function(){
            $("#fullname").prop('disabled',true);
            $("#aboutme").prop('disabled',true);
            $("#location").prop('disabled',true);
            $("#workingat").prop('disabled',true);
            $("#relationship").prop('disabled',true);
            $("#submitBtn").hide();
            $("#editBtn").show();
        });
    });
    </script>

