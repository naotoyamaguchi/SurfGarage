import angular from 'angular';
import template from './template.html';

class newBoardController{
	constructor($scope, NewBoardApi, Upload, $timeout, $state){
		this.NewBoardApi = NewBoardApi;

		this.data = [];

		this.metricOptions = [0,1,2,3,4,5,6,7,8,9,10,11,12];

		this.finOptions = [1,2,3,4,5,6];

		this.Upload = Upload;
		this.$scope = $scope;
		this.$timeout = $timeout;
    this.$state = $state;
	}

	  uploadPic(file) {
      console.log("file",file);
      if(file && file.length){
        this.Upload.upload({
          url: 'http://localhost:3000/api/newBoard',
          method: 'POST',
          data: {name: this.$scope.name, shaper: this.$scope.shaper, feet: this.$scope.feet, inches: this.$scope.inches, width: this.$scope.width, thickness: this.$scope.thickness, fins: this.$scope.fins, surfboardImg: file, numOfFiles: file.length
          }
        })
        .then((res)=>{
          console.log(res);
          this.$state.go('boardsState');
        });
      }
    }
}

export default {
	template,
	controller: newBoardController,
	controllerAs: 'newBoardCtrl'
};