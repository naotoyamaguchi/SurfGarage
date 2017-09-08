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
}

export default {
	template,
	controller: boardsStateController,
	controllerAs: 'boardsCtrl'
};