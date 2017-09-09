/**

 * Created by BALASUBRAMANIAM on 28/08/2017.

 */

$(document).ready(function()

{

    //alert("testing....");

    $("#submit").click(function()

    {

        //alert("form submitted");

        userID=$("#userID").val();

        userName=$("#userName").val();

        address=$("#address").val();
        MobileNo=$("#MobileNo").val();

        alert(userID+userName+address+MobileNo);

        data={

            "userID":userID,
            "userName":userName,
            "address":address,
            "MobileNo":MobileNo

        }

        $.post("http://localhost:7300/reg",data, function(result){

            if(result==='done')

            {

                console.log(result);

            }

            console.log(result);

        });



    })

})