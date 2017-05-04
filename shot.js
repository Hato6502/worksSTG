var Shot = enchant.Class.create(enchant.Sprite, {
	initialize: function(x, y){
		enchant.Sprite.call(this, 16, 16);
		this.image = game.assets['images/icon0.png'];
		this.x = x - 8;
		this.y = y - 8;
		this.frame = 48

		this.tl.setTimeBased();
		this.tl.moveY(-16, (this.y + 16)*2)
		.removeFromScene();
	}
});
