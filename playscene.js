var PlayScene = enchant.Class.create(enchant.Scene, {
	initialize: function(){
		enchant.Scene.call(this);
		this.backgroundColor = 'black';
		this.addChild(this.player = new Player(this));
	}, 
	onenterframe: function(){
		if (this.age % 10 == 0) this.addChild(new SampleEnemy(Math.random()*game.width, Math.random()*game.height, this));
	}, 
	ontouchmove: function(e){
		var event = new enchant.Event('move');
		event.x = e.x;
		event.y = e.y;			
		this.player.dispatchEvent(event);
	}, 
});
