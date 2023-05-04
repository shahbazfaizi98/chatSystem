<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

if (!function_exists('pr')) {
  function pr($d) {
    echo "<pre>";
    print_r($d);
    echo "</pre>";
    exit();
  }
}

function get_new_uri($get_url){
  $CI = &get_instance();
  $array_url = $CI->uri->segment_array();
  if(count($array_url) == 4){
    unset($array_url[4]);
    $url =  join('/',array_slice($array_url, 0));
  } else {
    $url = $get_url;
  }
  return $url;
}

function web_inner_view($custom_view, $data = array()) {
  $CI = &get_instance();
  $CI->load->view('web/template/header', $data);
  $CI->load->view($custom_view, $data);
  $CI->load->view('web/template/footer', $data);
}
function error_404() {
  $CI = &get_instance();
  $data = array();
  $data['title'] = 'Page Not Found - 404 | HSBC Digital | Thriwe';
  web_thriwe_view('web/template/error-404', $data);
}

function generateRandomString($length = 10) {
  $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $characters_length = strlen($characters);
  $random_string = '';
  for ($i = 0; $i < $length; $i++) {
    $random_string .= $characters[rand(0, $characters_length - 1)];
  }
  return $random_string;
}
?>
