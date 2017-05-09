var SampleEnemy = enchant.Class.create(Enemy, {
	initialize: function(x, y, scene){
		Enemy.call(this, 'Enemy', x, y, 48, 48, 'images/monster/monster3.gif', scene);

		this.tl.setTimeBased();
		this.tl.then(function(){this.frame = 2;})
			.delay(64)
			.then(function(){this.frame = 3;})
			.delay(64)
			.then(function(){this.frame = 4;})
			.delay(64)
			.loop();

		this.tl2 = new enchant.Timeline(this);
		this.tl2.delay(90)
			.moveY(game.height, 30)
			.removeFromScene();

		this.tl3 = new enchant.Timeline(this);
		this.tl3.setTimeBased();
		this.tl3.then(function(){
				this.shot(Math.random()*2.0*Math.PI);
			}).delay(1000)
			.loop();

	}, 
	onintersectShot: function(){
		this.explode();
	}, 
	onintersectPlayer: function(){
		this.explode();
	}
});
