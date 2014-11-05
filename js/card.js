var Card = Class.create(Sprite, {
   initialize: function(width, height, value, positive, id) {
      Sprite.call(this, width, height);

      this.id = id;
      this.value = value;
      this.positive = positive;
   },
   getId: function() {
      return this.id;
   },
   setId: function(id) {
      this.id = id;
   },
   getValue: function() {
      return this.value;
   },
   setValue: function(value) {
      this.value;
   },
   isPositive: function() {
      return this.positive;
   },
   setPositive: function(positive) {
      this.positive = positive;
   },
   setPosition: function(x, y) {
      this.x = x;
      this.y = y;
   },
   ontouchstart: function(e) {
      this.originX = e.x - this.x;
      this.originY = e.y - this.y;
   },
   ontouchend: function(e) {
      if(this.value == "0"){
         var node0 = game.equations[4][0].first(function (node) {
		return node.model.id === this;
	 });
	 node0.drop();
	 // AFFICHAGE refresh();
      }
   },
   ontouchmove: function(e) {
      var boundLeft = this.width * 1.5;
      var boundRight = (WIDTH / 2) - boundLeft;
      var boundTop = (HEIGHT / 10) + (this.height * 1.5);
      var boundBottom = HEIGHT - boundTop;

      if (e.x > boundLeft && e.x < boundRight) {
         this.x = e.x - this.originX;
      }

      if (e.y > boundTop && e.y < boundBottom) {
         this.y = e.y - this.originY;
      }

      var a = this.intersect(Card);
      if (a.length > 1) {
         console.log('collision detected');
      }
   }
});
