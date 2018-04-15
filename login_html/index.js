// function delet() {
//     console.log("inside del");
//     $.post('/x', {item: $('#ui').val(), price: $('#p').val()}, function()
//         {
//             console.log("4");
//            // refreshTodos();
//         }
//     )
//
// }

$(function () {

    // function refresh1(data) {
    //     window.location = "http://localhost:3008/professor"
    //     alert("signedin");
    //     console.log(data);
    // }

    $('#login').click(function () {
        console.log("hee");
        $.post('/add', {username: $('#ui').val(), password: $('#p').val(),nature:"student"}, function()
            {
                console.log("3");
                refreshTodos();
            }
        )
        window.location = "http://localhost:2358/catalog"
    });


});