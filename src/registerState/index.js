import angular from 'angular';
import template from './template.html';

class registerStateController{
	/* @ngInject */
	constructor($scope, NewUserApi){
		this.test = "Hello World";
		this.NewUserApi = NewUserApi;

		console.log("Hello World");
	}

	newUser(user){
		this.NewUserApi.createUser(user);
	}
}

export default {
	template,
	controller: registerStateController,
	controllerAs: 'registerCtrl'
};