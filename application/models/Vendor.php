<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Vendor extends CI_Model {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 * 
	 */

    function __construct() {
        parent::__construct();
        //$this->load->database(); <----remove this
      }

    public function loginCheck($loginid, $pass) {
      $this->db->Select("*");
      $this->db->where('email',$loginid);
      $this->db->where('password',$pass);
      //$this->db->where('accountStatus',1);
      $query = $this->db->get('tbl_user');
      $data = $query->row_array();
      return $data;
    }
    
    /* -------------------------Encrypt Decrypt Function Start ------------------------- */


      public function enbdnew_encrypt($data){
        $keys = $this->getDataKeys();
        $key = isset($keys['secret_key'])?enbddecrypt($keys['secret_key']):'';
        $key_iv = isset($keys['secret_key_iv'])?enbddecrypt($keys['secret_key_iv']):'';
        return openssl_encrypt($data,'AES-256-CBC',hex2bin($key), null, hex2bin($key_iv));
      }
      
      public function enbdnew_decrypt($data){
        $keys = $this->getDataKeys();
        $key = isset($keys['secret_key'])?enbddecrypt($keys['secret_key']):'';
        $key_iv = isset($keys['secret_key_iv'])?enbddecrypt($keys['secret_key_iv']):'';
        $data_decrypt=openssl_decrypt($data, 'AES-256-CBC', hex2bin($key), OPENSSL_ZERO_PADDING, hex2bin($key_iv));
        return preg_replace('/[^[:print:]]/', '',$data_decrypt);
      }

      public function getDataKeys(){
        $this->db->Select("`secret_key`, `secret_key_iv`");
        $this->db->where('data_key_id',1);
        $this->db->where('is_active',1);
        $query = $this->db->get('data_key');
        $data = $query->row_array();
       // echo "<pre>";print_r($data);exit;
        return $data;
      }

      /* -------------------------Encrypt Decrypt Function End ------------------------- */

}
