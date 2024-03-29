<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Model {

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

    // public function loginCheck($email, $password) {
    //   $this->db->Select("*");
    //   $this->db->where('email',$email);
    //   $this->db->where('password',$password);
    //   $query = $this->db->get('tbl_register');
    //   $data = $query->row_array();
    //   return $data;
    // }

    public function loginCheck($loginid, $pass) {
      $this->db->Select("*");
      $this->db->where('email',$loginid);
      $this->db->where('password',$pass);
      $query = $this->db->get('tbl_register');
      $data = $query->row_array();
      return $data;
    }

    public function emailCheck($email){
      $this->db->Select("*");
      $this->db->where('email',$email);
      $query = $this->db->get('tbl_register');
      $data = $query->row_array();
      return $data;
    }

    public function usernameCheck($username){
      $this->db->Select("*");
      $this->db->where('username',$username);
      $query = $this->db->get('tbl_register');
      $data = $query->row_array();
      return $data;
    }

    public function referralcodeCheck($referralcode){
      $this->db->Select("*");
      // $this->db->where('email',$email);
      $this->db->where('referralcode',$referralcode);
      $query = $this->db->get('tbl_referral');
      $data = $query->row_array();
      return $data;
    }

    public function saveRegisteredUser($data) {
			return $this->db->insert("tbl_register",$data);
		}

    public function getPeoples($uid){
      $sql = "SELECT ru.uid as friendid, ru.fullname  FROM `tbl_register` ru WHERE `ru`.`uid` != '".$uid."' AND ru.uid NOT IN (SELECT fid from tbl_friend fu where fu.uid='".$uid."') ORDER BY RAND()";
      $query = $this->db->query($sql);
      $data = $query->result_array();
      $d2 = array();
      $returnArr = array();
      if(count($data)>0){
        foreach ($data as $key => $value) {
          $fid = $value['friendid'];
          $fname = $this->enbdnew_decrypt($value['fullname']);
          $d2['friendid'] = $fid;
          $d2['fullname'] = $fname;
          array_push($returnArr, $d2);
        }
      }
      return $returnArr;
    }

    public function getPosts($uid,$offset){
      $limit = 10;
      $sql = "SELECT * FROM tbl_post ORDER BY pid DESC LIMIT $limit OFFSET $offset";  
      $query = $this->db->query($sql);
      $data = $query->result_array();
      $d2 = array();
      $returnArr = array();
      // if(count($data)>0){
      //   foreach ($data as $key => $value){
      //     $pid = $value['postid'];
      //     $d2['postid'] = $pid;
      //     array_push($returnArr,$d2);
      //   }
      // }
      return $data;
    }

    public function saveFriend($data) {
			return $this->db->insert("tbl_friend",$data);
		}

    public function getUserData($uid){
      // $this->db->select('fullname,username,email,aboutme,location,workingat,relationship,createdat,modifiedat');
      // $this->db->from('tbl_register');
      // $this->db->where('uid',$uid);
      // $query = $this->db->get();
      // return $query->row_array();
      $sql = "SELECT ru.uid, ru.fullname, ru.username, ru.email, ru.aboutme, ru.location, ru.workingat, ru.relationship,ru.createdat, ru.modifiedat, rf.referralcode  FROM `tbl_register` ru LEFT JOIN tbl_referral rf ON ru.uid = rf.uid where ru.uid='".$uid."'";
      $query = $this->db->query($sql);
      $data = $query->row_array();
      return $data;
    }

    public function getAllPost($uid){
      $this->db->Select("count(pid) as total");
      $this->db->where('uid',$uid);
      $query = $this->db->get('tbl_post');
      $data = $query->row_array();
      return $data;
    }

    public function getAllfriends($uid){
      $this->db->Select("count(fid) as totalfriends");
      $this->db->where('fid',$uid);
      $this->db->where('status',1);
      $query = $this->db->get('tbl_friend');
      $data = $query->row_array();
      return $data;
    }

    public function getAllRequest($uid){
      $this->db->Select("count(uid) as totalrequests");
      $this->db->where('fid',$uid);
      $this->db->where('status',0);
      $query = $this->db->get('tbl_friend');
      $data = $query->row_array();
      return $data;
    }

    public function saveEdituserData($data){
      $this->db->set("fullname",$data['fullname']);
      $this->db->set("aboutme",$data['aboutme']);
      $this->db->set("location",$data['location']);
      $this->db->set("workingat",$data['workingat']);
      $this->db->set("relationship",$data['relationship']);
      // $this->db->set("createdat",$data['createdat']);
      // $this->db->set("modifiedat",$data['modifiedat']);

      $this->db->where("uid",$data['uid']);
      $this->db->update('tbl_register');
      $result = $this->db->affected_rows();
      return $result;
    }

    public function getFriends($uid){
      $sql = "SELECT ru.uid as friendid, ru.fullname  FROM `tbl_register` ru WHERE `ru`.`uid` != '".$uid."' AND ru.uid IN (SELECT fid from tbl_friend fu where fu.uid='".$uid."' AND fu.status=1 )";
      $query = $this->db->query($sql);
      $data = $query->result_array();
      $d2 = array();
      $returnArr = array();
      if(count($data)>0){
        foreach ($data as $key => $value) {
          $fid = $value['friendid'];
          $fname = $this->enbdnew_decrypt($value['fullname']);
          $d2['friendid'] = $fid;
          $d2['fullname'] = $fname;
          array_push($returnArr, $d2);
        }
      }
      return $returnArr;
    }

    public function getPeoplesRequested($uid){
      $sql = "SELECT ru.uid as friendid,ru.fullname FROM `tbl_register` ru LEFT JOIN tbl_friend fr ON ru.uid = fr.uid where fr.fid= '".$uid."' and fr.status=0";
      $query = $this->db->query($sql);
      $data = $query->result_array();
      $d2 = array();
      $returnArr = array();
      if(count($data)>0){
        foreach ($data as $key => $value) {
          $fid = $value['friendid'];
          $fname = $this->enbdnew_decrypt($value['fullname']);
          $d2['friendid'] = $fid;
          $d2['fullname'] = $fname;
          array_push($returnArr, $d2);
        }
      }
      return $returnArr;
    }

    public function saveFriendRequest($data) {
      $this->db->set('status',$data['flag']);
      $this->db->where("fid",$data['uid']);
      $this->db->where("uid",$data['fid']);
      // $this->db->where("fid",$data['fid']);
      $this->db->update('tbl_friend');
      $result = $this->db->affected_rows();
      return $result; 
		}

    public function deleteFriendRequest($data){
      // $this->db->set('status',$data['flag']);
      $this->db->where("fid",$data['uid']);
      $this->db->where("uid",$data['fid']);
      // $this->db->where("fid",$data['fid']);
      $this->db->delete('tbl_friend');
      $result = $this->db->affected_rows();
      return $result; 
    }

    public function getFriendsList($uid){
      $sql = "SELECT ru.uid as friendid, ru.fullname From tbl_friend fr LEFT JOIN tbl_register ru ON ru.uid=fr.uid where fr.fid='".$uid."' and fr.status=1";
      $query = $this->db->query($sql);
      $data = $query->result_array();
      $d2 = array();
      $returnArr = array();
      if(count($data)>0){
        foreach ($data as $key => $value) {
          $fid = $value['friendid'];
          $fname = $this->enbdnew_decrypt($value['fullname']);
          $d2['friendid'] = $fid;
          $d2['fullname'] = $fname;
          array_push($returnArr, $d2);
        }
      }
      return $returnArr;
    }

    public function savenewFriend($data) {
      $this->db->set('status',$data['flag']);
      $this->db->where("fid",$data['uid']);
      $this->db->where("uid",$data['fid']);
      // $this->db->where("fid",$data['fid']);
      $this->db->update('tbl_friend');
      $result = $this->db->affected_rows();
      return $result; 
		}

    public function blockFriends($data) {
      $this->db->set('status',$data['flag']);
      $this->db->where("fid",$data['uid']);
      $this->db->where("uid",$data['fid']);
      // $this->db->where("fid",$data['fid']);
      $this->db->update('tbl_friend');
      $result = $this->db->affected_rows();
      return $result; 
    }


    public function removeFriends($data){
      $this->db->where("fid",$data['uid']);
      $this->db->where("uid",$data['fid']);
      $this->db->delete('tbl_friend');
      $result = $this->db->affected_rows();
      return $result; 
    }

    public function SavePostData($title,$fileName,$uid){
      $data = array();
      $data['uid'] = $uid;
      $data['title'] = $title;
      $data['image'] = $fileName;
      $data['status'] = 1;
      return $this->db->insert("tbl_post",$data);
    }

    public function SaveSendMessage($message,$uid,$fid){
      $data = array();
      //$data['mid'] = $mid;
      $data['uid'] = $uid;
      $data['fid'] = $fid;
      $data['message'] = $message;
      $data['status'] = 1;
      return $this->db->insert("tbl_message",$data);
    }

    public function getAllMessages($uid){
      //$sql = "SELECT ru.uid as friendid, ru.fullname From tbl_friend fr LEFT JOIN tbl_register ru ON ru.uid=fr.uid where fr.fid='".$uid."' and fr.status=1";
      $sql = "SELECT msg.mid, msg.uid as userid, msg.fid as friendid, ru.fullname,msg.message FROM `tbl_message` msg LEFT JOIN tbl_register ru ON ru.uid = msg.fid where msg.uid='".$uid."' AND msg.isRead != 1 ORDER BY msg.mid desc LIMIT 1";
      $query = $this->db->query($sql);
      $data = $query->result_array();
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
