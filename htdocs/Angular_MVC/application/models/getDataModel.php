<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class getDataModel extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}
	//method get Data
	public function getData() {
		//khi khai báo biến trong php dùng $
		$this->db->select('*'); // get all data
		$data = $this->db->get('customer'); //select from table

		//khi lấy data là một dạnh danh sách thì phải chuyển sang dạng array

		$data = $data->result_array(); // convert to list;


		//convert into json file
		$data = json_encode($data);

		//var_dump($data); // print $data
		return $data;

	}


}


/* End of file getData.php */
/* Location: ./application/models/getData.php */
