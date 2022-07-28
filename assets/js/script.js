// Variable for moment day
var currentDay = moment().format("dddd, MMMM Do YYYY")
var currentTime = moment().hour()

// Setting the day and time on the webpage
$("#currentDay").text("Today is: " + currentDay)

// Formatting on text areas depending on time change the currentTime variable to test
for(var i = 8; i < 18; i++) {
    if(i < currentTime) {
        $("#" + i).addClass("past");
    } else if(i == currentTime) {
        $("#" + i).addClass("present");
    } else if(i > currentTime) {
        $("#" + i).addClass("future");
    }
}
