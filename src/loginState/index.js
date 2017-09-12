import angular from 'angular';
import template from './template.html';

class loginStateController{
	constructor($window, LoginApi){
		this.test = "Hello World";
		this.LoginApi = LoginApi;
		this.$window = $window;

		console.log("Hello World");
	}

	login(user){
		this.LoginApi.loginUser(user)
		.then(res => {
			this.$window.localStorage.setItem('JWT', res.data.JWT);
		});
	}
}

export default {
	template,
	controller: loginStateController,
	controllerAs: 'loginCtrl'
};