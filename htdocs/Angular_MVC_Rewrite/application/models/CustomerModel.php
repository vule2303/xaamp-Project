<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class CustomerModel extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	//method get Data 
	public function GetAllCustomer(){
		$this->db->select('*');
		$data = $this->db->get('customer');

		//convert data into array
		$data = $data->result_array();

		//convert array data into json file
		$data = json_encode($data);

		return $data;
	}

}

/* End of file CustomerModel.php */
/* Location: ./application/models/CustomerModel.php */