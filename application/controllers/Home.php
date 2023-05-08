<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

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

	function __contruct()
    {
        parent::__construct();
  
    }
	
	 
	public function index()
	{
		if($this->input->is_ajax_request()){
			$returnArr = array();
			$loginid = $this->input->post('loginid');
			$pass = $this->input->post('password');
			//$pass = md5($password);
			
			$result = $this->Vendor->loginCheck($loginid,$pass);
			//echo "<pre>";print_r($result);echo "</pre>";die;
			if($result == true){
				$this->session->set_userdata('userdetails',$result);
				$returnArr['error_code'] = 200;
				$returnArr['error_class'] = SUCCESS_CLASS;
				$returnArr['error_msg'] = "Login Successfully";
			}
			else{
				$returnArr['error_code'] = 100;
				$returnArr['error_class'] = ERROR_CLASS;
				$returnArr['error_msg'] = "Invalid Login Details";
			}
			echo json_encode($returnArr);
		}
		else{
			if($this->session->userdata('userdetails') == false){
				$this->load->view('web/login');
			}
			else{
				$this->dashboard();
			}
		}
	}
	
	public function dashboard(){
		$data = array();
		$data['title'] = 'Dashboard';
		web_inner_view('web/dashboard',$data);
		
	}

	public function register(){
		$data = array();
		$data['title'] = 'Register';
		$this->load->view('web/register',$data);
		
	}

	public function forget_password(){
		$data = array();
		$data['title'] = 'Forget Password';
		$this->load->view('web/forget-password',$data);
		
	}

	public function checkEmail(){
		$returnArr = array();
		$email = $_POST['email'];
		if($email == "test@gmail.com"){
			$returnArr['error_code'] = 200;
			$returnArr['error_msg'] = "Email already exist.";
		}
		else{
			$returnArr['error_code'] = 100;
			$returnArr['error_msg'] = "Email available";
		}
		echo json_encode($returnArr);
	}

	public function logout(){
		session_destroy();
		redirect(base_url());
	}
}
