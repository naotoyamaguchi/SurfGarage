import angular from 'angular';
import template from './template.html';

class boardsStateController{
	constructor($scope, $filter, BoardsApi){
		this.BoardsApi = BoardsApi;
		this.data = [];
		this.$scope = $scope;
		this.$filter = $filter;
		this.$scope.minFeet = null;
		this.$scope.maxFeet = null;
		this.$scope.boardFilter = {};
		this.$scope.finsString = {};
		this.$scope.shaperString = "";
		this.shaperOptions = ['Donald Takayama', 'Chris Christenson', 'Bing', 'Tyler Warren', 'Ryan Lovelace', 'Jeff McCallum'];
		this.feetOptions = [4,5,6,7,8,9,10,11,12];
		this.metricOptions = [0,1,2,3,4,5,6,7,8,9,10,11,12];
		this.finOptions = [{value: '!!', string: 'All'}, {value: 1, string: 'Single Fin'}, {value: 2, string: 'Twin Fin'}, {value: 3, string: 'Thruster & 2+1'}, {value: 4, string: 'Quad'}, {value: 5, string: '5 Fin Option'}, ];
		this.fins = null;
		this.feet = null;

		BoardsApi.getBoardsApi()
		.then(res => {
			console.log(res);
			this.data = res.data;
		});
	}

	setFinsFilter(input, string){
		this.$scope.boardFilter.fins = input;
		this.$scope.finsString = string;
		console.log(this.$scope.boardFilter);
		console.log(this.data);
		console.log(this.$scope.filteredBoards);
	}

	setShaperFilter(input, string){
		this.$scope.boardFilter.shaper = input;
		this.$scope.shaperString = string;
		console.log(this.$scope.boardFilter);
	}

	setFeetFilter(input){
		this.$scope.boardFilter.feet = input;
		console.log(this.$scope.boardFilter);
	}

	setMinFilter(input){
		this.$scope.minFeet = input;
		console.log(this.$scope.minFeet);
	}

	setMaxFilter(input){
		this.$scope.maxFeet = input;
		console.log(this.$scope.maxFeet);
	}

	sizeFilter(board){
	  var ret = true;

	  if(this.$scope.minFeet && this.$scope.minFeet > board.feet) {
	    ret = false;
	  }

	  if(this.$scope.maxFeet && this.$scope.maxFeet < board.feet) {
	    ret = false;
	  }

	  return ret;
	}

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