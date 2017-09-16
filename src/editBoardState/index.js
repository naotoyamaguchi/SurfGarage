import angular from 'angular';
import template from './template.html';

class editBoardController{
	constructor(editBoardApi, $stateParams){
		this.editBoardApi = editBoardApi;
		this.params = $stateParams;

		this.data = [];
		this.editBoardApi.getBoardApi(this.params.id)
		.then(response => {
			console.log(response.data);
			this.data = response.data;
		});
	}

	chooseDefault(surfboardId, imageUrl){
		this.editBoardApi.setDefaultPictureApi(surfboardId, encodeURIComponent(imageUrl));
	}
}

export default {
	template,
	controller: editBoardController,
	controllerAs: 'editCtrl'
};