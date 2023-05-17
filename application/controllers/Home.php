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
			// $email = $this->input->post('email');
			$loginid = $this->User->enbdnew_encrypt($_POST['loginid']);
			// $password = $this->input->post('password');
			$password = $this->User->enbdnew_encrypt($_POST['password']);
			
			// $result = $this->User->loginCheck($email,$password);
			$result = $this->User->loginCheck($loginid,$password);
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
		// if($this->session->userdata('userdetails') == true){
			$data = array();
			$data['title'] = 'Dashboard';
			web_inner_view('web/dashboard',$data);
		// }
		// else{
		// 	redirect('web/login');
		// }
		
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
		$result = $this->User->emailCheck($email);
		if($result == true){
			$returnArr['error_code'] = 200;
			$returnArr['error_msg'] = "Email already exist.";
		}
		else{
			$returnArr['error_code'] = 100;
			$returnArr['error_msg'] = "Email available";
		}
		echo json_encode($returnArr);
	}

	public function checkUsername(){
		$returnArr = array();
		$username = $_POST['username'];
		$result = $this->User->usernameCheck($username);
		if($result == true){
			$returnArr['error_code'] = 200;
			$returnArr['error_msg'] = "Username already exist.";
		}
		else{
			$returnArr['error_code'] = 100;
			$returnArr['error_msg'] = "Username available";
		}
		echo json_encode($returnArr);
	}

	public function checkReferralCode(){
		$returnArr = array();
		$referralcode = $this->User->enbdnew_encrypt($_POST['referralcode']);
		// echo "<pre>"; print_r($referralcode);die;
		
	    $result = $this->User->referralcodeCheck($referralcode);
		if($result == true){
			if($result['status'] == 0){
				$returnArr['error_code'] = 100;
				$returnArr['error_msg'] = "Referral code expired.";
			}
			else if($result['status'] == 2){
				$returnArr['error_code'] = 100;
				$returnArr['error_msg'] = "Referral code already used.";
			}
			else{
				$returnArr['error_code'] = 200;
				$returnArr['error_msg'] = "Referral Code Matched.";
			}
		}
		else{
			$returnArr['error_code'] = 100;
			$returnArr['error_msg'] = "Referral Code not matched.";
		}
		echo json_encode($returnArr);
	}

	public function submitRegisteredUser(){
		$data = array();
		$returnArr = array();
		$fullname = $this->User->enbdnew_encrypt($_POST['fullname']);
		$username = $this->User->enbdnew_encrypt($_POST['username']);
		$email = $this->User->enbdnew_encrypt($_POST['email']);
		$password = $this->User->enbdnew_encrypt($_POST['password']);
		$aboutme = $this->User->enbdnew_encrypt($_POST['aboutme']);
		$location = $this->User->enbdnew_encrypt($_POST['location']);
		$workingat = $this->User->enbdnew_encrypt($_POST['workingat']);
		$relationship = $this->input->post('relationship');
		// $referralcode = $this->User->enbdnew_encrypt($_POST['referralcode']);
		$createdat = $this->input->post('createdat');
		$modifiedat = $this->input->post('modifiedat');


		$data['fullname'] = $fullname;
		$data['username'] = $username;
		$data['email'] = $email;
		$data['password'] = $password;
		$data['aboutme'] = $aboutme;
		$data['location'] = $location;
		$data['workingat'] = $workingat;
		$data['relationship'] = $relationship;
		// $data['referralcode'] = $referralcode;
		$data['createdat'] = date('Y-m-d');
		$data['modifiedat'] = date('Y-m-d');

		$result = $this->User->saveRegisteredUser($data);

		if($result == true){
			$returnArr['error_code'] = 200;
			$returnArr['error_msg'] = "User Registered Sucessfuly.";
		}
		else{
			$returnArr['error_code'] = 100;
			$returnArr['error_msg'] = "Invalid User.";
		}
		
		echo json_encode($returnArr);
	}

	public function profile(){
		if($this->session->userdata('userdetails') == true){
			$data = array();
			$data['title'] = 'profile';
			web_inner_view('web/profile',$data);
		}
		else{
			redirect('web/index');
		}
	}

	public function peopleyoumayknow(){
		$data = array();
		$uid = $_SESSION['userdetails']['uid'];
		$people = $this->User->getPeoples($uid);
		$data['peoples'] = $people;
		echo json_encode($data);
	}

	public function logout(){
		session_destroy();
		redirect(base_url());
	}
}
