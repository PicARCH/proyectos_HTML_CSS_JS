let list = document.querySelectorAll(".header__li");
function activeLink(){
    list.forEach((item)=>
        item.classList.remove("active")
    );
    this.classList.add("active");      
}
list.forEach((item)=>
    item.addEventListener("click",activeLink)
);
