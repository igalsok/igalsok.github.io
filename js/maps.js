import { footerData as footer } from "../js/footer.js"

const mapsLocationArray = [];
const mapApiKey = "AIzaSyDoLKLJrr_IHD6SNuoarSgz7GMxCd-wqxI"; //my google maps API key
const embeddedSrc = `https://www.google.com/maps/embed/v1/place?key=${mapApiKey}&q=`;
const mapsIFrame = document.getElementById("mapsIFrame");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
let mapsArrayPointer;

function init(){
    mapsArrayPointer = 0;
    var cityList = document.querySelectorAll('.city');
    cityList.forEach(element => mapsLocationArray.push(element.innerHTML)); //getting the cities labels element and pushing it to the array (simply for not hard-coding the cities)
    makeButtonsVisibility(); //beacuse  we are starting from the first city so we dont want the prev button.
    changeMapLocation(mapsLocationArray[mapsArrayPointer]); //displaying the first map location (pointer = 0)
    prevButton.addEventListener("click", prevClicked)
    nextButton.addEventListener("click", nextClicked)
}

function changeMapLocation(location){
    //the embeddedSrc string is pharsed that way that we only should add the location string to it for displaying the right location on the map
    mapsIFrame.setAttribute("src",embeddedSrc + location) 
}

function nextClicked(){
    ++mapsArrayPointer;
    makeButtonsVisibility(); 
    !(mapsArrayPointer < 0 || mapsArrayPointer >= mapsLocationArray.length) && changeMapLocation(mapsLocationArray[mapsArrayPointer]) ;
}
function prevClicked(){
    --mapsArrayPointer;
    makeButtonsVisibility();
    !(mapsArrayPointer < 0 || mapsArrayPointer >= mapsLocationArray.length) && changeMapLocation(mapsLocationArray[mapsArrayPointer]) ;
}


function makeButtonsVisibility(){
    (mapsArrayPointer <= mapsLocationArray.length-2) ? nextButton.disabled = false : nextButton.disabled = true ; 
    (mapsArrayPointer > 0) ? prevButton.disabled = false : prevButton.disabled = true;
}

init();
footer();


