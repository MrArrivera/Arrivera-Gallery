//Variable
var myImage = document.getElementById("nubes-photos");
const morePhotos = document.getElementById("myDIV");
const fullPhoto = document.getElementById("fullScreenDIV")
var nubesArray = ["photos/nubes-photos/DSCN0526.JPG","photos/nubes-photos/DSCN0527.JPG","photos/nubes-photos/DSCN0529.JPG"];
var imageIndex = 1;

    //Functions
    //Show all photos
    function myFunction() {
        morePhotos.showModal();
    }

    //Hide all photos
    function hideAllPhotos() {
        morePhotos.close();
    }

    //Full screen photo
    function fullScreen() {
        fullPhoto.showModal();
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
        fullPhoto.close();
    }