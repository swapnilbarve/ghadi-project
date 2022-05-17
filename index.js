console.log("working");
function time(){


    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var ampm = document.getElementById("ampm");
    
    
    var time = new Date()
    
    var hrs = time.getHours()
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";
    
    if (hrs ==0){
        hrs =12;
    }
    if (hrs>12){
        hrs = hrs-12;
        am_pm = "PM"
    }
    
    if (hrs<10){
        hrs = "0"+hrs;
    }
    if (secs<10){
        secs = "0"+secs;
    }
    if (mins<10){
        mins = "0"+mins;
    }
    
    hours.innerText=hrs;
    seconds.innerText=secs;
    minutes.innerText=mins;
    ampm.innerText = am_pm;
    
    }
    // time();
    var oneseconds = 1000;
    setInterval(time,oneseconds)

    function setTime(){
        var x = document.getElementById("morning1").value
        var y = document.getElementById("afternoon1").value
        var z = document.getElementById("evening1").value
        var n = document.getElementById("night1").value

        var hourr = new Date().getHours();
        if (x == hourr) {


            document.getElementById("para").innerText = "GOOD MORNING!! WAKE UP!!"
    
            document.getElementById("para2").innerText = "LETS HAVE SOME BRACKFAST!!"
    
    
        }
        if (y == hourr) {
    
    
            document.getElementById("para").innerText = "GOOD AFTERNOON!!! TAKE SOME SLEEP ";
    
            document.getElementById("para2").innerText = "LETS HAVE SOME LUNCH";
            document.getElementById("mimgg").src = "./Component 31 – 1.svg"
    
        }
        if (z == hourr) {
    
            document.getElementById("para").innerText = "Good Evening!!!"
    
            document.getElementById("para2").innerText = "STOP YAWNING, GET SOME TEA...IT'S JUST EVENING"
            document.getElementById("mimgg").src="./lunch_image.png";

    
        }
        if (n == hourr) {
    
            document.getElementById("para").innerText = "Good Night"
    
            document.getElementById("para2").innerText = "Go on Bed Now"
    
        }
    }