//addEventListener is used to sets up a function to be called


// document.querySelector("button").addEventListener("click",handleclick);
// function handleclick(){
//     alert("I got clicked");
// }
//write ananymous funtion shortly like below 

//detecting button press
var numberofButtons=document.querySelectorAll(".drum").length ;
for(var i=0; i<numberofButtons; i++) 
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){   //anaonymuous function
    // console.log(this);   //identity to find function call using this(identity key)
    // this.style.color="white";
    // alert("I got clicked");
    //switch case used here
var buttoninnerHTML= this.innerHTML;
makesound(buttoninnerHTML);

buttonAnimation(buttoninnerHTML);
});
}

//detecting keyboard press
addEventListener("keypress",function(event){
    makesound(event.key);

    buttonAnimation(event.key);
});
function makesound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");            //play sound
            tom1.play();
            break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
                
                case "s":
                    var tom3=new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                    case "d":
                        var tom4=new Audio("sounds/tom-4.mp3");
                        tom4.play();
                        break;
                        case "j":
                            var snare=new Audio("sounds/snare.mp3");
                            snare.play();
                            break;
                            case "k":
                                var crash=new Audio("sounds/crash.mp3");
                                crash.play();
                                break;
                                case "l":
                                    var kick=new Audio("sounds/kick-bass.mp3");
                                    kick.play();
                                    break;
                                    default:
                                        console.log(buttoninnerHTML);
    }

}
function buttonAnimation(currentkey){

    var activeButton=document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");    //add activebutton to that class element pressed(css)
    setTimeout(function(){                  //setTimeout 1second of time and after shadow is remmoved
        activeButton.classList.remove("pressed");
    }, 100);

}



