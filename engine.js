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
  window.geocoder = new google.maps.Geocoder();
  window.map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
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
	geocoder.geocode({'latLng': newLatLng}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			$('p.current-bike').hide();
			window.address = results[4].formatted_address;
			$('<p class="current-bike">Bike is currently located in: <span>' + address + '.</span></p>').hide().appendTo('body').fadeIn(800);
		}
	});

	map.setCenter(newLatLng)

	var marker = new google.maps.Marker({
		position: newLatLng,
		map: map,
		animation: google.maps.Animation.DROP,
		title: this.lat + "," + this.lng
	});

	
	return [ this.lat, this.lng ];
}

Bike.prototype.move = move;
Bike.prototype.reset = reset;
Bike.prototype.plotLocation = plotLocation;