export default class NewUserApi {
	/* @ngInject */
	constructor($location, $http){
		this.$http = $http;
		this.$location = $location;
	}

	createUser(user){
		return this.$http.post('/api/newUser', user);
	}

}