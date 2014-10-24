var HelpScene = Class.create(Scene, {
   initialize: function() {
      Scene.apply(this);

      var bg = new Sprite(WIDTH, HEIGHT);
      bg.backgroundColor = COLOR1;

      var btnGoBack = new MutableText(0, 0, 0);
      btnGoBack.setText('<');
      btnGoBack.x = WIDTH / 16;
      btnGoBack.y = HEIGHT / 12;
      btnGoBack.addEventListener('touchend', this.goBack);

      var title = new MutableText(0, 0, 0);
      title.setText('Help');
      title.x = (WIDTH / 2) - (title.width / 2);
      title.y = HEIGHT / 12;

      this.addChild(bg);
      this.addChild(btnGoBack);
      this.addChild(title);
   },
   goBack: function() {
      Game.instance.replaceScene(new MainScene());
   }
});
