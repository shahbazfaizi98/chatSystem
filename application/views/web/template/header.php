<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Favicon -->
    <link href="<?=ASSET_WEB_URL?>assets/images/favicon.png" rel="icon" type="image/png">
    
    <!-- Basic Page Needs
        ================================================== -->
    <title>Instello Sharing Photos</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Instello - Sharing Photos platform HTML Template">

    <!-- icons
        ================================================== -->
    <link rel="stylesheet" href="<?=ASSET_WEB_URL?>assets/css/icons.css">

    <!-- CSS 
        ================================================== -->
    <link rel="stylesheet" href="<?=ASSET_WEB_URL?>assets/css/uikit.css">
    <link rel="stylesheet" href="<?=ASSET_WEB_URL?>assets/css/style.css">
    <link rel="stylesheet" href="<?=ASSET_WEB_URL?>assets/css/tailwind.css">
    <script>const BASE_URL="<?=ASSET_WEB_URL?>"</script>
    <script src="<?=ASSET_WEB_URL?>assets/js/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
</head>

<body>


    <div id="wrapper">

        <div class="sidebar">
            <div class="sidebar_header border-b border-gray-200 from-gray-100 to-gray-50 bg-gradient-to-t  uk-visible@s"> 
                <a href="#">
                    <img src="<?=ASSET_WEB_URL?>assets/images/logo.png">
                    <img src="<?=ASSET_WEB_URL?>assets/images/logo-light.png" class="logo_inverse">
                </a>
                <!-- btn night mode -->
                <a href="#" id="night-mode" class="btn-night-mode" data-tippy-placement="left" title="Switch to dark mode"></a>
            </div>
            <div class="border-b border-gray-20 flex justify-between items-center p-3 pl-5 relative uk-hidden@s">
                <h3 class="text-xl"> Navigation </h3>
                <span class="btn-mobile" uk-toggle="target: #wrapper ; cls: sidebar-active"></span>
            </div>
            <div class="sidebar_inner" data-simplebar>
                <div class="flex flex-col items-center my-6 uk-visible@s">
                    <div
                        class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transition m-0.5 mr-2  w-24 h-24">
                        <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-2.jpg"
                            class="bg-gray-200 border-4 border-white rounded-full w-full h-full">
                    </div>
                    <a href="<?php echo BASE_URL?>/web/profile" class="text-xl font-medium capitalize mt-4 uk-link-reset"><?php echo $this->User->enbdnew_decrypt($_SESSION['userdetails']['fullname']);?>
                    </a>
                    <div class="flex justify-around w-full items-center text-center uk-link-reset text-gray-800 mt-6">
                        <div>
                            <a href="<?php echo BASE_URL ?>web/dashboard">
                                <strong>Post</strong>
                                <div><span id="userpostdata"></span></div>
                            </a>
                        </div>
                        <div>
                            <a href="<?php echo BASE_URL ?>web/friends">
                                <strong>Friends</strong>
                                <div><span id="userfrienddata"></span></div>
                            </a>
                        </div>
                        <div>
                            <a href="<?php echo BASE_URL ?>web/friend-request">
                                <strong>Requests</strong>
                                <div><span id="userrequestdata"></span></div>
                            </a>
                        </div>
                    </div>
                </div>
                <hr class="-mx-4 -mt-1 uk-visible@s">
                <ul>
                    <li class="active">
                        <a href="feed.html">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            <span> Feed </span> </a>
                    </li>
                    <li>
                        <a href="explore.html">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span> Explore </span> </a>
                    </li>
                    <li>
                        <a href="chat">
                            <i class="uil-location-arrow"></i>
                            <span> Messages </span> <span class="nav-tag"> 3</span> </a>
                    </li>
                    <li>
                        <a href="trending.html">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                            <span> Trending </span> </a>
                    </li>
                    <li>
                        <a href="market.html">
                            <i class="uil-store"></i>
                            <span> Marketplace </span> </a>
                    </li>
                    <li>
                        <a href="setting.html">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span> Settings </span>
                        </a>
                        <ul>
                            <li><a href="setting.html">General </a></li>
                            <li><a href="setting.html"> Account setting </a></li>
                            <li><a href="setting.html">Billing <span class="nav-tag">3</span> </a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="profile.html">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span> My Profile </span> </a>
                    </li>
                    <li>
                        <hr class="my-2">
                    </li>
                    <li>
                        <a href="<?php echo BASE_URL ?>/web/logout">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span> Logout </span> </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="main_content">

            <header>
                <div class="header_inner">
                    <div class="left-side">
                        <!-- Logo -->
                        <div id="logo" class=" uk-hidden@s">
                            <a href="home.html">
                                <img src="<?=ASSET_WEB_URL?>assets/images/logo-mobile.png" alt="">
                                <img src="<?=ASSET_WEB_URL?>assets/images/logo-mobile-light.png" class="logo_inverse">
                            </a>
                        </div>

                        <div class="triger" uk-toggle="target: #wrapper ; cls: sidebar-active">
                            <i class="uil-bars"></i>
                        </div>

                        <div class="header_search">
                            <input type="text" placeholder="Search..">
                            <div class="icon-search">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div class="right-side lg:pr-4">
                         <!-- upload -->
                        <a href="#feed-modal" uk-toggle class="btn btn-success">
                            Add New Feed
                        </a>
                         <!-- upload dropdown box -->
                        
                        
                         <!-- Notification -->

                        <a href="#" class="header-links-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </a>
                        <div uk-drop="mode: click;offset: 4" class="header_dropdown">
                            <h4
                                class="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
                                Notification </h4>
                            <ul class="dropdown_scrollbar" data-simplebar>
                                <li>
                                    <a href="#">
                                        <div class="drop_avatar"> <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-1.jpg" alt="">
                                        </div>
                                        <div class="drop_content">
                                            <p> <strong>Adrian Mohani</strong>  Lorem ipsum dolor cursus
                                                <span class="text-link"> Adipiscing massa convallis  </span>
                                            </p>
                                            <span class="time-ago"> 2 hours ago </span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="drop_avatar"> <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-2.jpg" alt="">
                                        </div>
                                        <div class="drop_content">
                                            <p>
                                                <strong><?php $_SESSION ['userdetails']['fullname'];?></strong> Nonummy nibh euismod
                                                <span class="text-link"> Imperdiet doming </span>
                                            </p>
                                            <span class="time-ago"> 9 hours ago </span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="drop_avatar"> <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-3.jpg" alt="">
                                        </div>
                                        <div class="drop_content">
                                            <p>
                                                <strong>Alex Dolgove</strong>  Lorem ipsum dolor cursus
                                                <span class="text-link"> Adipiscing massa convallis  </span>
                                            </p>
                                            <span class="time-ago"> 12 hours ago </span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="drop_avatar"> <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-1.jpg" alt="">
                                        </div>
                                        <div class="drop_content">
                                            <p>
                                                <strong>Stella Johnson</strong> Nonummy nibh euismod
                                                <span class="text-link"> Imperdiet doming </span>
                                            </p>
                                            <span class="time-ago"> Yesterday </span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="drop_avatar"> <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-3.jpg" alt="">
                                        </div>
                                        <div class="drop_content">
                                            <p>
                                                <strong>Alex Dolgove</strong>  Lorem ipsum dolor cursus
                                                <span class="text-link"> Adipiscing massa convallis  </span>
                                            </p>
                                            <span class="time-ago"> 12 hours ago </span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <a href="#" class="see-all">See all</a>
                        </div>

                        <!-- Messages -->

                        <a href="#" class="header-links-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </a>
                        <div uk-drop="mode: click;offset: 4" class="header_dropdown">
                            <h4
                                class="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
                                Messages </h4>
                            <ul class="dropdown_scrollbar" data-simplebar id="messageEntry">
                                
                            
                            </ul>
                            <a href="#" class="see-all">See all</a>
                        </div>

                        <!-- profile -->

                        <a href="#">
                            <img src="<?=ASSET_WEB_URL?>assets/images/avatars/avatar-2.jpg" class="header-avatar" alt="">
                        </a>
                        <div uk-drop="mode: click;offset:9" class="header_dropdown profile_dropdown border-t">
                            <ul>
                                <li><a href="userinfo"> Account setting </a> </li>
                                <li><a href="#"> Payments </a> </li>
                                <li><a href="#"> Help </a> </li>
                                <li><a href="<?php echo BASE_URL ?>web/logout"> Log Out</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>

    