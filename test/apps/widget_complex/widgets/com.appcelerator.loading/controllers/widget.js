var args = arguments[0] || {};

if (Ti.Platform.osname === 'mobileweb') {
    $.loading.duration = 100;
} 
$.loading.start();

////////////////////////////////////////////////////////
////////// Exposed component object functions //////////
////////////////////////////////////////////////////////
$.setOpacity = function(opacity) {
	$.loading.opacity = opacity;		
};