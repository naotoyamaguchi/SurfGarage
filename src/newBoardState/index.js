import angular from 'angular';
import template from './template.html';

class newBoardController{
	constructor(NewBoardApi){
		this.NewBoardApi = NewBoardApi;

		this.data = [];

		this.feetOptions = [
			{value: 1, feet: 'one'},
			{value: 2, feet: 'two'}
		];

		NewBoardApi.getBoards()
		.then(res => {
			console.log(res);
		});
	}

	addBoard(board){
		board.feet = board.feet.value;
		this.NewBoardApi.addBoard(board)
		.then(res => {
			console.log(res);
		});
	}


}

export default {
	template,
	controller: newBoardController,
	controllerAs: 'newBoardCtrl'
};