var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opencontent(tabname) {
    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(var  tabcontent of tabcontents) {
        tabcontent.classList.remove("active-content");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");
    

}