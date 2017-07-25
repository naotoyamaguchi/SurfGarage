import angular from 'angular';
import template from './template.html';

class newBoardController{
	constructor(NewBoardApi){
		this.NewBoardApi = NewBoardApi;

		this.data = [];
		NewBoardApi.getBoards()
		.then(res => {
			console.log(res);
			this.data = res.data;
		});
	}
}

export default {
	template,
	controller: newBoardController,
	controllerAs: 'newBoardCtrl'
};