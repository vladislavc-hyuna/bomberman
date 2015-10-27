function Player()
{
	this.name = null;
	this.image = null;
}

Player.prototype.move = function() {

}

Player.prototype.die = function() {
	delete this;
}