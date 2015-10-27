function Game()
{

}

Game.prototype.init = function() {
	var map = new Map();
	map.init();
}

var game = new Game();
game.init();