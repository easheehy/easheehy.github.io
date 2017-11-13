var cur = -1;
var max = 0;
var images = [];
var interval = 1500;

function start() {
    images = document.images;
    max = images.length;
    cur = 0;
};

function rotate() {
    var i;

	if(cur >= max - 1)
		cur = 0;
	else
		cur += 1;

    for (i = 0; i < max; i += 1) {
		images[i].hidden = (i !== cur);
    }
};

window.onload = function() {
start();
images[cur].hidden = false;
setInterval(rotate, interval);
};