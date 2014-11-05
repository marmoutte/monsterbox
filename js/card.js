var Card = Class.create(Sprite, {
   initialize: function(x, y, width, value, positive) {
      enchant.Sprite.call(this, 0, 0);
      this.fontSize = 16;
      this.widthItemNum = 16;
      this.x = x;
      this.y = y;
      this._imageAge = Number.MAX_VALUE;
      this.text = '';
      if (arguments[2]) {
         this.row = Math.floor(arguments[2] / this.fontSize);
      }
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
   setText: function(txt) {
      var i, x, y, wNum, charCode, charPos;
      this._text = txt;
      var newWidth;
      if (!this.returnLength) {
         this.width = Math.min(this.fontSize * this._text.length, Game.instance.width);
      } else {
         this.width = Math.min(this.returnLength * this.fontSize, Game.instance.width);
      }
      this.height = this.fontSize * (Math.ceil(this._text.length / this.row) || 1);
      // if image is to small or was to big for a long time create new image
      if (!this.image || this.width > this.image.width || this.height > this.image.height || this._imageAge > 300) {
         this.image = new enchant.Surface(this.width, this.height);
         this._imageAge = 0;
      } else if (this.width < this.image.width || this.height < this.image.height) {
         this._imageAge++;
      } else {
         this._imageAge = 0;
      }
      this.image.context.clearRect(0, 0, this.width, this.height);
      for (i = 0; i < txt.length; i++) {
         charCode = txt.charCodeAt(i);
         if (charCode >= 32 && charCode <= 127) {
            charPos = charCode - 32;
         } else {
            charPos = 0;
         }
         x = charPos % this.widthItemNum;
         y = (charPos / this.widthItemNum) | 0;
         this.image.draw(Game.instance.assets['font0.png'],
            x * this.fontSize, y * this.fontSize, this.fontSize, this.fontSize, (i % this.row) * this.fontSize, ((i / this.row) | 0) * this.fontSize, this.fontSize, this.fontSize);
      }
   },
   text: {
      get: function() {
         return this._text;
      },
      set: function(txt) {
         this.setText(txt);
      }
   },
   row: {
      get: function() {
         return this.returnLength || this.width / this.fontSize;
      },
      set: function(row) {
         this.returnLength = row;
         this.text = this.text;
      }
   }
});