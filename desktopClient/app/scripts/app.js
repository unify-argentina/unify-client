require('nw.gui').Window.get().maximize();
require('nwjs-osx-menu')(window);

$(document).ready(function() {
	window.setTimeout(function(){
		window.location.href="http://test-unify.herokuapp.com/";
	},100);
});