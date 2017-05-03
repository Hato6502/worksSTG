				var Shot = enchant.Class.create(enchant.Sprite, {
					initialize: function(x, y){
						enchant.Sprite.call(this, 16, 16);
						this.image = game.assets['images/icon0.png'];
						this.x = x - 8;
						this.y = y - 8;
						this.frame = 48

						this.tl.setTimeBased();
						this.tl.moveBy(0.0, -8, 0).delay(10).loop();
					}
				});
