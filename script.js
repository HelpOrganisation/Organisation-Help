// =====================================
// HELP ORGANISATION WEBSITE
// script.js
// =====================================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =============================
// Sticky Header
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        header.style.background="#ffffff";
        header.style.boxShadow="0 10px 25px rgba(0,0,0,.12)";

    }else{

        header.style.background="#ffffff";
        header.style.boxShadow="0 4px 15px rgba(0,0,0,.08)";
    }

});

// =============================
// Counter Animation
// =============================

const counters=document.querySelectorAll(".stats h2");

let started=false;

window.addEventListener("scroll",()=>{

const section=document.querySelector(".stats");

if(!section) return;

const trigger=section.offsetTop-400;

if(window.scrollY>trigger && !started){

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

});

}

});

// =============================
// Scroll Reveal
// =============================

const reveals=document.querySelectorAll(".card,.gallery img,.chairman-box,.hero,.fade");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

reveals.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";
item.style.transition="all .8s ease";

observer.observe(item);

});

// =============================
// Image Lightbox
// =============================

const gallery=document.querySelectorAll(".gallery img");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="15px";

overlay.appendChild(image);

overlay.addEventListener("click",()=>{

overlay.remove();

});

document.body.appendChild(overlay);

});

});

// =============================
// Contact Form Validation
// =============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const inputs=form.querySelectorAll("input,textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()==""){

valid=false;
input.style.border="2px solid red";

}else{

input.style.border="1px solid #ddd";

}

});

if(valid){

alert("Thank you! Your message has been received.");

form.reset();

}else{

alert("Please fill all required fields.");

}

});

}

// =============================
// Back To Top Button
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#d86c43";
topBtn.style.color="white";
topBtn.style.fontSize="24px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =============================
// Current Year in Footer
// =============================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=footer.innerHTML.replace("2026",new Date().getFullYear());

}

// =============================
// Console Message
// =============================

console.log("Help Organisation Website Loaded Successfully");