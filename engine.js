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

// Embed Google map
// $('body').append('<img src=http://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&zoom=11&size=200x200&sensor=false />');


