export default class DetailedBoardApi {
	/* @ngInject */
	constructor($http, $window){
		this.$http = $http;
		this.data = [];
	}

	getBoardApi(id){
		return this.$http.get("/api/boards/"+id);
	}
}