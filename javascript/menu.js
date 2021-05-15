var menu = document.getElementById("mobile-menu");
var menuList = document.getElementById("mobile-menu_list")

var toggleMenu = function(){
    if(menuList.classList.contains("header_menulogo_mobile_show")){
        menuList.classList.remove("header_menulogo_mobile_show");
    }
    else{
        menuList.classList.add("header_menulogo_mobile_show");
    }
}

menu.addEventListener('click', toggleMenu);