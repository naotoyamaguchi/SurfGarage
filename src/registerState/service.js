export default class NewUserApi {
	constructor($location, $http){
		this.$http = $http;
		this.$location = $location;
	}

	createUser(user){
		return this.$http.post('http://localhost:3000/api/newUser', user);
	}

}