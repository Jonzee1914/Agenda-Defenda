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
function determineTime() {

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

determineTime();

var block = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < block.length; i++) {
    var dataHour = localStorage.getItem(block[i]);
    // form - control
    $(".form" + block[i]).val(dataHour);
}
// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});

// Listener to delete local storage
$(".deleteBtn").click(function () {
    localStorage.clear();
    location.reload();
});
