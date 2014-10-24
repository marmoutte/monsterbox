var MainScene = Class.create(Scene, {
   initialize: function() {
      Scene.apply(this);
      var bg = new Sprite(WIDTH, HEIGHT);
      bg.backgroundColor = COLOR2;

      var title = new MutableText(0, 0, 0);
      title.setText('MONSTERBOX');
      title.x = (WIDTH / 2) - (title.width / 2);
      title.y = HEIGHT / 4;

      var btnPlay = new MutableText(0, 0, 0);
      btnPlay.setText('PLAY');
      btnPlay.x = (WIDTH / 2) - (btnPlay.width / 2);
      btnPlay.y = HEIGHT / 2;
      btnPlay.addEventListener('touchend', this.play);

      var btnHelp = new MutableText(0, 0, 0);
      btnHelp.setText('?');
      btnHelp.x = btnHelp.width;
      btnHelp.y = HEIGHT - (btnHelp.height * 2);
      btnHelp.addEventListener('touchend', this.help);

      this.addChild(bg);
      this.addChild(title);
      this.addChild(btnPlay);
      this.addChild(btnHelp);
   },
   play: function() {
      Game.instance.replaceScene(new LevelScene());
   },
   help: function() {
      Game.instance.replaceScene(new HelpScene());
   }
});
