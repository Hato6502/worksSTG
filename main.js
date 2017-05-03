enchant();
window.onload = function(){
	var game = new Core(480, 640);
	game.fps = 30;
	game.preload('images/monster/monster3.gif');
	game.preload('images/player.png');

	game.onload = function(){
		var PlayScene = Class.create(Scene, {
			initialize: function(){
				var scene = this;

				var Shot = Class.create(Sprite, {
					initialize: function(x, y){
						Sprite.call(this, 48, 48);
						this.image = game.assets['images/monster/monster3.gif'];
						this.x = x - 24;
						this.y = y - 24;

						this.tl.setTimeBased();
						this.tl.moveBy(0.0, -5, 0).delay(10).loop();
						/*this.tl.then(function(){this.frame = 2;})
							.delay(100)
							.then(function(){this.frame = 3;})
							.delay(100)
							.then(function(){this.frame = 4;})
							.delay(100)
							.moveBy(0, -10.0, 0)
							.loop();*/

						scene.addChild(this);
					}
				});

				var Player = Class.create(Sprite, {
					initialize: function(){
						Sprite.call(this, 48, 48);
						this.image = game.assets['images/player.png'];
						this.x = this.goal_x = game.width/2 - 24;
						this.y = this.goal_y =  game.height/1.25;
						this.dx = this.dy = 0.0;

						this.tl.setTimeBased();
						this.tl.then(function(){
								var speed = 10.0;
								var angle = Math.atan2(this.goal_y - this.y, this.goal_x - this.x);
								this.moveBy(Math.cos(angle)*speed, Math.sin(angle)*speed);

								new Shot(this.x + 24, this.y + 24);
							})
							.delay(10)
							.loop()
							
						scene.addChild(this);
					}, 

					onmove: function(e){
						this.goal_x = e.x - 24;
						this.goal_y = e.y - 24;
					}
				});

				Scene.call(this);
				this.backgroundColor = 'black';

				this.player = new Player;

				game.replaceScene(this);
			}, 
			ontouchmove: function(e){
				var event = new Event('move');
				event.x = e.x;
				event.y = e.y;
				this.player.dispatchEvent(event);
			}, 
		});

		new PlayScene;
	}
	game.start();
}
