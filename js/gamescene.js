var GameScene = Class.create(Scene, {
   initialize: function() {
      Scene.apply(this);

      var bg = new Sprite(WIDTH, HEIGHT);
      bg.backgroundColor = COLOR5;

      var btnGoBack = new MutableText(0, 0, 0);
      btnGoBack.setText('<');
      btnGoBack.x = WIDTH / 16;
      btnGoBack.y = HEIGHT / 12;
      btnGoBack.addEventListener('touchend', this.goBack);

      var score = new MutableText(0, 0, 0);
      score.setText('0/5');
      score.x = (WIDTH / 2) - (score.width / 2);
      score.y = HEIGHT / 12;

      var btnPause = new MutableText(0, 0, 0);
      btnPause.setText('||');
      btnPause.x = WIDTH - (btnPause.width * 2);
      btnPause.y = HEIGHT / 12;
      btnPause.addEventListener('touchend', this.pause);

      var equationPanel = new Group(WIDTH, HEIGHT - (HEIGHT / 4));
      equationPanel.addChild(new Sprite(WIDTH, HEIGHT - (HEIGHT / 4)));
      equationPanel.x = 0;
      equationPanel.y = HEIGHT / 8;
      equationPanel.firstChild.backgroundColor = COLOR3;

      var deckPanel = new Group(WIDTH, HEIGHT / 6);
      deckPanel.addChild(new Sprite(WIDTH, HEIGHT / 6));
      deckPanel.x = 0;
      deckPanel.y = HEIGHT - deckPanel.firstChild.height;
      deckPanel.firstChild.backgroundColor = COLOR4;

      var offset = 50;
      Game.instance.equations[4][0].walk({strategy: 'pre'}, function(node) {
         
      });

      this.addChild(bg);
      this.addChild(btnGoBack);
      this.addChild(score);
      this.addChild(btnPause);
      this.addChild(equationPanel);
      this.addChild(deckPanel);
   },
   goBack: function() {
      Game.instance.replaceScene(new LevelScene());
   },
   pause: function() {
      Game.instance.pushScene(new PauseScene());
   }
});