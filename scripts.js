var cur = -1;
var max = 0;
var images = [];

function rotate() {
    var i;
	var j;

	if(cur >= max - 1)
		cur = 0;
	else
		cur += 1;
	
    for (i = 0; i < max; i++) {
		if(i == cur)
			j = false;
		images[i].hidden = j;
    }
};

window.onload = function() {
images = document.images;
max = images.length;
cur = 0;
images[cur].hidden = false;
setInterval(rotate, 1500);
};