var map = {
	canvas : null,
	ctx: null,
	elWidth : 40,
	padding : 1
};

map.buildOverlay = function() {
	this.canvas = document.getElementById("map-overlay");
	this.ctx     = this.canvas.getContext('2d');
	this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
};

map.buildWalls = function() {
	 this.map = [];
	 var elements_x = Math.round( this.canvas.width / 30 );
	 var elements_y = Math.round( this.canvas.height / 30 );
	 
	 var start_x = 30;
	 for (var i = 0; i <= elements_x; i++) {	 	 
	 	 var start_y = 20;
	 	 for (var j = 0; j <= elements_y; j++) {
		 	this.ctx.fillRect( start_x,  start_y, this.elWidth, this.elWidth);
		 	start_y+=90;
	 	 };
	 	 // this.ctx.fillRect( start,  30, this.elWidth, this.elWidth);
	 	 start_x+=100;
	 };

	 
	 //var y = 30;

	 // for (var i = 1; i <= 5; i++) {
	 // 	this.map[i] = [30];
	 // };

	 // this.map[0] = [1,1,1,1,1,1,1,1];
	 // this.map[1] = [1,0,0,0,1,0,1,0];
	 // var x = 0,y = 0;

	 // for(var item in this.map) {
	 // 	for(var secondItem in this.map[item]) {
	 // 		if(this.map[item][secondItem] == 1) {
	 // 			this.ctx.fillStyle = "black";
	 // 		}else {
	 // 			this.ctx.fillStyle = "white";
	 // 		}
		// 	this.ctx.fillRect( x,  y, this.elWidth, this.elWidth);
		// 	x+=this.elWidth;
	 // 	}
	 // 	y+=this.elWidth;
	 // }
}

map.init = function() {
	this.buildOverlay();
	this.buildWalls();
}