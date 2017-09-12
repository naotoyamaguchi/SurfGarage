export default class NewBoardApi {
	constructor($location, $http, $window){
		this.$http = $http;
		this.$location = $location;
		this.$http.defaults.headers.common['Authorization'] = "Bearer " + $window.localStorage.getItem('JWT');
	}

	addBoard(board){
		console.log(board);
		return this.$http.post('/api/newBoard', board);
	}

}