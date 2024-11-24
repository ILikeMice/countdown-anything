
window.onload = function() {
    document.getElementById("text").innerHTML = "0000:000:00:00:00";
}

function submit() {
    var date = document.getElementById("dateinp").value
    var time = document.getElementById("timeinp").value

    if (date == "" || time == "") {
        alert("Please enter a date and time!")
        return
    }
    console.log(date, time)
    var then =  Date.parse(date + " " + time)
    var now = new Date()
    var diff = then - now

    if (diff <= 0) {
        alert("Please enter a future date and time!")
        return
    } 

    function countdown() {
        if (document.getElementById("text").innerHTML != "0000:000:00:00:00") {
            var now = new Date()
            var diff = then - now
            var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)).toString()
            diff -= years * (1000 * 60 * 60 * 24 * 365)
            var days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString()
            diff -= days * (1000 * 60 * 60 * 24)
            var hours = Math.floor(diff / (1000 * 60 * 60)).toString()
            diff -= hours * (1000 * 60 * 60)
            var minutes = Math.floor(diff / (1000 * 60)).toString()    
            diff -= minutes * (1000 * 60)
            var seconds = Math.floor(diff / 1000).toString()
    
        
            if (0 > (years + days + hours + minutes + seconds).toString()) {
                return
            } 
            document.getElementById("text").innerHTML =  years +":"+ "0".repeat(3-days.length) + days +":"+ "0".repeat(2-hours.length)+hours +":"+ minutes +":"+ seconds
            console.log("diff", diff)
            console.log(years, days, hours, minutes, seconds) 
            
            setTimeout(countdown, 1000)
        }
    };
    
    countdown()
    document.getElementById("startbtn").style.visibility = "hidden";
    
          
}

