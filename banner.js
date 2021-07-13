



var imagens = [
	"destaque-home.png",
	"destaque-home-2.png",
	"destaque-home-3.png"

	];


var x=0;
function slider()
{
	if (x > 2)
	{
	x=0;
	}
	document.getElementById("imagen").src = imagens[x];
	x++;
}

temporizador = setInterval("slider()", 4000);

function stop()
{
	clearInterval(temporizador);
}

function play()
{
	temporizador = setInterval("slider()", 4000);
}
	
	
	