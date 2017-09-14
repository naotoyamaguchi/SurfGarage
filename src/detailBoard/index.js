import angular from 'angular';
import template from './template.html';

class detailBoardController{
	constructor(DetailedBoardApi, $stateParams){
		this.DetailedBoardApi = DetailedBoardApi;
		this.params = $stateParams;

		this.data = [];
		this.DetailedBoardApi.getBoardApi(this.params.id)
		.then(response => {
			console.log(response.data);
			this.data = response.data;
		});
	}

	// delete(id){
	// 	console.log("works");
	// 	this.DetailedBoardApi.deleteBoardApi(id);
	// 	this.data = this.data.filter((board) => {
	// 		return board.id !== id;
	// 	});
	// }
}

export default {
	template,
	controller: detailBoardController,
	controllerAs: 'detailCtrl'
};