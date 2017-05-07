var SampleEnemy = enchant.Class.create(Enemy, {
	initialize: function(x, y, scene){
		Enemy.call(this, 'Enemy', x, y, 48, 48, 'images/monster/monster3.gif', scene);
	}, 
	onintersect: function(e){
	}
});
