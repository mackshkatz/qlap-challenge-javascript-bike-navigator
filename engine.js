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
	var quickLeft = new google.maps.LatLng(40.017094, -105.283799);
  var myOptions = {
    center: quickLeft,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
}

function move(direction, miles) {
	console.log(this.lat, this.lng);
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
		this.lng += degrees;
	}
	else if ( direction == "west" ) 
	{
		this.lng -= degrees;
	}
	return [ this.lat, this.lng ];
}

function reset() {
	this.lat = 40.017094;
	this.lng = -105.283799;
	return [ this.lat, this.lng ];
}

function plotLocation() {
	var newLatLng = new google.maps.LatLng( this.lat, this.lng );

	var myOptions = {
    center: newLatLng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

	var new_map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

	var marker = new google.maps.Marker({
		position: newLatLng,
		map: new_map,
		animation: google.maps.Animation.DROP,
		title: "PLEASE WORK!!!!"
	});

	$('body').append('<p class="current-bike">Bike is currently located at: <span>' + this.lat + ', ' + this.lng + '.</span></p>'); 
	return [ this.lat, this.lng ];
}

Bike.prototype.move = move;
Bike.prototype.reset = reset;
Bike.prototype.plotLocation = plotLocation;


// Embed Google map
// $('body').append('<img src=http://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&zoom=11&size=200x200&sensor=false />');


