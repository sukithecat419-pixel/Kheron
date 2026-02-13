const password = document.getElementById
("password")
const toogle = document.getElementById
("toggle")
toogle.addEventListener("click",()=>{ 
    if(password.type==="password"){
        password.type = "text";
        toogle.textContent="Hide"
    }
    else{
        password.type="password"
        toogle.textContent="Show"
    }
})