var Shot = enchant.Class.create(Enemy, {
	initialize: function(x, y, scene){
		Enemy.call(this, 'Shot', x, y, 16, 16, 'images/icon0.png', scene);
		this.frame = 48

		this.tl.setTimeBased();
		this.tl.moveY(-16, (this.y + 16)*2)
		.removeFromScene();
	}, 
	onintersectEnemy: function(){
		this.remove();
	}
});
