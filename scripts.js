var cur = -1;
var max = 0;
var profiles = [];
var interval = 1500;

function start() {
    profiles = document.profiles;
    max = profiles.length;
    cur = 0;
};

function rotate() {
    var i;
    cur = (cur >= max - 1) ? 0 : cur += 1;
    for (i = 0; i < max; i += 1) {
		profiles[i].hidden = (i !== cur);
    }
};

window.onload = function() {
    start();
profiles[cur].hidden = false;
setInterval(rotate, interval);
};