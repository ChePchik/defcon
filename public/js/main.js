var socket = io.connect("https://defcons.herokuapp.com/");

socket.on("time", function (data) {
	$("#countdown").html(data.time);
});

$("#start").click(function () {
	socket.emit("click:start");
});

$("#stop").click(function () {
	socket.emit("click:stop");
});

$("#reset").click(function () {
	socket.emit("click:reset");
});
