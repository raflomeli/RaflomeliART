const cursor = document.querySelector(".cursor");
const reveals = document.querySelectorAll(".reveal");
const dynamicTitle = document.getElementById("dynamicTitle");
const works = document.querySelectorAll(".work");
const progressFill = document.querySelector(".progress-fill");
const footer = document.querySelector(".footer");

const colors = [
"#050505","#0b0b10","#111827","#161616",
"#201010","#0c1a24","#121212","#1c1c1c",
"#2a0d0d","#081826","#111111","#19130f"
];

document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
});

function revealScroll(){
    reveals.forEach((el)=>{
        const top=el.getBoundingClientRect().top;

        if(top<window.innerHeight-100){
            el.classList.add("active");
        }
    });
}

function updateProgress(){
    const scrollTop=window.scrollY;
    const docHeight=document.body.scrollHeight-window.innerHeight;
    const progress=(scrollTop/docHeight)*100;

    progressFill.style.height=progress+"%";
}

window.addEventListener("scroll",()=>{
    revealScroll();
    updateProgress();

    const scrollY=window.scrollY;

    document.querySelector(".hero-content").style.transform =
    `translateY(${scrollY*0.2}px)`;

    const footerTop=footer.getBoundingClientRect().top;

    if(footerTop<window.innerHeight){
        dynamicTitle.style.opacity="0";
    }else{
        dynamicTitle.style.opacity=".10";
    }
});

works.forEach((work,index)=>{
    work.addEventListener("mouseenter",()=>{
        dynamicTitle.textContent=work.dataset.title;
        document.body.style.background=colors[index];
        cursor.style.transform="translate(-50%,-50%) scale(2)";
    });

    work.addEventListener("mouseleave",()=>{
        cursor.style.transform="translate(-50%,-50%) scale(1)";
    });
});
