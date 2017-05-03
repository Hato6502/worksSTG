var Enemy = enchant.Class.create(enchant.Sprite, {
	initialize: function(width, height, scene){
		enchant.Sprite.call(this, width, height);
		this.scene = scene;
	}, 
	explode: function(){
		this.scene.addChild(new Explosion(this.x + this.width/2, this.y + this.height/2, (this.width + this.height)/2));
		this.scene.removeChild(this);
	}
});
