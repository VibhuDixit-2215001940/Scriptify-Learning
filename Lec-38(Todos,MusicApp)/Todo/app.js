$(document).ready(function () {
    $("#add").click(function () {
        let task = $("#input").val().trim();
        if (task !== "") {
            $("#list").append(`<li>${task} <button class="remove">X</button></li>`);
            $("#input").val("");
        }
    });

    $("#list").on("click", ".remove", function () {
        $(this).parent().remove();
    });

    $("#del").click(function () {
        $("#list").empty();
    });

    $("#input").keypress(function (e) {
        if (e.which === 13) {
            $("#add").click();
        }
    });
});
