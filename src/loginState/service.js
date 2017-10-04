export default class LoginApi {
	/* @ngInject */
	constructor($location, $http){
		this.$http = $http;
		this.$location = $location;
	}

	loginUser(user){
		return this.$http.post('http://localhost:3000/api/login', user);
	}
}