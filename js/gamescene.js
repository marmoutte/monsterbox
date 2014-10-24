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

      var leftSide = new Group(WIDTH / 2, HEIGHT - (HEIGHT / 4));
      leftSide.addChild(new Sprite(WIDTH / 2, HEIGHT - (HEIGHT / 4)));
      leftSide.x = 0;
      leftSide.y = HEIGHT / 8;
      leftSide.firstChild.backgroundColor = COLOR3;

      var cardSize = WIDTH / 16;
      var dayCard = new Card(cardSize, cardSize, '#ddd');
      dayCard.setPosition(WIDTH / 3, HEIGHT / 4);
      var nightCard = new Card(cardSize, cardSize, '#222');
      nightCard.setPosition((WIDTH / 3) - (cardSize * 2), HEIGHT / 4);
      leftSide.addChild(dayCard);
      leftSide.addChild(nightCard);

      var rightSide = new Group(WIDTH / 2, HEIGHT - (HEIGHT / 4));
      rightSide.addChild(new Sprite(WIDTH / 2, HEIGHT - (HEIGHT / 4)));
      rightSide.x = WIDTH / 2;
      rightSide.y = HEIGHT / 8;
      rightSide.firstChild.backgroundColor = COLOR4;

      this.addChild(bg);
      this.addChild(btnGoBack);
      this.addChild(score);
      this.addChild(btnPause);
      this.addChild(leftSide);
      this.addChild(rightSide);
   },
   goBack: function() {
      Game.instance.replaceScene(new LevelScene());
   },
   pause: function() {
      Game.instance.pushScene(new PauseScene());
   }
});
