const aside = document.querySelector("aside") ;
const links = document.querySelectorAll(".link");
const menuBtn = document.getElementById("menu");
let moodName = document.getElementById("mood_name");
const sun = document.querySelector(".mood .light");
const moon = document.querySelector(".mood .dark");
const mood = document.getElementById("mood");
const body = document.querySelector("body");

links.forEach(link =>{
    link.addEventListener("click" ,()=>{
        links.forEach(li =>{
            li.classList.remove("active");
        });
        link.classList.add("active");
    });
});

let isOpen = false;
menuBtn.addEventListener("click" ,()=>{
    if(!isOpen){
        aside.style.left = "0px";
        aside.style.zIndex = "1000";
    } else{
        aside.style.left = "-100%";
    }

    isOpen = !isOpen;
});

const table = document.querySelectorAll("table tbody tr");
table.forEach(row =>{
    row.addEventListener("click" ,()=>{
        table.forEach(tr =>{
            tr.classList.remove("active");
        })
        row.classList.add("active");
    })
})

console.log(table.length)