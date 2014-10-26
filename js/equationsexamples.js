var Card = function (value) {
	this.value = value;
}
var tree = new TreeModel();

var numberChapters = 5;
var numberLevels = 20;
var equations = [];

for (var i = 0; i < numberChapters; i++) {
	equations[i] = [];

	for (var j = 0; j < numberLevels; j++) {
		equations[i][j] = null;
	}
}

// Chapter 5, Level 1: 0 + x = b
equations[4][0] = tree.parse({
	id: '=',
	children: [{
		id: '+',
		children: [{
			id: new Card('0')
		}, {
			id: new Card('x')
		}]
	}, {
		id: new Card('b')
	}]
});

// Chapter 5, Level 2: c = x + (-6) + 6
equations[4][1] = tree.parse({});

// Chapter 5, Level 3: (-5) + 5 + c = e + (-e) + 2 + x
equations[4][2] = tree.parse({});

// Chapter 5, Level 4: (-c) + x + d = b
equations[4][3] = tree.parse({});

// Chapter 5, Level 5: (e/e) + x + (-1) = d
equations[4][4] = tree.parse({});
