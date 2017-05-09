var EnemyShot = enchant.Class.create(Enemy, {
	initialize: function(x, y, angle, scene){
		Enemy.call(this, 'EnemyShot', x, y, 16, 16, 'images/icon0.png', scene);
		this.frame = 45;
		this.angle = angle;

		this.tl.then(function(){
			var speed = 8.0;

			this.moveBy(speed*Math.cos(angle), speed*Math.sin(angle));
		})
		.delay(1)
		.loop();

		this.tl2 = new Timeline(this);
		this.tl2.setTimeBased();
		this.tl2.delay(10000)
		.removeFromScene();
	}, 
});
