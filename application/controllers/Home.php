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
		if($this->session->userdata('userdetails') == true){
			$data = array();
			$uid = $_SESSION['userdetails']['uid'];
			$post = $this->User->getAllPost($uid);
			$friends = $this->User->getAllfriends($uid);
			$requests = $this->User->getAllRequest($uid);
			//echo "<pre>";print_r($post);die;
			$data['title'] = 'Dashboard';
			$data['post'] = $post;
			$data['friends'] = $friends;
			$data['requests'] = $requests;

			web_inner_view('web/dashboard',$data);
		 }
		 else{
		 	redirect('web/login');
		 }
		
	}

	public function alluserdata(){
		$data = array();
		$uid = $_SESSION['userdetails']['uid'];
		$post = $this->User->getAllPost($uid);
		$friends = $this->User->getAllfriends($uid);
		$requests = $this->User->getAllRequest($uid);
		$data['post'] = $post;
		$data['friends'] = $friends;
		$data['requests'] = $requests;
		echo json_encode($data);
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

	public function saveFriendUser(){
		$data = array();
		$returnArr = array();
		$uid = $_POST['uid'];
		$fid = $_POST['fid'];

		$data['uid'] = $uid;
		$data['fid'] = $fid;

		$result = $this->User->saveFriend($data);

		if($result == true){
			$returnArr['error_code'] = 200;
			$returnArr['error_msg'] = "Request Sent";
		}
		else{
			$returnArr['error_code'] = 100;
			$returnArr['error_msg'] = "Something Went Wrong.";
		}

		echo json_encode($returnArr);
	}

	public function post(){
		$data = array();
		$uid = $_SESSION['userdetails']['uid'];
		$offset = $_POST['offsetnum'];
		$post = $this->User->getPosts($uid,$offset);
		$data['posts'] = $post;
		echo json_encode($data);
	}

	public function userinfo(){
		$data = array();
		$data['title'] = 'Userinfo';
		$uid = $_SESSION['userdetails']['uid'];
		$userData = $this->User->getUserData($uid);
		$data['userdata'] = $userData;
		//echo "<pre>";print_r($userData);die;
		web_inner_view('web/userinfo',$data);
	}

	public function submitUserinfo(){
		$data = array();
		$returnArr = array();
		$uid = $this->input->post('uid');
		$fullname = $this->User->enbdnew_encrypt($_POST['fullname']);
		$aboutme = $this->User->enbdnew_encrypt($_POST['aboutme']);
		$location = $this->User->enbdnew_encrypt($_POST['location']);
		$workingat = $this->User->enbdnew_encrypt($_POST['workingat']);
		$relationship = $this->input->post('relationship');

		$data['uid'] = $uid;
		$data['fullname'] = $fullname;
		$data['aboutme'] = $aboutme;
		$data['location'] = $location;
		$data['workingat'] = $workingat;
		$data['relationship'] = $relationship;
		// $data['createdat'] = date('Y-m-d');
		// $data['modifiedat'] = date('Y-m-d');

		$result = $this->User->saveEdituserData($data);

		if($result == true){
			$returnArr['error_code'] = 200;
			$returnArr['error_msg'] = "User Edited Successfully.";
		}
		else{
			$returnArr['error_code'] = 100;
			$returnArr['error_msg'] = "No new Changes.";
		}

		echo json_encode($returnArr);
	}

	public function chat(){
		$data = array();
		$data['title'] = 'Chat';
		web_inner_view('web/chat',$data);	
	}

	public function getallfriendlist(){
		$data = array();
		$uid = $_SESSION['userdetails']['uid'];
		$people = $this->User->getFriends($uid);
		// echo "<pre>";print_r($people);die;
		$data['peoples'] = $people;
		echo json_encode($data);
	}

	public function friendrequest(){
		$data = array();
		$data['title'] = 'Friend Request';
		web_inner_view('web/friendrequest',$data);	
	}

	public function friendrequested(){
		//echo "<pre>";print_r($_SESSION);die;
		$data = array();
		$uid = $_SESSION['userdetails']['uid'];
		$people = $this->User->getPeoplesRequested($uid);
		$data['peoples'] = $people;
		echo json_encode($data);
	}

	public function savefriendrequested(){
		$data = array();
		$returnArr = array();
		$uid = $_POST['uid'];
		$fid = $_POST['fid'];
		$flag = $_POST['flag'];

		$data['uid'] = $uid;
		$data['fid'] = $fid;
		$data['flag'] = $flag;

		if($flag == 3){
			$result = $this->User->deleteFriendRequest($data);
		}
		else{
			$result = $this->User->saveFriendRequest($data);
		}
		//echo "<pre>";print_r($result);die;
		if($result == true){
			$returnArr['error_code'] = 200;
			$returnArr['error_msg'] = "Friend Request Accepted";
		}
		else{
			$returnArr['error_code'] = 100;
			$returnArr['error_msg'] = "Something went wrong.";
		}

		echo json_encode($returnArr);
	}

	public function friends(){
		$data = array();
		$data['title'] = 'Friends';
		web_inner_view('web/friends',$data);	
	}

	public function getfriends(){
		$data = array();
		$uid = $_SESSION['userdetails']['uid'];
		$people = $this->User->getFriendsList($uid);
		$data['peoples'] = $people;
		echo json_encode($data);
	}

	public function savefriends(){
		$data = array();
		$returnArr = array();
		$uid = $_POST['uid'];
		$fid = $_POST['fid'];
		$flag = $_POST['flag'];

		$data['uid'] = $uid;
		$data['fid'] = $fid;
		$data['flag'] = $flag;
		//echo "<pre>"; print_r($data);die;
		if($flag == 2){
			$result = $this->User->removeFriends($data);
		}
		else if($flag == 3){
			$result = $this->User->blockFriends($data);
		}
		else{
			$result = $this->User->savenewFriend($data);
		}
		//echo "<pre>";print_r($result);die;
		if($result == true){
			$returnArr['error_code'] = 200;
			$returnArr['error_msg'] = "Friend Accepted";
		}
		else{
			$returnArr['error_code'] = 100;
			$returnArr['error_msg'] = "Something went wrong.";
		}

		echo json_encode($returnArr);
	}

	public function submitPost(){
		$data = array();
		if($_POST['title'] == ''){
			$data['error_code'] = 100;
			$data['error_msg'] = "Please Enter Title First";
		}
		else{
			$uid = $_SESSION['userdetails']['uid'];
			$uploadPath = "upload-post/";
			move_uploaded_file($_FILES['file']['tmp_name'], $uploadPath . $_FILES['file']['name']);
			$title = $_POST['title'];
			$result = $this->User->SavePostData($title,$uploadPath.$_FILES['file']['name'],$uid);
			if($result == true){
				$data['error_code'] = 200;
				$data['error_msg'] = "Post uploaded successfully!";
			}
			else{
				$data['error_code'] = 300;
				$data['error_msg'] = "Something went wrong!";
			}
		}
		echo json_encode($data);
		
	}

	public function sendMsg(){
		$data = array();
		if($_POST['message'] == ''){
			$data['error_code'] = 100;
			$data['error_msg'] = "Please Type Your Message";
		}
		else{
			$uid = $_POST['uid'];
			$fid = $_POST['fid'];
			// 
			// $uid = $_POST['uid'];
			// $fid = $_POST['fid'];
			$message = $this->User->enbdnew_encrypt($_POST['message']);
			$result = $this->User->SaveSendMessage($message,$uid,$fid);
			if($result == true){
				$data['error_code'] = 200;
				$data['error_msg'] = "Message Sent Successfully!";
			}
			else{
				$data['error_code'] = 100;
				$data['error_msg'] = "Something went wrong!";
			}
		}
		echo json_encode($data);
		
	}

	public function logout(){
		session_destroy();
		redirect(base_url());
	}
}
