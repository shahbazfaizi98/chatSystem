<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Display Debug backtrace
|--------------------------------------------------------------------------
|
| If set to TRUE, a backtrace will be displayed along with php errors. If
| error_reporting is disabled, the backtrace will not display, regardless
| of this setting
|
*/
defined('SHOW_DEBUG_BACKTRACE') OR define('SHOW_DEBUG_BACKTRACE', TRUE);

/*
|--------------------------------------------------------------------------
| File and Directory Modes
|--------------------------------------------------------------------------
|
| These prefs are used when checking and setting modes when working
| with the file system.  The defaults are fine on servers with proper
| security, but you may wish (or even need) to change the values in
| certain environments (Apache running a separate process for each
| user, PHP under CGI with Apache suEXEC, etc.).  Octal values should
| always be used to set the mode correctly.
|
*/
defined('FILE_READ_MODE')  OR define('FILE_READ_MODE', 0644);
defined('FILE_WRITE_MODE') OR define('FILE_WRITE_MODE', 0666);
defined('DIR_READ_MODE')   OR define('DIR_READ_MODE', 0755);
defined('DIR_WRITE_MODE')  OR define('DIR_WRITE_MODE', 0755);

/*
|--------------------------------------------------------------------------
| File Stream Modes
|--------------------------------------------------------------------------
|
| These modes are used when working with fopen()/popen()
|
*/
defined('FOPEN_READ')                           OR define('FOPEN_READ', 'rb');
defined('FOPEN_READ_WRITE')                     OR define('FOPEN_READ_WRITE', 'r+b');
defined('FOPEN_WRITE_CREATE_DESTRUCTIVE')       OR define('FOPEN_WRITE_CREATE_DESTRUCTIVE', 'wb'); // truncates existing file data, use with care
defined('FOPEN_READ_WRITE_CREATE_DESTRUCTIVE')  OR define('FOPEN_READ_WRITE_CREATE_DESTRUCTIVE', 'w+b'); // truncates existing file data, use with care
defined('FOPEN_WRITE_CREATE')                   OR define('FOPEN_WRITE_CREATE', 'ab');
defined('FOPEN_READ_WRITE_CREATE')              OR define('FOPEN_READ_WRITE_CREATE', 'a+b');
defined('FOPEN_WRITE_CREATE_STRICT')            OR define('FOPEN_WRITE_CREATE_STRICT', 'xb');
defined('FOPEN_READ_WRITE_CREATE_STRICT')       OR define('FOPEN_READ_WRITE_CREATE_STRICT', 'x+b');

/*
|--------------------------------------------------------------------------
| Exit Status Codes
|--------------------------------------------------------------------------
|
| Used to indicate the conditions under which the script is exit()ing.
| While there is no universal standard for error codes, there are some
| broad conventions.  Three such conventions are mentioned below, for
| those who wish to make use of them.  The CodeIgniter defaults were
| chosen for the least overlap with these conventions, while still
| leaving room for others to be defined in future versions and user
| applications.
|
| The three main conventions used for determining exit status codes
| are as follows:
|
|    Standard C/C++ Library (stdlibc):
|       http://www.gnu.org/software/libc/manual/html_node/Exit-Status.html
|       (This link also contains other GNU-specific conventions)
|    BSD sysexits.h:
|       http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
|    Bash scripting:
|       http://tldp.org/LDP/abs/html/exitcodes.html
|
*/
defined('EXIT_SUCCESS')        OR define('EXIT_SUCCESS', 0); // no errors
defined('EXIT_ERROR')          OR define('EXIT_ERROR', 1); // generic error
defined('EXIT_CONFIG')         OR define('EXIT_CONFIG', 3); // configuration error
defined('EXIT_UNKNOWN_FILE')   OR define('EXIT_UNKNOWN_FILE', 4); // file not found
defined('EXIT_UNKNOWN_CLASS')  OR define('EXIT_UNKNOWN_CLASS', 5); // unknown class
defined('EXIT_UNKNOWN_METHOD') OR define('EXIT_UNKNOWN_METHOD', 6); // unknown class member
defined('EXIT_USER_INPUT')     OR define('EXIT_USER_INPUT', 7); // invalid user input
defined('EXIT_DATABASE')       OR define('EXIT_DATABASE', 8); // database error
defined('EXIT__AUTO_MIN')      OR define('EXIT__AUTO_MIN', 9); // lowest automatically-assigned error code
defined('EXIT__AUTO_MAX')      OR define('EXIT__AUTO_MAX', 125); // highest automatically-assigned error code
defined('PLATFORM_ENV')        OR define('PLATFORM_ENV', ""); // app environment


if(PLATFORM_ENV == 'PROD'){
  $base_url = 'http://localhost/chat';
} elseif (PLATFORM_ENV == 'LAB') {
  $base_url = 'http://locahost/chat/';
  $folder_name = 'chat';
} else {
  $base_url = 'http://localhost/chat/';
  $folder_name = 'chat';

  // $from_mail = 'customer.care@thriwe.com';
  // $SMTP_HOST = 'smtp.gmail.com';
  // $SMTP_USER = 'customer.care@thriwe.com';

}
defined('BASE_URL')OR define('BASE_URL', $base_url); // base url
defined('FOLDER_NAME')OR define('FOLDER_NAME', $folder_name); // folder name
defined('ASSET_WEB_URL')OR define('ASSET_WEB_URL', BASE_URL.'public/'); // assests for web


defined('SUCCESS_CLASS')        OR define('SUCCESS_CLASS', "alert-success"); 
defined('ERROR_CLASS')        OR define('ERROR_CLASS', "alert-danger"); 

// EMAIL SMTP CONFIGURATION
// define('SMTP_HOST', $SMTP_HOST);
// define('SMTP_USER', $SMTP_USER);
// define('FROM_MAIL', $from_mail);
// define('SMTP_PASS', CUSTOM_CARE_EMAIL['customercarethriwe']);
// define('FROM_MAIL_NAME', "customer.care@thriwe.com");


/* End */

define('ENBD_PUBLIC_KEY','2D4B6150645367566B59703273357638792F423F4528482B4D6251655468576D');
define('ENBD_PUBLIC_KEY_IV','2A472D4B614E645267556B5870327335');

function enbddecrypt($data)
{
$key = ENBD_PUBLIC_KEY;
$key_iv = ENBD_PUBLIC_KEY_IV;
$data_decrypt=openssl_decrypt($data, 'AES-256-CBC', hex2bin($key), OPENSSL_ZERO_PADDING, hex2bin($key_iv));
return preg_replace('/[^[:print:]]/', '',$data_decrypt);
}

function Enbdencrypt($data){
  $key = ENBD_PUBLIC_KEY;
  $key_iv = ENBD_PUBLIC_KEY_IV;
  return openssl_encrypt($data,'AES-256-CBC',hex2bin($key), null, hex2bin($key_iv));
}
