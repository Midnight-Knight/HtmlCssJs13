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