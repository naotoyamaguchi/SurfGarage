import angular from 'angular';
import template from './template.html';

class boardsStateController{
	constructor($scope, $filter, BoardsApi){
		this.BoardsApi = BoardsApi;
		this.data = [];
		this.$scope = $scope;
		this.shaperOptions = ['Donald Takayama', 'Chris Christenson', 'Bing', 'Tyler Warren', 'Ryan Lovelace', 'Jeff McCallum'];
		this.metricOptions = [0,1,2,3,4,5,6,7,8,9,10,11,12];
		this.finOptions = [{value: 1, string: 'Single Fin'}, {value: 2, string: 'Twin Fin'}, {value: 3, string: 'Thruster & 2+1'}, {value: 4, string: 'Quad'}, {value: 5, string: '5 Fin Option'}];
		this.fins = null;
		this.feet = null;

		BoardsApi.getBoardsApi()
		.then(res => {
			console.log(res);
			this.data = res.data;
		});
	}

	test(){
		console.log(this.$scope.fins);
	}

	setFinFilter(num){
		boardsStateController.fins = num;
	}

	setFeetFilter(num){
		boardsStateController.feet = num;
	}

	// boardFeetFilter(item){
	// 	if(this.$scope.fins === null || this.$scope.fins === undefined){
	// 		return item;
	// 	} else {
	// 		return item.feet === boardsStateController.feet;
	// 	}
	// }

	boardFinFilter(item){
		if(boardsStateController.$scope.fins === null || boardsStateController.$scope.fins === undefined){
			return item;
		} else {
			console.log("ah",boardsStateController.$scope.fins);
			return item.fins == parseInt(boardsStateController.$scope.fins);
		}
	}

	delete(id){
		console.log("works");
		if(confirm("Click OK to delete")){
			this.BoardsApi.deleteBoardApi(id);
			this.data = this.data.filter((board) => {
				return board.id !== id;
			});
		}
	}

	checkFeatured(img){
		if(img){
			return true;
		} else {
			return false;
		}
	}
}

export default {
	template,
	controller: boardsStateController,
	controllerAs: 'boardsCtrl'
};