var Card = Class.create(Label, {
   initialize: function(x, y, width, value, positive) {
      Label.call(this);
      this.x = x;
      this.y = y;
      this.text = value;
      this.font = width + 'px Arial';
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
      var boundLeft = 0;
      var boundRight = WIDTH;
      var boundTop = 0;
      var boundBottom = HEIGHT;

      if (e.x > boundLeft && e.x < boundRight) {
         this.x = e.x - this.originX;
      }

      if (e.y > boundTop && e.y < boundBottom) {
         this.y = e.y - this.originY;
      }

      var a = this.intersect(Card);
      console.log(a);
      if (a.length > 1) {
         console.log('collision detected');
      }
   },
});
