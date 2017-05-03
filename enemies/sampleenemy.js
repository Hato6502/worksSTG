		var SampleEnemy = enchant.Class.create(Enemy, {
			initialize: function(x, y, scene){
				Enemy.call(this, 48 ,48, scene);
				this.image = game.assets['images/monster/monster3.gif'];
				this.x = x - 24;
 				this.y = y - 24;

				this.tl.setTimeBased();
				this.tl.then(function(){this.frame = 2;})
					.delay(64)
					.then(function(){this.frame = 3;})
					.delay(64)
					.then(function(){this.frame = 4;})
					.delay(64)
					.loop();

				this.tl2 = new enchant.Timeline(this);
				this.tl2.setTimeBased();
				this.tl2.delay(10000)
					.then(function(){
						this.explode();
					});
			}
		});
