export default class BoardsApi {
	constructor($http){
		this.$http = $http;
	}

	getBoardsApi(location){
		return this.$http.get("/api/boards");
	}
}