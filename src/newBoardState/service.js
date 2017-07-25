export default class NewBoardApi {
	constructor($http){
		this.$http = $http;
	}

	getBoards(location){
		return this.$http.get("/api/test");
	}

	addBoard(board){
		console.log(board);
		// return this.$http.post(`/api/newBoard?name=${board.name}&shaper=${board.shaper}&feet=${board.feet}&inches=${board.inches}&width=${board.width}&thickness=${board.thickness}&fins=${board.fins}`);
		return this.$http.post('/api/newBoard', board);
	}
}