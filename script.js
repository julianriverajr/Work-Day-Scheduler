$("#currentDay").text(moment().format('ddd') + ", " + moment().format('MMMM Do YYYY, h:mm a'));

//saves 9am events
$("#saveBtn9").on("click", function () {
    var input9 = $("#event9").val();
    localStorage.setItem("input9", input9);
    console.log(input9)
});
var LSinput9 = localStorage.getItem("input9");
$("#event9").text(LSinput9);

//saves 10am events
$("#saveBtn10").on("click", function () {
    var input10 = $("#event10").val();
    localStorage.setItem("input10", input10);
    console.log(input10)
});
var LSinput10 = localStorage.getItem("input10");
$("#event10").text(LSinput10);

//saves 11am events
$("#saveBtn11").on("click", function () {
    var input11 = $("#event11").val();
    localStorage.setItem("input11", input11);
    console.log(input11)
});
var LSinput11 = localStorage.getItem("input11");
$("#event11").text(LSinput11);

//saves 12noon events
$("#saveBtn12").on("click", function () {
    var input12 = $("#event12").val();
    localStorage.setItem("input12", input12);
    console.log(input12)
});
var LSinput12 = localStorage.getItem("input12");
$("#event12").text(LSinput12);

//saves 1pm events
$("#saveBtn1").on("click", function () {
    var input1 = $("#event1").val();
    localStorage.setItem("input1", input1);
    console.log(input1)
});
var LSinput1 = localStorage.getItem("input1");
$("#event1").text(LSinput1);

//saves 2pm events
$("#saveBtn2").on("click", function () {
    var input2 = $("#event2").val();
    localStorage.setItem("input2", input2);
    console.log(input2)
});
var LSinput2 = localStorage.getItem("input2");
$("#event2").text(LSinput2);

//saves 3pm events
$("#saveBtn3").on("click", function () {
    var input3 = $("#event3").val();
    localStorage.setItem("input3", input3);
    console.log(input3)
});
var LSinput3 = localStorage.getItem("input3");
$("#event3").text(LSinput3);

//saves 4pm events
$("#saveBtn4").on("click", function () {
    var input4 = $("#event4").val();
    localStorage.setItem("input4", input4);
    console.log(input4)
});
var LSinput4 = localStorage.getItem("input4");
$("#event4").text(LSinput4);

