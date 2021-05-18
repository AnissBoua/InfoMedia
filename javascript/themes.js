var darkTheme = document.getElementById("dark_theme");
var lightTheme = document.getElementById("light_theme");
var secondaryTheme = document.getElementsByClassName("change_theme");
var secondaryOverrideTheme = document.getElementsByClassName("change_media_theme");

// function dark(){
//     document.body.style.backgroundColor = "rgb(30,30,30)";
//     document.body.style.color = "white";
//     for(var i = 0; i<= secondaryTheme.length; i++){
//         secondaryTheme[i].style.backgroundColor = "rgb(20,20,20)";
//         secondaryOverrideTheme[i].style.backgroundColor = "rgb(30,30,30)";
//     }
// }

// function light(){
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "rgb(30,30,30)";
//     for(var i = 0; i<= secondaryTheme.length; i++){
//         secondaryTheme[i].style.backgroundColor = "rgb(240,240,240)";
//         secondaryOverrideTheme[i].style.backgroundColor = "white";
//     }
// }
function dark(){
    document.body.style.backgroundColor = "rgb(30,30,30)";
    document.body.style.color = "white";
    for(var i = 0; i<= secondaryTheme.length; i++){
        secondaryTheme[i].style.backgroundColor = "rgb(20,20,20)";
    }
    for(var j = 0; j<= secondaryOverrideTheme.length; j++){
        secondaryOverrideTheme[j].style.backgroundColor = "rgb(30,30,30)";
    }
}

function light(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "rgb(30,30,30)";
    for(var i = 0; i<= secondaryTheme.length; i++){
        secondaryTheme[i].style.backgroundColor = "rgb(240,240,240)";
    }

    for(var j = 0; j<= secondaryOverrideTheme.length; j++){
        secondaryOverrideTheme[j].style.backgroundColor = "white";
    }
}

darkTheme.addEventListener('click', dark);
lightTheme.addEventListener('click', light);