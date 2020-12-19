//var fbb = getElementById("fbButton");

function goFbB() {
	window.open ("http://www.facebook.com/seclusivesloth" , "_blank");
}

//var disb = getElementById("disButton");

function goDisB() {
	window.open ("https://discord.com/invite/pUzdDsp" , "_blank");
}

//var merb = getElementById("merButton");

function goMerB() {
	window.open ("https://teespring.com/stores/seclusivesloth-2" , "_blank");
}

//var twb = getElementById("twButton");

function goTwB() {
	window.open ("http://www.twitch.tv/seclusivesloth" , "_blank");
}

//var vidb = getElementById("vidButton");

function goVidB() {
	window.open ("" , "_blank");

}

var images = ["../seclusivesloth/images/classictee.jpg",
"../seclusivesloth/images/coffeecup.jpg",
"../seclusivesloth/images/facemask.jpg",
"../seclusivesloth/images/fannypack.jpg",
"../seclusivesloth/images/gator.jpg",
"../seclusivesloth/images/hoodie.jpg",
"../seclusivesloth/images/iphonecase.jpg",
"../seclusivesloth/images/samsungcase.jpg",
"../seclusivesloth/images/womansclassictee.jpg"]



    
var num = 0;
function next() {
	var slider = document.getElementById('slider');
	num++;
	if(num >= images.length){
		num = 0;
	}
	slider.src = images[num]

}
function prev() {
	var slider = document.getElementById('slider');
	num--;
	if(num < 0) {
		num = images.length -1;
	}
	slider.src = images[num];

}

