function initTheme(){

    const button=document.getElementById("themeToggle");

    button.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        const dark=document.body.classList.contains("dark");

        button.textContent=dark?"☀️":"🌙";

        localStorage.setItem("theme",dark);

    });

    if(localStorage.getItem("theme")==="true"){

        document.body.classList.add("dark");

        button.textContent="☀️";

    }

}