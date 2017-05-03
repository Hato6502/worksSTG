enchant();
var game;
window.onload = function(){
	game = new Core(480, 640);
	game.fps = 30;
	game.preload('images/monster/monster3.gif');
	game.preload('images/player.png');
	game.preload('images/icon0.png');
	game.preload('images/effect0.png');

	game.onload = function(){
		game.replaceScene(new PlayScene);
	}
	game.start();
}
