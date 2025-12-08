var settingsmenu=document.querySelector(".settings-menu");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}



let btn1 = document.querySelectorAll(".al1");
btn1.forEach(button => {
    button.addEventListener("click", function () {
        alert("Do you want to like?");
    });
});

let btn2 = document.querySelectorAll(".al2");
btn2.forEach(button => {
    button.addEventListener("click", function () {
        alert("Do you want to comment?");
    });
});

let btn3 = document.querySelectorAll(".al3");
btn3.forEach(button => {
    button.addEventListener("click", function () {
        alert("Do you want to share?");
    });
});




let ld = document.getElementById("load-more-btn");
ld.addEventListener(`click`,function(){
    alert("Currently we are in Beta version!");
})




let dl = document.getElementById("dark-btns");
dl.addEventListener(`click`,()=>{
    document.body.classList.toggle("dark")
    let tx = document.getElementById("load-more-btn");
    if (document.body.className==="dark"){
        tx.style.color="white";
        dl.textContent="☀️ light Mode"
    }
    else {
        {dl.textContent="🌙 Dark Mode";}
        tx.style.color="black";
         
    }
      
})



