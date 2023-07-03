</div>

    </div>

    <script>
    $(document).ready(function () {
        //console.log("document loaded");
        dataofalluser();
        //load_more_posts();
    });
    </script>

    <!-- Story modal -->
    <div id="story-modal" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog story-modal">
            <button class="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white" type="button" uk-close></button>

                <div class="story-modal-media">
                    <img src="<?=ASSET_WEB_URL?>assets/images/post/img4.jpg" alt=""  class="inset-0 h-full w-full object-cover">
                </div>
                <div class="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100">
                
                    <!-- post header-->
                    <div class="border-b flex items-center justify-between px-5 py-3 dark:border-gray-600">
                        <div class="flex flex-1 items-center space-x-4">
                            <a href="#">
                                <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                    <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-2.jpg"
                                        class="bg-gray-200 border border-white rounded-full w-8 h-8">
                                </div>
                            </a>
                            <span class="block text-lg font-semibold"> Johnson smith </span>
                        </div>
                        <a href="#"> 
                            <i  class="icon-feather-more-horizontal text-2xl rounded-full p-2 transition -mr-1"></i>
                        </a>
                    </div>
                    <div class="story-content p-4" data-simplebar>

                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                        
                        <div class="py-4 ">
                            <div class="flex justify-around">
                                <a href="#" class="flex items-center space-x-3">
                                    <div class="flex font-bold items-baseline"> <i class="uil-heart mr-1"> </i> Like</div>
                                </a>
                                <a href="#" class="flex items-center space-x-3">
                                    <div class="flex font-bold items-baseline"> <i class="uil-heart mr-1"> </i> Comment</div>
                                </a>
                                <a href="#" class="flex items-center space-x-3">
                                    <div class="flex font-bold items-baseline"> <i class="uil-heart mr-1"> </i> Share</div>
                                </a>
                            </div>
                            <hr class="-mx-4 my-3">
                            <div class="flex items-center space-x-3"> 
                                <div class="flex items-center">
                                    <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-1.jpg" alt="" class="w-6 h-6 rounded-full border-2 border-white">
                                    <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-4.jpg" alt="" class="w-6 h-6 rounded-full border-2 border-white -ml-2">
                                    <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-2.jpg" alt="" class="w-6 h-6 rounded-full border-2 border-white -ml-2">
                                </div>
                                <div>
                                    Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                                </div>
                            </div>
                        </div>

                    <div class="-mt-1 space-y-1">
                        <div class="flex flex-1 items-center space-x-2">
                            <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-2.jpg" class="rounded-full w-8 h-8">
                            <div class="flex-1 p-2">
                                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            </div>
                        </div>

                        <div class="flex flex-1 items-center space-x-2">
                            <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-4.jpg" class="rounded-full w-8 h-8">
                            <div class="flex-1 p-2">
                                consectetuer adipiscing elit
                            </div>
                        </div>

                    </div>


                    </div>
                    <div class="p-3 border-t dark:border-gray-600">
                        <div class="bg-gray-200 dark:bg-gray-700 rounded-full rounded-md relative">
                            <input type="text" placeholder="Add your Comment.." class="bg-transparent max-h-8 shadow-none">
                            <div class="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                                <a href="#"> <i class="uil-image"></i></a>
                                <a href="#"> <i class="uil-video"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

        </div>
    </div>


    <div id="feed-modal" class="uk-modal" uk-modal>
        <div class="uk-modal-dialog feed-modal">
            <button class="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white" type="button" uk-close></button>
                <div class="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100">
                
                    <!-- post header-->
                    <div class="border-b flex items-center justify-between px-5 py-3 dark:border-gray-600">
                        <div class="flex flex-1 items-center space-x-4">
                            <a href="#">
                                <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                    <img src="assets/images/avatars/avatar-2.jpg"
                                        class="bg-gray-200 border border-white rounded-full w-8 h-8">
                                </div>
                            </a>
                            <span class="block text-lg font-semibold"> Johnson smith </span>
                        </div>
                        <a href="#"> 
                            <i  class="icon-feather-more-horizontal text-2xl rounded-full p-2 transition -mr-1"></i>
                        </a>
                    </div>
                    <div class="story-content p-4" data-simplebar>

                        <form class="uk-form-stacked" enctype='multipart/form-data' method="POST">

                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Title</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="postTitle" name="postTitle" type="text" placeholder="Enter Title">
                                </div>
                            </div>

                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-select">Select</label>
                                <div class="uk-form-controls">
                                    <div uk-form-custom="target: true">
                                        <input type="file" aria-label="Custom controls" id="sortpicture">
                                        <input class="uk-input" type="text" placeholder="Select file" aria-label="Custom controls" disabled>
                                    </div>
                                </div>
                            </div>

                        


                    </div>
                    <div class="p-3 border-t dark:border-gray-600">
                    <button type="button" id="uploadPost" href="#" class="uk-align-center test btn border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"> Submit </button>
                    </div>
                    </form>
                </div>

        </div>
    </div>


    <!-- <script>
        
        (function (window, document, undefined) {
            'use strict';
            if (!('localStorage' in window)) return;
            var nightMode = localStorage.getItem('gmtNightMode');
            if (nightMode) {
                document.documentElement.className += ' dark';
            }
        })(window, document);
    
    
        (function (window, document, undefined) {
    
            'use strict';
    
            // Feature test
            if (!('localStorage' in window)) return;
    
            // Get our newly insert toggle
            var nightMode = document.querySelector('#night-mode');
            if (!nightMode) return;
    
            // When clicked, toggle night mode on or off
            nightMode.addEventListener('click', function (event) {
                event.preventDefault();
                document.documentElement.classList.toggle('dark');
                if (document.documentElement.classList.contains('dark')) {
                    localStorage.setItem('gmtNightMode', true);
                    return;
                }
                localStorage.removeItem('gmtNightMode');
            }, false);
    
        })(window, document);
    </script> -->
    <input type="hidden" id="hid" name="hid" value="<?php echo $_SESSION['userdetails']['uid'];?>">
    <input type="hidden" name="baseurl" value="<?= BASE_URL ?>" id="baseurl" ?>">
    <!-- JAVASCRIPT -->
    
    <!-- <script src="<?php echo ASSET_WEB_URL; ?>/libs/jquery/jquery.min.js"></script> -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js" integrity="sha512-rstIgDs0xPgmG6RX1Aba4KV5cWJbAMcvRCVmglpam9SoHZiUCyQVDdH2LPlxoHtrv17XWblE/V/PP+Tr04hbtA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="<?php echo ASSET_WEB_URL; ?>assets/js/additional-methods.js"></script>
    <script src="<?php echo ASSET_WEB_URL; ?>assets/js/common-validation.js"></script>
    <script src="<?php echo ASSET_WEB_URL; ?>assets/js/home.js"></script>
    
 <!-- Scripts
    ================================================== -->
    <script src="<?=ASSET_WEB_URL?>assets/js/tippy.all.min.js"></script>  
    
    <script src="<?=ASSET_WEB_URL?>assets/js/uikit.js"></script>
    <script src="<?=ASSET_WEB_URL?><?=ASSET_WEB_URL?>assets/js/simplebar.js"></script>
    <script src="<?=ASSET_WEB_URL?>assets/js/custom.js"></script>


    <!-- <script src="../unpkg.com/ionicons%405.2.3/dist/ionicons.js"></script> -->
</body>


<!-- Mirrored from instelloo.netlify.app/feed.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 02 May 2023 14:56:39 GMT -->
</html>