/**
 * Created by sakshi on 24/6/17.
 */
$(function () {

    // $("#login").click(function () {
    //     console.log("1");
    //     // alert("The paragraph was clicked.");
    //     $.post('/add', {username: $('#email').val(), password: $('#password').val(),nature:$('#nature').val()}, function()
    //         {
    //             console.log("2");
    //            // refreshTodos();
    //         }
    //     )
    // });

    $('#login').click(function () {
        console.log("hee");
        $.post('/add', {username: $('#email').val(), password: $('#passowrd').val(),nature:"student"}, function()
            {
                console.log("3");
                //refreshTodos();
            }
        )
        window.location = "http://localhost:2358/catalog"
    });



});