<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class DeleteModel extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}
	//method delete

	public function deleteById($id)
	{
		$this->db->where('id', $id);

		return $this->db->delete('customer');
	}
}

/* End of file DeleteModel.php */
/* Location: ./application/models/DeleteModel.php */