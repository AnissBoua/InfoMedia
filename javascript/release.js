var releaseRadio = document.getElementsByName("release_media_buttons");

function releaseCheck(){
    for(i = 0; i <= releaseRadio.length; i++) {
        var releaseContainer = "release_container_" + i;
        if(releaseRadio[i].checked == true){
            document.getElementById(releaseContainer).style.display = "block";
        }
        else{
            document.getElementById(releaseContainer).style.display = "none";
        }
    }
}

releaseRadio.forEach(radio =>{
    radio.addEventListener('click', releaseCheck);
});