import angular from 'angular';
import template from './template.html';

class testStateController{
	constructor(TestApi){
		this.TestApi = TestApi;

		this.data = [];
		TestApi.getTestApi()
		.then(res => {
			console.log(res);
			this.data = res.data;
		});
	}
}

export default {
	template,
	controller: testStateController,
	controllerAs: 'testCtrl'
};