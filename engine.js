// Constructor function
function Bike() {
	this.wheels = 2;
	this.height = 4;
	this.width = 6;
	this.lat = 40.017094;
	this.lng = -105.283799;
}

function move(direction, miles) {
	var direction = direction;
	var degrees = miles / 69.172;
	var lat = this.lat;
	var lng = this.lng;
	if ( direction == "north" ) 
	{
		lat += degrees;
	}
	else if ( direction == "south" ) 
	{
		lat -= degrees;
	}
	else if ( direction == "east" ) 
	{
		lng -= degrees;
	}
	else ( direction == "west" ) 
	{
		lng += degrees;
	}
	return [ lat, lng ];
}

Bike.prototype.move = move;