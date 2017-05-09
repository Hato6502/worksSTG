				var Player = enchant.Class.create(Enemy, {
					initialize: function(scene){
						Enemy.call(this, 'Player', game.width/2, game.height/1.25, 48, 48, 'images/player.png', scene);
						this.dx = this.dy = 0.0;

						this.tl.then(function(){
							var speed = 10.0;
							if ((Math.pow(this.goal_x - this.x, 2.0) + Math.pow(this.goal_y - this.y, 2.0)) >= speed*speed){
								var angle = Math.atan2(this.goal_y - this.y, this.goal_x - this.x);
								this.moveBy(Math.cos(angle)*speed, Math.sin(angle)*speed);
							}
						})
						.delay(1)
						.loop();

						this.tl2 = new enchant.Timeline(this);
						this.tl2.setTimeBased();
						this.tl2.then(function(){
							this.scene.addChild(new Shot(this.x + 24, this.y + 24, this.scene));
						})
						.delay(150)
						.loop();
					}, 

					onmove: function(e){
						this.goal_x = e.x - 24;
						this.goal_y = e.y - 24;
					}, 

					onintersectEnemy: function(){
						this.explode();
					}, 

					onintersectEnemyShot: function(){
						this.explode();
					}
				});
