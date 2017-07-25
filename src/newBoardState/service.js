export default class NewBoardApi {
	constructor($http){
		this.$http = $http;
	}

	getBoards(location){
		return this.$http.get("/api/test");
	}
}