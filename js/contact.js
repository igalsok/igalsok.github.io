import { footerData as footer } from "../js/footer.js"

function submitClicked(event){
    event.preventDefault()
    let form = document.getElementById("form");
    let inputList = document.querySelectorAll(".input");
    let radioLabel = document.getElementById("radioHeadline");
    let radioChecked = document.querySelector('input[name="rate"]:checked'); 
    let outputString = "";
        for(let i=0;i<inputList.length;++i){
           outputString += `${document.querySelector("label[for="+ inputList[i].id + "]").innerHTML.replace('*','')} ${inputList[i].value}`; //we should replace the "*" char with an empty string for better output
           outputString += "\n" 
        }
        
     /*
        We need treat the radioGroup differently from the other inputs. we want only the chekced box to display its value
     */
    outputString += `${radioLabel.innerHTML} ${radioChecked.value}`
    console.log(outputString);
    form.reset();
}

footer();


document.getElementById("form").addEventListener("submit", submitClicked);

