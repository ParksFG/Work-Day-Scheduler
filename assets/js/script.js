// Variable for moment day
var currentDay = moment().format("dddd, MMMM Do YYYY")

// Setting the day and time on the webpage
$("#currentDay").text("Today is: " + currentDay)
