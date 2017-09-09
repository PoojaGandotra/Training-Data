/**

 * Created by BALASUBRAMANIAM on 28/08/2017.

 */

$(document).ready(function()

{

    //alert("testing....");

    $("#submit").click(function()

    {

        //alert("form submitted");

        user=$("#userName").val();

        pwd=$("#password").val();

        alert(user+pwd);

        data={

            "userName":user,

            "password":pwd

        }

        $.post("http://localhost:7300/login",data, function(result){

            if(result==='done')

            {

                console.log(result);

            }

            console.log(result);

        });



    })

})