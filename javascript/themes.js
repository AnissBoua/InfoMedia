var darkTheme = document.getElementById("dark_theme");
var lightTheme = document.getElementById("light_theme");

// function dark(){
//     document.body.classList.add("dark_theme");
//     if(document.body.classList.contains("light_theme")){
//         document.body.classList.remove("light_theme");
//         document.body.classList.add("dark_theme");
//     }
// }

// function light(){
//     document.body.classList.add("light_theme");
//     if(document.body.classList.contains("dark_theme")){
//         document.body.classList.remove("dark_theme");
//         document.body.classList.add("light_theme");
//     }
// }

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function dark(){
    if (localStorage.getItem('theme') === 'light_theme'){
        setTheme('dark_theme');
    }
}

function light(){
    if (localStorage.getItem('theme') === 'dark_theme'){
        setTheme('light_theme');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'dark_theme') {
       setTheme('dark_theme');
   } else {
       setTheme('light_theme');
   }
})();

darkTheme.addEventListener('click', dark);
lightTheme.addEventListener('click', light);