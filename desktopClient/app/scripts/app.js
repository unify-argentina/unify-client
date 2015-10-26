require('nw.gui').Window.get().maximize();
var gui = window.require('nw.gui');
if (process.platform === "darwin") {
  var mb = new gui.Menu({ type: 'menubar' });
  mb.createMacBuiltin('Unify');
  gui.Window.get().menu = mb;
}

$(document).ready(function() {
	window.setTimeout(function(){
		window.location.href="http://test-unify.herokuapp.com/";
	},100);
});