var Enemy = enchant.Class.create(enchant.Sprite, {
	initialize: function(width, height, scene){
		enchant.Sprite.call(this, width, height);
		this.scene = scene;

		new enchant.Timeline(this).then(function(){
			if (this.scene != null){
				for(var i = 0;i < this.scene.childNodes.length;i++){
					var node = this.scene.childNodes[i];
					if (node != this) if (this.intersect(node)){
						var e = new enchant.Event('intersect');
						this.dispatchEvent(e);
						node.dispatchEvent(e);
						return ;
					}
				}
			}
		})
		.delay(1)
		.loop();
	}, 
	explode: function(){
		this.scene.addChild(new Explosion(this.x + this.width/2, this.y + this.height/2, (this.width + this.height)/2));
		this.scene.removeChild(this);
	}
});
