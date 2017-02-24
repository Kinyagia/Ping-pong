$(document).ready(function() {
    $("form#userInput").submit(function(event) {
        event.preventDefault();
        var number = parseInt($("#input1").val());
        var result = pingpong(number);
        $("#results").append("<li>" + result + "</li>");

    });

    function pingpong(number) {
        var entry = [];
        for (var index = 1; index <= number; index++) {
            if (index % 15 === 0) {
                entry.push("pingpong")
            } else if (index % 5 === 0) {
                entry.push("pong")
            } else if (index % 3 === 0) {
                entry.push("ping")
            } else {
                entry.push(index);
            }

        };
        return entry;
    };
});
