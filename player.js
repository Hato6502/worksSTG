				var Player = enchant.Class.create(enchant.Sprite, {
					initialize: function(scene){
						enchant.Sprite.call(this, 48, 48);
						this.image = game.assets['images/player.png'];
						this.x = this.goal_x = game.width/2 - 24;
						this.y = this.goal_y =  game.height/1.25;
						this.dx = this.dy = 0.0;

						this.tl.setTimeBased();
						this.tl.then(function(){
							var speed = 10.0;
							var angle = Math.atan2(this.goal_y - this.y, this.goal_x - this.x);
							this.moveBy(Math.cos(angle)*speed, Math.sin(angle)*speed);
						})
						.delay(10)
						.loop();

						this.tl2 = new enchant.Timeline(this);
						this.tl2.setTimeBased();
						this.tl2.then(function(){
							scene.addChild(new Shot(this.x + 24, this.y + 24));
						})
						.delay(150)
						.loop();
					}, 

					onmove: function(e){
						this.goal_x = e.x - 24;
						this.goal_y = e.y - 24;
					}
				});
