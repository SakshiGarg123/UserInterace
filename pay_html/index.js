/**
 * Created by sakshi on 18/7/17.
 */
// src="https://checkout.razorpay.com/v1/checkout.js"
// data-key="rzp_test_zcMpXgB9IwLVoB"
// data-amount="5000"
// data-buttontext="Pay with Razorpay"
// data-name="Merchant Name"
// data-description="Purchase Description"
// data-image="https://your-awesome-site.com/your_logo.jpg"
// data-prefill.name="Harshil Mathur"
// data-prefill.email="support@razorpay.com"
// data-theme.color="#F37254"

function refreshTodos2() {

    console.log("4");
    $.get('/ecom/all2', function (data) {
        var ii =1;
        var sum=0;
        for (todo of data[0] ) {
            sum=sum+(todo.price * todo.quantity);
        }
        if(data[1]>=sum)
            sum=0;
        price.innerHTML=sum;
        console.log(sum);
        $.post('/incpoints',{points:data[1]+sum*0.01}, function (data) {

        })
    })


}
$(function () {

    refreshTodos2();
    //  refreshTodos2();

});