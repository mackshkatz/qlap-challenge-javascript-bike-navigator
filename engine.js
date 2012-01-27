$(document).ready(function() {
	init();
});

// Constructor function
function Bike() {
	this.wheels = 2;
	this.height = 4;
	this.width = 6;
	this.lat = 40.017094;
	this.lng = -105.283799;
}

function init() {
  var myOptions = {
    center: new google.maps.LatLng(40.017094, -105.283799),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
}

function move(direction, miles) {
	console.log(this.lat, this.lng);
	var direction = direction;
	var degrees = miles / 69.172;
	if ( direction == "north" ) 
	{
		this.lat += degrees;
	}
	else if ( direction == "south" ) 
	{
		this.lat -= degrees;
	}
	else if ( direction == "east" ) 
	{
		this.lng -= degrees;
	}
	else ( direction == "west" ) 
	{
		this.lng += degrees;
	}
	return [ this.lat, this.lng ];
}

function reset() {
	this.lat = 40.017094;
	this.lng = -105.283799;
	return [ this.lat, this.lng ];
}

function plotLocation() {
	return [ this.lat, this.lng ];
}

Bike.prototype.move = move;
Bike.prototype.reset = reset;
Bike.prototype.plotLocation = plotLocation;


// Embed Google map
// $('body').append('<img src=http://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&zoom=11&size=200x200&sensor=false />');


