export default class TestApi {
	constructor($http){
		this.$http = $http;
	}

	getTestApi(location){
		return this.$http.get("/api/test");
	}
}