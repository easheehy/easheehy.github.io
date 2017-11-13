function detectBrowser() {
    if (navigator.userAgent.search("MSIE") & gt; = 0) {
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
}