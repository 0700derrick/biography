onload
{
    (document.getElementById("pagehome").style.color="rgb(30, 218, 30)");
    (document.getElementById("alertdanger").style.display="none")
    document.getElementById("alertsuccess").style.display="none"
    document.getElementById("inform").style.display="block"
}

document.getElementById("closedanger")
document.getElementById("closesuccess")

closesuccess.addEventListener("click", buttt)
function buttt (ev)
{
    document.getElementById("alertsuccess").style.display="none"
}


closedanger.addEventListener("click", butt)
function butt (ev)
{
    document.getElementById("alertdanger").style.display="none"
}


function dat()
{
    document.getElementById("inp")
    if(inp.value=="")
    {
        document.getElementById("alertdanger").style.display="block"
    }

    else
    {
        document.getElementById("alertsuccess").style.display="block"
    }
}
