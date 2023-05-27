<?php 
// $uid = isset($_SESSION['userdetails']['uid'])?$_SESSION['userdetails']['uid']:'';
// if($uid == ''){
//     $_SESSION['userdetails']['uid'] = $_SESSION['userdetails']['uid'];
//     $_SESSION['userdetails']['fullname'] = $_SESSION['userdetails']['fullname'];
//     $_SESSION['userdetails']['email'] = $_SESSION['userdetails']['email'];
// }
//?>
<div class="container m-auto">

                <h1 class="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-5"> Feed </h1>

                <div class="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5">

                    <!-- left sidebar-->
                    <div class="space-y-5 flex-shrink-0 lg:w-7/12">
                    <input type="text" id="offsetnum" value="0">
                        <!-- post 1-->
                        <div id="allposts"></div>
    
                        <!-- post 2-->                       
                       
                        

                        <!-- Load more-->
                        <div class="flex justify-center mt-6" onclick="load_more_posts();" id="btnloadmore>
                            <button
                                class="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
                                Load more ..</button>
                        </div>
 
                        <!-- post 3-->
                        
                        
                        <!-- post 4-->
                        
                        
                        <!-- Load more-->
                        


                    </div>

                    <!-- right sidebar-->
                    <div class="lg:w-5/12">

                        <div class="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">

                            <div class="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:border-gray-800">
                                <h2 class="font-semibold text-lg">People you may know</h2>
                                <a href="#" onclick="loadmore_items();"> Refresh</a>
                            </div>
                           
                            <div class="divide-gray-300 divide-gray-50 divide-opacity-50 divide-y px-4 dark:divide-gray-800 dark:text-gray-100" style="height: 275px!important;">
                                <div id="allusers">
                                  
                                </div>
                                <div id="nouserfound" style="display: none;">
                                  <p>User not found.</p>
                                </div>
                            </div>

                        </div>

                        <div class="mt-5" uk-sticky="offset:28; bottom:true ; media @m">
                            <div class="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">

                                <div class="bg-gray-50 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:bg-gray-800 dark:border-gray-700">
                                    <h2 class="font-semibold text-lg">Latest</h2>
                                    <a href="explore.html"> See all</a>
                                </div>
    
                                <div class="grid grid-cols-2 gap-2 p-3 uk-link-reset">
    
                                    <div class="bg-red-500 max-w-full h-32 rounded-lg relative overflow-hidden uk-transition-toggle"> 
                                        <a href="#story-modal" uk-toggle>
                                            <img src="<?=ASSET_WEB_URL?>assets/images/post/img2.jpg" class="w-full h-full absolute object-cover inset-0">
                                        </a>
                                        <div class="flex flex-1 justify-around items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">   
                                            <a href="#"> <i class="uil-heart"></i> 150 </a>
                                            <a href="#"> <i class="uil-heart"></i> 30 </a>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-red-500 max-w-full h-40 rounded-lg relative overflow-hidden uk-transition-toggle"> 
                                        <a href="#story-modal" uk-toggle>
                                            <img src="<?=ASSET_WEB_URL?>assets/images/post/img7.jpg" class="w-full h-full absolute object-cover inset-0">
                                        </a>
                                        <div class="flex flex-1 justify-around items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">   
                                            <a href="#"> <i class="uil-heart"></i> 150 </a>
                                            <a href="#"> <i class="uil-heart"></i> 30 </a>
                                        </div>
                                    </div>                             
                                    
                                    <div class="bg-red-500 max-w-full h-40 -mt-8 rounded-lg relative overflow-hidden uk-transition-toggle"> 
                                        <a href="#story-modal" uk-toggle>
                                            <img src="<?=ASSET_WEB_URL?>assets/images/post/img5.jpg" class="w-full h-full absolute object-cover inset-0">
                                        </a>
                                        <div class="flex flex-1 justify-around  items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">   
                                            <a href="#"> <i class="uil-heart"></i> 150 </a>
                                            <a href="#"> <i class="uil-heart"></i> 30 </a>
                                        </div>
                                    </div>
    
                                    <div class="bg-red-500 max-w-full h-32 rounded-lg relative overflow-hidden uk-transition-toggle"> 
                                        <a href="#story-modal" uk-toggle>
                                            <img src="<?=ASSET_WEB_URL?>assets/images/post/img3.jpg" class="w-full h-full absolute object-cover inset-0">
                                        </a>
                                        <div class="flex flex-1 justify-around  items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">   
                                            <a href="#"> <i class="uil-heart"></i> 150 </a>
                                            <a href="#"> <i class="uil-heart"></i> 30 </a>
                                        </div>
                                    </div>
    
                                </div>
    
                            </div>
                        </div>

                    </div>

                </div>               
          

            </div>
    <script>
    $(document).ready(function () {
        //console.log("document loaded");
        loadmore_items();
        load_more_posts();
    });
    </script>