import angular from 'angular';
import template from './template.html';

class newBoardController{
	constructor(NewBoardApi){
		this.NewBoardApi = NewBoardApi;

		this.data = [];

		this.feetOptions = [
			{value: 1, feet: 'one'},
			{value: 2, feet: 'two'},
			{value: 3, feet: 'three'},
			{value: 4, feet: 'four'},
			{value: 5, feet: 'five'},
			{value: 6, feet: 'six'},
			{value: 7, feet: 'seven'},
			{value: 8, feet: 'eight'},
			{value: 9, feet: 'nine'},
			{value: 10, feet: 'ten'},
			{value: 11, feet: 'eleven'},
			{value: 12, feet: 'twelve'}
		];

		this.inchOptions = [
			{value: 1, feet: 'one'},
			{value: 2, feet: 'two'},
			{value: 3, feet: 'three'},
			{value: 4, feet: 'four'},
			{value: 5, feet: 'five'},
			{value: 6, feet: 'six'},
			{value: 7, feet: 'seven'},
			{value: 8, feet: 'eight'},
			{value: 9, feet: 'nine'},
			{value: 10, feet: 'ten'},
			{value: 11, feet: 'eleven'},
			{value: 12, feet: 'twelve'}
		];

		this.finsOptions = [
			{value: 0, fins: 'zero'},
			{value: 1, fins: 'one'},
			{value: 2, fins: 'two'},
			{value: 3, fins: 'three'},
			{value: 4, fins: 'four'},
			{value: 5, fins: 'five'}
		];
	}

	addBoard(board){
		board.feet = board.feet.value;
		board.inches = board.inches.value;
		board.fins = board.fins.value;
		this.NewBoardApi.addBoard(board)
		.then(res => {
			window.location.replace('/#!/test');
		});
	}


}

export default {
	template,
	controller: newBoardController,
	controllerAs: 'newBoardCtrl'
};