//Variable
var myImage = document.getElementById("nubes-photos");
var nubesArray = ["photos/nubes-photos/DSCN0526.JPG","photos/nubes-photos/DSCN0527.JPG","photos/nubes-photos/DSCN0529.JPG"];
var imageIndex = 1;

    //Functions
    //Show all photos
    function myFunction() {
        document.getElementById("myDIV").style.zIndex = "10";
        document.getElementById("myDIV").style.opacity = "1";
        document.getElementById("myDIV").style.transitionDuration = "0.3s";

    }

    //Hide all photos
    function hideAllPhotos() {
        document.getElementById("myDIV").style.zIndex = "-1";
        document.getElementById("myDIV").style.opacity = "0";
    }

    //Full screen photo
    function fullScreen() {
        document.getElementById("fullScreenDIV").style.opacity = "1";
        document.getElementById("fullScreenDIV").style.zIndex = "7";
        document.getElementById("myDIV").style.zIndex = "-1";
        document.getElementById("myDIV").style.opacity = "0";
        document.getElementById("nubes-photos").style.opacity = "1"
    }

    //Show next picture
    function nextPicture(){
        myImage.setAttribute("src", nubesArray[imageIndex]);
        imageIndex++;
        if (imageIndex > 2) {imageIndex = 0;}
    }

    //Close full screen mode
    function closeFullScreen(){
        document.getElementById("fullScreenDIV").style.opacity = "0";
        document.getElementById("fullScreenDIV").style.zIndex = "-2";
        imageIndex = 1;
        document.getElementById("nubes-photos").src = "photos/nubes-photos/DSCN0526.JPG";
    }