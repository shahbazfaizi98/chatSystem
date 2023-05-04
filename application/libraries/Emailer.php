<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Emailer {

  public function __construct() {
    $this->CI =& get_instance();
    $this->CI->load->library('email');
  }

  public function web_send_email($mail_arr) {
    if(!empty($mail_arr)){
      /* Customer config for emails */
      $config['protocol'] = 'smtp';
      $config['charset'] = 'utf-8';
      $config['mailtype'] = 'html';
      $config['from'] = FROM_MAIL;
      $config['from_name'] = FROM_MAIL_NAME;
      $config['reply_to'] = 'no-reply@gmail.com';
      $config['reply_to_name'] = 'no-reply';
      $config['smtp_host'] = SMTP_HOST;
      $config['smtp_user'] = SMTP_USER;
      $config['smtp_pass'] = SMTP_PASS;
      $config['smtp_port'] = 587;
      $config['smtp_auth'] = true;
      $config['smtp_crypto'] = 'tls';
      $config['smtp_auth'] = true;
      $config['validate'] = true;
      $config['smtp_timeout'] = 10;
      $config['newline'] = "\r\n";
      $config['crlf'] = "\r\n";
      /* Customer config for emails */
      $this->CI->load->library('email', $config);
      $this->CI->email->clear();
      $this->CI->email->set_newline("\r\n");
      $this->CI->email->initialize($config);
      $this->CI->email->from($config['from'], $config['from_name']);
      $this->CI->email->reply_to($config['reply_to'], $config['reply_to_name']);

      if(is_array($mail_arr['to'])){
        $too = implode(',', $mail_arr['to']);
      }else{
        $too = $mail_arr['to'];
      }
      $this->CI->email->to($too);

      if(@$mail_arr['cc']){
        $this->CI->email->cc($mail_arr['cc']);
      }

      if(@$mail_arr['bcc']){
        $this->CI->email->bcc($mail_arr['bcc']);
      }

      if(@$mail_arr['attach']){
        $this->CI->email->attach($mail_arr['attach']);
      }

      $this->CI->email->subject($mail_arr['subject']);

      $body = $this->CI->load->view('mailers/'.$mail_arr['emailer'], $mail_arr['data'], TRUE);
      $this->CI->email->message($body);

      $sent = $this->CI->email->send();
      if(!$sent){
        error_log("check sent-->".$sent);
        echo $this->CI->email->print_debugger();
      } else {
        return $sent;
      }
    }
    return false;
  }

}

?>