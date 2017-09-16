export default class editBoardApi {
	constructor($http, $window){
		this.$http = $http;
		this.data = [];
	}

	getBoardApi(id){
		return this.$http.get("/api/boards/"+id);
	}

	setDefaultPictureApi(surfboardId, imageUrl){
		console.log(surfboardId, imageUrl);
		return this.$http.put('/api/boards/edit/'+surfboardId+'/'+imageUrl);
	}
}