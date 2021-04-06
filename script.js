var gam = document.getElementById("text");
var prof = document.getElementById("profile");
var some = document.getElementById("some");

var gambut = document.getElementById("game");
var teambut = document.getElementById("team");
var somebut = document.getElementById("sos");


function handleClick(index) 
{
if (index === 0)
    {
        gambut.classList.add('active');
        teambut.classList.remove('active');
        somebut.classList.remove('active');
        gam.style.display="block";
        prof.style.display="none";
        some.style.display="none";
    }

else if (index === 1)
    {
        teambut.classList.add('active');
        gambut.classList.remove('active');
        somebut.classList.remove('active');
        prof.style.display="block";
        some.style.display="none";
        gam.style.display="none";
    }

else if (index === 2)
    {
        somebut.classList.add('active');
        gambut.classList.remove('active');
        teambut.classList.remove('active');
        some.style.display="block";
        gam.style.display="none";
        prof.style.display="none";
    }

}
