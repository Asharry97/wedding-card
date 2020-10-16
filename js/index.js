// The data/time we want to countdown to
var countDownDate = new Date("Nov 25, 2020 16:37:52").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("days-1").innerHTML = (days.toString().split("").length > 1) ? days.toString().split("")[0] : "0"
    document.getElementById("days-2").innerHTML = (days.toString().split("").length > 1) ? days.toString().split("")[1] : "0"
    document.getElementById("hours-1").innerHTML = (hours.toString().split("").length > 1) ? hours.toString().split("")[0] : "0"
    document.getElementById("hours-2").innerHTML = (hours.toString().split("").length > 1) ? hours.toString().split("")[1] : "0"
    document.getElementById("mins-1").innerHTML = (minutes.toString().split("").length > 1) ? minutes.toString().split("")[0] : "0"
    document.getElementById("mins-2").innerHTML = (minutes.toString().split("").length > 1) ? minutes.toString().split("")[1] : "0"
    document.getElementById("secs-1").innerHTML = (seconds.toString().split("").length > 1) ? seconds.toString().split("")[0] : "0"
    document.getElementById("secs-2").innerHTML = (seconds.toString().split("").length > 1) ? seconds.toString().split("")[1] : "0"

    console.log({ days, hours, minutes, seconds })
    console.log(days)

}, 1000);