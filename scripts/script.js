console.log("working");
let themeDots = document.getElementsByClassName('theme-dot')
let theme = localStorage.getItem('theme')
if (theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

for(var i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener("click", function(){
        let mode = this.dataset.mode;
        console.log('option clicked:', mode);
        setTheme(mode);
    })
}
function setTheme(mode){
    if(mode == "light"){
        document.getElementById('theme-style').href = 'styles/default.css';
    }
    if (mode == "blue") {
        document.getElementById('theme-style').href = 'styles/blue.css';
    }
    if (mode == "green") {
        document.getElementById('theme-style').href = 'styles/green.css';
    }
    if (mode == "purple") {
        document.getElementById('theme-style').href = 'styles/purple.css';
    }
    localStorage.setItem('theme', mode);
}
