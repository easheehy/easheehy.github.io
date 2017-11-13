var cur = -1;
var max = 0;
var images = [];

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

    for (i = 0; i < max; i++) {
		images[i].hidden = (i !== cur);
    }
};

function window.onload() {
start();
images[cur].hidden = false;
setInterval(rotate, 1500);
};