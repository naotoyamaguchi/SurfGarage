export default class BoardsApi {
	/* @ngInject */
	constructor($http, $window){
		this.$http = $http;
		this.$http.defaults.headers.common['Authorization'] = "Bearer " + $window.localStorage.getItem('JWT');
	}

	getBoardsApi(location){
		return this.$http.get("/api/boards");
	}

	deleteBoardApi(id){
		return this.$http.delete('/api/deleteBoard/'+id);
	}
}