var PlayScene = enchant.Class.create(enchant.Scene, {
	initialize: function(){
		enchant.Scene.call(this);
		this.backgroundColor = 'black';
		this.addChild(this.player = new Player(this));
		this.addChild(new SampleEnemy(100, 100, this));
	}, 
	ontouchmove: function(e){
		var event = new enchant.Event('move');
		event.x = e.x;
		event.y = e.y;			
		this.player.dispatchEvent(event);
	}, 
});
