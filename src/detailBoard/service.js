export default class DetailedBoardApi {
	constructor($http, $window){
		this.$http = $http;
		this.$http.defaults.headers.common['Authorization'] = "Bearer " + $window.localStorage.getItem('JWT');
	}

	getBoardApi(location){
		return this.$http.get("/api/boards");
	}
}