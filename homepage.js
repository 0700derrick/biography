function validate ()
{
    var email= document.getElementById("emal")
    if(email.value=="")
    {
        alert("Fill in your Email please")
        return false;
    }

    else { alert("Thank you for your support")}return true;
}

