var Operator = Class.create(Label, {
initialize: function(x, y, width, value) {
	Label.call(this);
	this.x = x;
	this.y = y;
	this.text = value;
	this.font = width + 'px Arial';
},
getValue: function() {
	return this.value;
},
setPosition: function(x, y) {
	this.x = x;
	this.y = y;
}
