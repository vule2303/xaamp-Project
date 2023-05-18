<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

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
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('index.html');
	}

	public function getDataModel()
	{
		$this->load->model('getDataModel'); //call GetDataModel

		//khi lấy được da ta rồi thì hàm cần một nơi lưu trữ

		$data = $this->getDataModel->getData();
		
		//get data from getDataModel
		echo $data;

	}

	public function  deleteCustomer($user)
	{
		$this->load->model('DeleteModel');

		$delete = $this->DeleteModel->deleteById($user);

	}

	public function Create()
	{

	//tao mang du lieu de luu vao database
		$name = $this->input->post('name');
		$email = $this->input->post('email');

		$this->load->model('getDataModel');
		$res =$this->getDataModel->CreateUser($name,$email);

		 

		return
	}
}
