function Element() {
	this.coords = null;
}

Element.prototype.setCoords = function(x, y) {
	this.coords = [x,y];
}

Element.prototype.getCoords = function(x, y) {
	return this.coords;
}