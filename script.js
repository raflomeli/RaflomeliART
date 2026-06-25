const cursor = document.querySelector(".cursor");
const reveals = document.querySelectorAll(".reveal");
const dynamicTitle = document.getElementById("dynamicTitle");

document.addEventListener("mousemove", (e)=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

function revealScroll(){
    reveals.forEach((el)=>{
        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealScroll);

document.querySelectorAll(".work").forEach(work=>{
    const video = work.querySelector("video");

    work.addEventListener("mouseenter", ()=>{
        video.play();
        dynamicTitle.textContent = work.dataset.title;
        cursor.style.transform = "translate(-50%,-50%) scale(2)";
    });

    work.addEventListener("mouseleave", ()=>{
        video.pause();
        video.currentTime = 0;
        cursor.style.transform = "translate(-50%,-50%) scale(1)";
    });
});

window.addEventListener("scroll", ()=>{
    const scrollY = window.scrollY;
    document.querySelector(".hero-content").style.transform =
        `translateY(${scrollY * 0.2}px)`;
});