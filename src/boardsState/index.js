import angular from 'angular';
import template from './template.html';

class boardsStateController{
	constructor(BoardsApi){
		this.BoardsApi = BoardsApi;

		this.data = [];
		BoardsApi.getBoardsApi()
		.then(res => {
			console.log(res);
			this.data = res.data;
		});
	}

	delete(id){
		console.log("works");
		this.BoardsApi.deleteBoardApi(id);
		this.data = this.data.filter((board) => {
			return board.id !== id;
		});
	}
}

export default {
	template,
	controller: boardsStateController,
	controllerAs: 'boardsCtrl'
};