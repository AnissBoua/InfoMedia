var newsRadio = document.getElementsByName("news_media_buttons");

function newsCheck(){
    for(i = 0; i <= newsRadio.length; i++) {
        var newsContainer = "container_" + i;
        if(newsRadio[i].checked == true){
            document.getElementById(newsContainer).style.display = "flex";
        }
        else{
            document.getElementById(newsContainer).style.display = "none";
        }
    }
}

newsRadio.forEach(radio =>{
    radio.addEventListener('click', newsCheck);
});