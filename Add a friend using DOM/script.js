var a = document.querySelector("h5");
var b = document.querySelector("#add");
var check = 0;

b.addEventListener("click", function () {
if(check == 0){
    a.textContent = "Friend Added";
    a.style.color = "green";
    b.innerHTML = "Remove friend";
    check = 1;
}   else{
    a.textContent = "Friend Removed";
    a.style.color = "red";
    b.innerHTML = "Add friend";
    check = 0;
}
})

