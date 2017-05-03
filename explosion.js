				var Explosion = enchant.Class.create(enchant.Sprite, {
					initialize: function(x, y, size){
						enchant.Sprite.call(this, 16, 16);
						this.image = game.assets['images/effect0.png'];
						this.x = x - 8;
						this.y = y - 8;
						this.scale(size/16.0, size/16.0);

						this.tl.setTimeBased();
						this.tl.then(function(){
								this.frame = 0;
							})
							.delay(100)
							.then(function(){
								this.frame = 1;
							})
							.delay(100)
							.then(function(){
								this.frame = 2;
							})
							.delay(100)
							.then(function(){
								this.frame = 3;
							})
							.delay(100)
							.then(function(){
								this.frame = 4;
							})
							.delay(100)
							.removeFromScene();
					}
				});
