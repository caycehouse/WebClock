<!--

var flipThat = new Array();
flipThat[0] = document.getElementById("title");
flipThat[1] = document.getElementById("copy");
flipThat[2] = document.getElementById("colorLinkRed");
flipThat[3] = document.getElementById("colorLinkGreen");
flipThat[4] = document.getElementById("colorLinkBlue");
flipThat[5] = document.getElementById("colorLinkWhite");
flipThat[6] = document.getElementById("colorLinkBlack");
flipThat[7] = document.getElementById("colorLinkT1");
flipThat[8] = document.getElementById("colorLinkT2");
flipThat[100] = document.getElementById("time");
flipThat[101] = document.getElementById("clockBody");

function resetTheme() {
var body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = '';
}

function changeTheme(whichTheme) {
	resetTheme();
	var defaultThemes = new Array();
	defaultThemes[0] = "halloween";
	defaultThemes[1] = "christmas";
	
	var theme = defaultThemes[whichTheme];
	if (theme == "halloween") {
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = 'url(inc/halloweenBG.jpg)';
		changeDefaults("black");

		for(x=0; x<9; x++) {
			flipThat[x].style.color = "#FFFFFF";
		}
	}
	if (theme == "christmas") {
		var body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = 'url(inc/christmasBG.jpg)';
		changeDefaults("black");
	
		for(x=0; x<9; x++) {
			flipThat[x].style.color = "#000000";
		}
	}
}

function changeDefaults(defaultsColor){
	var color = defaultsColor;

	if (color == "white") {
		for(x=0; x<9; x++) {
			flipThat[x].style.color = "#FFFFFF";
		}
		flipThat[100].style.color = "#000000";
		flipThat[101].style.backgroundColor = "#FFFFFF";
	}

	if (color == "black") {
		for(x=0; x<9; x++) {
			flipThat[x].style.color = "#000000";
		}
		flipThat[100].style.color = "#FFFFFF";
		flipThat[101].style.backgroundColor = "#000000";
	}
}

function changeBG(whichColor){
	var colorChanger = new Array();
	colorChanger[0] = '#800000'; //red
	colorChanger[1] = '#008000'; //green
	colorChanger[2] = '#0000A0'; //blue
	colorChanger[3] = '#FFFFFF'; //white
	colorChanger[4] = '#000000'; //black

	document.bgColor = colorChanger[whichColor]; //change background color to color chosen
	var color = colorChanger[whichColor]; //set var color equal to the color chosen

	if (color == "#FFFFFF") {
		resetTheme();
		changeDefaults("black");
	} else if(color == "#000000") {
		resetTheme();
		changeDefaults("white");
	} else if(color == "#FFA500") {
		changeTheme("halloween");
	} else {
		resetTheme();
		changeDefaults("white");
	}

}

changeBG(4); //Set the color to black for default

//-->