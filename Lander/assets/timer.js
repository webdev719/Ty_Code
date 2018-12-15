var comingdate = new Date("Jan 29, 2019 00:00:00");
var d = document.getElementById('day');
var h = document.getElementById('hour');
var m = document.getElementById('min');
var s = document.getElementById('sec');

var x = setInterval(function() {
    var now = new Date();
    var des = comingdate.getTime() - now.getTime();
    var day = Math.floor(des/(1000 * 60 * 60 * 24));
    var hour = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var min = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
    var sec = Math.floor(des%(1000 * 60) / 1000);

    d.innerHTML = getTrueNumber(day);
    h.innerHTML = getTrueNumber(hour);
    m.innerHTML = getTrueNumber(min);
    s.innerHTML = getTrueNumber(sec);

    if (des <= 0) {
        clearInterval(x);
    }

}, 1000);

function getTrueNumber(x) {
    if (x < 10) {
        return '0' + x;
    } else {
        return x;
    }
}