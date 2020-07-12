document.getElementById("clozedanger")
document.getElementById("butt")



clozedanger.addEventListener("click", cdanger)
function cdanger(ev)
{
    document.getElementById("danger-alert").style.display="none"
}

butt.addEventListener("click", clickbutt)
function clickbutt (ev)
{
    document.getElementById("inpu")
    if(inpu.value=="")
    {
        document.getElementById("adanger").style.display="block"
    }
    
    else
    {
        document.getElementById("asuccess").style.display="block"
    }
}


