var PauseScene = Class.create(Scene, {
   initialize: function() {
      Scene.apply(this);

      var bg = new Sprite(WIDTH, HEIGHT);
      bg.backgroundColor = COLOR1;
      bg.opacity = 0.9;

      var btnGoBack = new MutableText(0, 0, 0);
      btnGoBack.setText('<');
      btnGoBack.x = WIDTH / 16;
      btnGoBack.y = HEIGHT / 12;
      btnGoBack.addEventListener('touchend', this.goBack);

      var btnResume = new MutableText(0, 0, 0);
      btnResume.setText('|>');
      btnResume.x = WIDTH - (btnResume.width * 2);
      btnResume.y = HEIGHT / 12;
      btnResume.addEventListener('touchend', this.resume);

      var title = new MutableText(0, 0, 0);
      title.setText('PAUSE');
      title.x = (WIDTH / 2) - (title.width / 2);
      title.y = HEIGHT / 12;

      this.addChild(bg);
      this.addChild(btnResume);
      this.addChild(title);
   },
   resume: function() {
      Game.instance.popScene();
   }
});
