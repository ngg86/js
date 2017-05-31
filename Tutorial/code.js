//Code
document.getElementById("knop").onclick = toon;

function groet()
	{
		alert("Goedemiddag allemaal.");
	}
	
function screenWidth()
{
	document.getElementById("demo").innerHTML = "Screen width is: " + screen.width;
}

function toon()
{
	var invoer = document.getElementById("invoer");
	var value = invoer.value;
	var demo = document.getElementById("demo")
	if(value == "demo")
	{
		demo.style.display = "none";
	}
	if(value == "toon")
	{
		demo.style.display = "block";
	}
	if(value == value)
	{
		demo.style.color = value;
		demo.style.fontFamily = value;
	}
}

