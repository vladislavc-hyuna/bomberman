function Map() {
	this.canvas = null;
	this.ctx = null;
	this.elWidth = 40;
	this.objects = [];
}

Map.prototype.buildOverlay = function() {
	this.canvas = document.getElementById("map-overlay");
	this.ctx     = this.canvas.getContext('2d');
	this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
};

Map.prototype.checkObject = function(x,y) {
	return this.objects.find(function(element, index, array) {
		var wallCoords = array[index].getCoords();

		if( wallCoords[0] == x && wallCoords[1] == y) {
			return true;
		}else {
			return false
		}
	});
}

Map.prototype.buildWalls = function() {
	 this.map = [];

	 var elements_x = this.canvas.width / 40;
	 var elements_y = this.canvas.height / 40;

	 var start_y = 40;
	 for (var i = 1; i <= elements_x; i++) {
	 	if( (i%2 != 0 || i == 1) && i!=20 ) {
	 		var start_x = 40;
		 	for (var j = 1; j <= elements_y; j++) {
		 		if( (j%2 != 0 || j == 1 ) && j!=20) {

		 			var wall = new Wall();
		 			wall.setCoords(start_x, start_y);

		 			this.objects.push(wall);
		 			this.ctx.fillStyle = wall.color;
		 			this.ctx.fillRect( start_x,  start_y, this.elWidth, this.elWidth);
		 		}
		 	 	start_x+=40;
		 	}
	 	}
	 	start_y+=40;
	}
}

Map.prototype.buildBricks = function() {

}

Map.prototype.init = function() {
	this.buildOverlay();
	this.buildWalls();
	console.log(this.objects);
}