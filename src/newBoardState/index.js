import angular from 'angular';
import template from './template.html';

class newBoardController{
	constructor($scope, NewBoardApi, Upload, $timeout){
		this.NewBoardApi = NewBoardApi;

		this.data = [];

		this.metricOptions = [1,2,3,4,5,6,7,8,9,10,11,12];

		this.finOptions = [1,2,3,4,5,6];

		this.Upload = Upload;
		this.$scope = $scope;
		this.$timeout = $timeout;
	}

	  uploadPic(file) {
      console.log(file);
      if(file && file.length){
        for(var i = 0; i < file.length; i++){
          file[i].upload = this.Upload.upload({
            url: 'http://localhost:3000/api/newBoard',
            method: 'POST',
            data: {name: this.$scope.name, shaper: this.$scope.shaper, feet: this.$scope.feet, inches: this.$scope.inches, width: this.$scope.width, thickness: this.$scope.thickness, fins: this.$scope.fins, surfboardImg: {
                name: file[i].name,
                file: file[i]
            }},
          });

          file[i].upload.then((response) => {
            console.log(response);
            this.$timeout(function () {
              file[i].result = response.data;
            });
          }, (response) => {
            console.log(response);
            if (response.status > 0 || response.status == -1)
              this.$scope.errorMsg = "Error message " + response.status + ': ' + response.data;
          }, (evt) => {
            // Math.min is to fix IE which reports 200% sometimes
            this.$scope.file[i].progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          })
          .then(() => {
            window.location.replace('/#!/test');
          });
        }
      }


      file[0].upload = this.Upload.upload({
        url: 'http://localhost:3000/api/newBoard',
        method: 'POST',
        data: {name: this.$scope.name, shaper: this.$scope.shaper, feet: this.$scope.feet, inches: this.$scope.inches, width: this.$scope.width, thickness: this.$scope.thickness, fins: this.$scope.fins, surfboardImg: {
        		name: file[0].name,
        		file: file
        }},
      });

      file[0].upload.then((response) => {
      	console.log(response);
        this.$timeout(function () {
          file[0].result = response.data;
        });
      }, (response) => {
      	console.log(response);
        if (response.status > 0 || response.status == -1)
          this.$scope.errorMsg = "Error message " + response.status + ': ' + response.data;
      }, (evt) => {
        // Math.min is to fix IE which reports 200% sometimes
        this.$scope.file[0].progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      })
      .then(() => {
      	window.location.replace('/#!/test');
      });


    }
}

export default {
	template,
	controller: newBoardController,
	controllerAs: 'newBoardCtrl'
};