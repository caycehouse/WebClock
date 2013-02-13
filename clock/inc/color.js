<!--

function flipThose(color) {

	var flipThat = new Array();

	flipThat[0] = document.getElementById("title");
	flipThat[1] = document.getElementById("copy");
	flipThat[2] = document.getElementById("colorLinkRed");
	flipThat[3] = document.getElementById("colorLinkGreen");
	flipThat[4] = document.getElementById("colorLinkBlue");
	flipThat[5] = document.getElementById("colorLinkWhite");
	flipThat[6] = document.getElementById("colorLinkBlack");
	flipThat[7] = document.getElementById("time");
	flipThat[8] = document.getElementById("flipThatBody");

	for(x=0; x<7; x++) {
		flipThat[x].style.color = color;
	}
	
	if (color == "#FFFFFF") {
		flipThat[8].style.backgroundColor = "#FFFFFF";
		flipThat[7].style.color = "#000000";
	} else if (color == "#000000") {
		flipThat[8].style.backgroundColor = "#000000";
		flipThat[7].style.color = "#FFFFFF";
	}

}

function changeBG(whichColor){
	
	var colorChanger = new Array();

	colorChanger[0] = '#800000';
	colorChanger[1] = '#008000';
	colorChanger[2] = '#0000A0';
	colorChanger[3] = '#FFFFFF';
	colorChanger[4] = '#000000';

	document.bgColor = colorChanger[whichColor];
	color = colorChanger[whichColor];

	if (color == "#FFFFFF") {
		flipThose("#000000");
	} else if(color == "#000000") {
		flipThose("#FFFFFF");
	} else {
		flipThose("#FFFFFF");
	}

}

changeBG(4); //Set the color to black for default

//-->