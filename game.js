function Game()
{

}

Game.prototype.init = function() {
	var map = new Map();
	map.init();

	socket = io.connect();

	$('body').on('keydown', doKeyDown);

	function doKeyDown(e){
		
		if(e.keyCode == 87){
			socket.emit('move', {'id':socket.id, 'direction':'up'});
		}
		if(e.keyCode == 83){
			socket.emit('move', {'id':socket.id, 'direction':'down'});
		}
		if(e.keyCode == 65){
			socket.emit('move', {'id':socket.id, 'direction':'left'});
		}
		if(e.keyCode == 68){
			socket.emit('move', {'id':socket.id, 'direction':'right'});
		}

	}

	socket.on('move', function(data){
		//console.log(data);
		clearCanvas();
			
		map.buildWalls();

		for(var i = 0; i < data.length; i++)
		{
			map.ctx.fillRect(data[i].x, data[i].y, 40, 40);
		}


	});

	function clearCanvas()
	{
		map.canvas.width = map.canvas.width;
	}
	
}

var game = new Game();
game.init();