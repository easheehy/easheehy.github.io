var index=0;
function changeBanner(){ 
	[].forEach.call(document.images,function (v,i) { document.images[i].hidden = i!==index});
	index = (index+1) % document.images.length;
}
window.onload = function () {setInterval(changeBanner, 10000)};

/*$("nav li").mouseenter(function(){
     $(this).css("color", "rgb(0,61,153)");
})
$("nav li").mouseleave(function(){
     $(this).css("color", "rgb(0,82,204)");
})

function detectBrowser() {
    if (navigator.userAgent.search("MSIE") & gt() = 0) {
        // insert conditional IE code here
    }
    else if (navigator.userAgent.search("Chrome") & gt; = 0) {
        // insert conditional Chrome code here
    }
    else if (navigator.userAgent.search("Firefox") & gt; = 0) {
        // insert conditional Firefox Code here
    }
    else if (navigator.userAgent.search("Safari") & gt; = 0 & amp; & amp; navigator.userAgent.search("Chrome") & lt; 0) {
        // insert conditional Safari code here
    }
    else if (navigator.userAgent.search("Opera") & gt; = 0) {
        // insert conditional Opera code here
    }
}*/