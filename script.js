/* home */

let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let stcap = 0;
let cap = "";

function gencap()
{
    stcap = 0;
    cap = "";
    for (i = 0; i < 5; i++)
    {
        cap += list[(Math.floor(Math.random() * 26))];
    }
    document.getElementById('CaptPic').innerHTML = cap;
    document.getElementById('stcap').innerHTML = "Введите капчу";
    document.getElementById('stcap').style.color = "white";
}

gencap();

function entercap()
{  
    let capstr = document.getElementById('textcap').value;
    if (capstr == cap)
    {
        document.getElementById('stcap').innerHTML = "Круто! Похоже, что вы не робот";
        document.getElementById('stcap').style.color = "green";
    }
    else
    {
        stcap++;
        document.getElementById('stcap').innerHTML = "Неверная капча! Попробуйте ещё раз";
        document.getElementById('stcap').style.color = "red";
        if(stcap == 3)
        {
            stcap = 0;
            gencap();
        }
    }
}

/* section-1 */

let datases = new Date(2022, 11, 23, 0,0,0,0);

function clock()
{
    let dataact = new Date();
    document.getElementById('day').innerHTML = String(datases.getDate()+(30-dataact.getDate()));
    document.getElementById('hour').innerHTML = String(23-dataact.getHours());
    document.getElementById('minute').innerHTML = String(59-dataact.getMinutes());
    document.getElementById('second').innerHTML = String(59-dataact.getSeconds());
    setTimeout("clock()", 1000);
}

clock();

/* section-2 */

let openlupa = false; 

function lupa()
{
    if(openlupa == false)
    {
        openlupa = true;
        document.getElementById('lupa').style.width = "30vmin";
        document.getElementById('lupapoisk').style.width = "22vmin";
        document.getElementById('lupapoisk').style.paddingLeft = "1vmin";
        document.getElementById('lupapoisk').style.opacity = "1";
        document.getElementById('closeLupa').style.width = "4vmin";
        document.getElementById('closeLupa').style.height = "4vmin";
        document.getElementById('closeLupa').style.opacity = "1";
    }
    else
    {
        openlupa = false;
        document.getElementById('lupa').style.width = "4vmin";
        document.getElementById('lupapoisk').style.width = "0vmin";
        document.getElementById('lupapoisk').style.paddingLeft = "0";
        document.getElementById('lupapoisk').style.opacity = "0";
        document.getElementById('closeLupa').style.width = "0vmin";
        document.getElementById('closeLupa').style.height = "0vmin";
        document.getElementById('closeLupa').style.opacity = "0";
    }
}

/* section-3 */

function mouseOn()
{
    document.getElementById("cardp").style.opacity = "1";
    document.getElementById("card").style.opacity = "1";
}

function mouseOff()
{
    document.getElementById("cardp").style.opacity = "0";
    document.getElementById("card").style.opacity = "0";
}

let boolmouse = false;
function mouseClick()
{
    if (boolmouse == false)
    {
        document.getElementById("cardimg").style.width = "30vmin";
        document.getElementById("cardimg").style.transform = "translateY(0vmin)";
        document.getElementById("cardimg").style.height = "50vmin";
        document.getElementById("cardimg").style.borderRadius = "1vmin";
        boolmouse = true;
    }
    else
    {
        document.getElementById("cardimg").style.width = "20vmin";
        document.getElementById("cardimg").style.transform = "translateY(-10vmin)";
        document.getElementById("cardimg").style.height = "20vmin";
        document.getElementById("cardimg").style.borderRadius = "30vmin";
        boolmouse = false;
    }
}

/* section-4 */


function s(x1, x2, x3, x4)
{
    if (x1 != 9000)
    {
        x1+=18;
        x2+=2;
        x3+=14;
        x4+=10;
        document.getElementById("ys").innerHTML = x1;
        document.getElementById("ls").innerHTML = x2;
        document.getElementById("fs").innerHTML = x3;
        document.getElementById("ts").innerHTML = x4;
        setTimeout(() => { s(x1,x2,x3,x4); }, 1000);
    }
}

s(0,0,0,0);

/* section-5 */

function button()
{
    let strEm = document.getElementById("textlog").value;
    let strPa = document.getElementById("passlog").value;
    let boollog = false;
    let boolpas = false;
    console.log(strEm);
    if (strEm.length == 0)
    {
        document.getElementById('at').innerHTML = "Это полне не может быть пустым";
        document.getElementById('blocklog').style.border = "0.2vmin solid red";
        document.getElementById('blocklog').style.boxShadow = "0 0.4vmin red";
    }
    else if (strEm.indexOf('@') == -1 || strEm.indexOf('.') == -1 || (strEm.indexOf('@') > strEm.indexOf('.')) || (strEm.indexOf('@') == 0) || ((strEm.indexOf('.')-strEm.indexOf('@')) == 1) || ((strEm.length-strEm.indexOf('.')) == 1))
    {
        document.getElementById('at').innerHTML = "Введите правильный адрес";
        document.getElementById('blocklog').style.border = "0.2vmin solid red";
        document.getElementById('blocklog').style.boxShadow = "0 0.4vmin red";
    }
    else
    {
        document.getElementById('at').innerHTML = "";
        document.getElementById('blocklog').style.border = "0.2vmin solid rgb(122,122,122)";
        document.getElementById('blocklog').style.boxShadow = "0 0.4vmin rgb(122,122,122)";
        boollog = true;
    }
    
    if (strPa.length == 0)
    {
        document.getElementById('ap').innerHTML = "Это полне не может быть пустым";
        document.getElementById('blockpas').style.border = "0.2vmin solid red";
        document.getElementById('blockpas').style.boxShadow = "0 0.4vmin red";
    }
    else
    {
        document.getElementById('ap').innerHTML = "";
        document.getElementById('blockpas').style.border = "0.2vmin solid rgb(122,122,122)";
        document.getElementById('blockpas').style.boxShadow = "0 0.4vmin rgb(122,122,122)";
        boolpas = true;
    }
    
    if (boollog == true && boolpas == true)
    {
        window.open('https://www.google.ru', '_blank');
    }
}

/* section-6 */

let boolstar = false;

function starsOn(n)
{
    if (boolstar == false)
    {
        switch (n)
        {
            case 5:
                document.getElementById('star-5').src = "free-icon-star-yel.png";
            case 4:
                document.getElementById('star-4').src = "free-icon-star-yel.png";
            case 3:
                document.getElementById('star-3').src = "free-icon-star-yel.png";
            case 2:
                document.getElementById('star-2').src = "free-icon-star-yel.png";
            case 1:
                document.getElementById('star-1').src = "free-icon-star-yel.png";
        }
    }
}

function starsOff(n)
{
    if (boolstar == false)
    {
        switch (n)
        {
            case 5:
                document.getElementById('star-5').src = "free-icon-star-7073820.png";
            case 4:
                document.getElementById('star-4').src = "free-icon-star-7073820.png";
            case 3:
                document.getElementById('star-3').src = "free-icon-star-7073820.png";
            case 2:
                document.getElementById('star-2').src = "free-icon-star-7073820.png";
            case 1:
                document.getElementById('star-1').src = "free-icon-star-7073820.png";
        }
    }
}

function starsClickOn(n)
{
    if (boolstar == false)
    {
        switch (n)
        {
            case 5:
                document.getElementById('star-5').src = "free-icon-star-yel.png";
            case 4:
                document.getElementById('star-4').src = "free-icon-star-yel.png";
            case 3:
                document.getElementById('star-3').src = "free-icon-star-yel.png";
            case 2:
                document.getElementById('star-2').src = "free-icon-star-yel.png";
            case 1:
                document.getElementById('star-1').src = "free-icon-star-yel.png";
        }
        boolstar = true;
        document.getElementById("blockstar").style.height = "55vmin";
        document.getElementById("blockstar").style.justifyContent = "flex-start";
        document.getElementById("glee").style.width = "50vmin";
        document.getElementById("glee").style.height = "10vmin";
        document.getElementById("glee").style.opacity = "1";
        switch (n)
        {
            case 5:
                document.getElementById("glee").innerHTML = "ЭТО ПРЕКРАСНО";
                break;
            case 4:
                document.getElementById("glee").innerHTML = "ЭТО ХОРОШО";
                break;
            case 3:
                document.getElementById("glee").innerHTML = "ЭТО УДОЛЕТВОРИТЕЛЬНО";
                break;
            case 2:
                document.getElementById("glee").innerHTML = "ЭТО ПЛОХО";
                break;
            case 1:
                document.getElementById("glee").innerHTML = "ЭТО ОТВРАТИТЕЛЬНО";
                break;
        }
        document.getElementById("textstar").style.height = "20vmin";
        document.getElementById("textstar").style.width = "40vmin";
        document.getElementById("textstar").style.opacity = "1";
        document.getElementById("textstar").style.padding = "1vmin";

        document.getElementById("butstar").style.height = "5vmin";
        document.getElementById("butstar").style.width = "40vmin";
        document.getElementById("butstar").style.opacity = "1";
        document.getElementById("butstar").style.marginTop = "5vmin";
    }
}

function startBut()
{
    document.getElementById('star-5').src = "free-icon-star-7073820.png";
    document.getElementById('star-4').src = "free-icon-star-7073820.png";
    document.getElementById('star-3').src = "free-icon-star-7073820.png";
    document.getElementById('star-2').src = "free-icon-star-7073820.png";
    document.getElementById('star-1').src = "free-icon-star-7073820.png";
    document.getElementById("blockstar").style.height = "10vmin";
    document.getElementById("blockstar").style.justifyContent = "center";
    document.getElementById("glee").style.width = "0";
    document.getElementById("glee").style.height = "0";
    document.getElementById("glee").style.opacity = "0";

    document.getElementById("textstar").style.height = "0";
    document.getElementById("textstar").style.width = "0";
    document.getElementById("textstar").style.opacity = "0";
    document.getElementById("textstar").style.padding = "0";

    document.getElementById("butstar").style.height = "0";
    document.getElementById("butstar").style.width = "0";
    document.getElementById("butstar").style.opacity = "0";
    document.getElementById("butstar").style.marginTop = "0";

    document.getElementById("rowstar").style.opacity = "0";
    document.getElementById("rowstar").style.width = "0";
    document.getElementById("rowstar").style.height = "0";

    document.getElementById("endblock").style.opacity = "1";
    document.getElementById("endblock").style.width = "10vmin";
    document.getElementById("endblock").style.height = "50vmin";

    document.getElementById("divret").style.opacity = "1";
    document.getElementById("divret").style.height = "5vmin";
    document.getElementById("divret").style.transform = "translate(24vmin,-2vmin)";
    
    document.getElementById("ret").style.opacity = "1";
    document.getElementById("ret").style.width = "50vmin";
    document.getElementById("ret").style.transform = "translate(12vmin,-4vmin)";
}

function retStar()
{
    boolstar = false;
    document.getElementById("endblock").style.opacity = "0";
    document.getElementById("endblock").style.width = "0";
    document.getElementById("endblock").style.height = "0";

    document.getElementById("divret").style.opacity = "0";
    document.getElementById("divret").style.height = "0";
    document.getElementById("divret").style.transform = "translate(0,0)";
    
    document.getElementById("ret").style.opacity = "0";
    document.getElementById("ret").style.width = "0";
    document.getElementById("ret").style.transform = "translate(0,0)";

    document.getElementById("rowstar").style.opacity = "1";
    document.getElementById("rowstar").style.width = "50vmin";
    document.getElementById("rowstar").style.height = "10vmin";
}