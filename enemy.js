var Enemy = enchant.Class.create(enchant.Sprite, {
	initialize: function(name, x, y, width, height, image, scene){
		enchant.Sprite.call(this, width, height);
		this.scene = scene;
		this.name = name;
		this.width = width;
		this.height = height;
		this.x = x - width/2;
		this.y = y - height/2;
		this.image = game.assets[image];

		new enchant.Timeline(this).then(function(){
			if (this.scene != null){
				for(var i = 0;i < this.scene.childNodes.length;i++){
					var node = this.scene.childNodes[i];
					if (node != this) if (this.intersect(node)){
						var e = new enchant.Event('intersect' + node.name);
						this.dispatchEvent(e);
						e = new enchant.Event('intersect' + this.name);
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
		this.remove();
	}, 
	shot: function(angle){
		var parentNode = this.parentNode;

		if (parentNode != null) parentNode.addChild(new EnemyShot(this.x + this.width/2, this.y + this.height/2, angle, this.scene));
	}
});
