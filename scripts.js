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
		else
			j =  true;
		images[i].hidden = j;
    }
};

window.onload = function() {
var images = []
images = document.images;
var max = images.length;
var cur = 0;
images[cur].hidden = false;
setInterval(rotate, 1500);
};