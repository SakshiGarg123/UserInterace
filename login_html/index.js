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
        $.post('/check', {username: $('#ui').val(), password: $('#p').val(),nature:"student"}, function(data)
            {
                console.log("3");
                console.log(data);
                //refreshTodos();
                if(data.length==0)
                {
                    window.location = "http://localhost:2358/sign1"
                }
                else if($('#p').val()!=data[0].password)
                {
                    window.alert("wrong password")
                }
                else
                {
                    window.location = "http://localhost:2358/catalog"
                }
            }
        )

    });


});