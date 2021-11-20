var mjs = moment();
var currentHour = mjs.hours();

// Set current date and current time
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var currentTime = moment();
// Shift time to the top of the hour e.g. 8:25 becomes 8
currentTime = currentTime.startOf("hour");

// Array for agenda
var agendaItems = [];

// Set hours of each timeblock to a moment object and displays in designated format
var time0 = currentTime.hour(8).format("hh:mm A");
$(".block-8").text(time0);
var time1 = currentTime.hour(9).format("hh:mm A");
$(".block-9").text(time1);
var time2 = currentTime.hour(10).format("hh:mm A");
$(".block-10").text(time2);
var time3 = currentTime.hour(11).format("hh:mm A");
$(".block-11").text(time3);
var time4 = currentTime.hour(12).format("hh:mm A");
$(".block-12").text(time4);
var time5 = currentTime.hour(13).format("hh:mm A");
$(".block-1").text(time5);
var time6 = currentTime.hour(14).format("hh:mm A");
$(".block-2").text(time6)
var time7 = currentTime.hour(15).format("hh:mm A");
$(".block-3").text(time7);
var time8 = currentTime.hour(16).format("hh:mm A");
$(".block-4").text(time8);
var time9 = currentTime.hour(17).format("hh:mm A");
$(".block-5").text(time9);

// Compare current time to timeblock
initializeAgenda();

function initializeAgenda() {

    $("input[type=text]").each(function (){
        var hourChoices = parseInt($(this).attr("id").split("-")[1]);
            if (hourChoices < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present", "future");
            } else if (hourChoices === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past", "future");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past", "present");
            };
    });
};