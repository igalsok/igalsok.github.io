export function footerData(){
    const footerText = document.getElementById("footerText");
    let footerLabel = "This page was built using: ";
    let langArray = ["HTML", "CSS", "JavaScript"];
    for(let i=0;i<langArray.length;++i){
        footerLabel += langArray[i];
        i<langArray.length-1 ? footerLabel += ", " : footerLabel += " ";
    }
    footerText.innerHTML = footerLabel;
}