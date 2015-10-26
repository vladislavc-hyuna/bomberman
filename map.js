var map = {
	canvas : null,
	ctx: null,
	elWidth : 30,
	padding : 1
};

map.buildOverlay = function() {
	this.canvas = document.getElementById("map-overlay");
	this.ctx     = this.canvas.getContext('2d');
	this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
};

map.buildWalls = function() {
	 this.map = [];
	 this.map[0] = [1,1,1,1,1,1,1,1];
	 this.map[1] = [1,0,0,0,1,0,1,0];
	 var x = 0,y = 0;

	 for(var item in this.map) {
	 	for(var secondItem in this.map[item]) {
	 		if(this.map[item][secondItem] == 1) {
	 			this.ctx.fillStyle = "black";
	 		}else {
	 			this.ctx.fillStyle = "white";
	 		}
			this.ctx.fillRect( x,  y, this.elWidth, this.elWidth);
			x+=this.elWidth;
	 	}
	 	y+=this.elWidth;
	 }
}

map.init = function() {
	this.buildOverlay();
	this.buildWalls();
}