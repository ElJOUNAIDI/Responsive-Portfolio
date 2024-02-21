// home-content change
let words =document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter"
        word.append(span);
    })
});
let curentWordIndex = 0 ;
let maxwordIndex = words.length -1 ;
words[curentWordIndex].style.opacity = "1";

let chattext = () => {
    let curentWord = words[curentWordIndex];
    let nextWord = curentWordIndex === maxwordIndex ? words[0] : words[curentWordIndex + 1];
    Array.from(curentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter-out";
        },i*80)
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
    letter.className = "letter in";
    },340 + i * 80)
});
curentWordIndex = curentWordIndex === maxwordIndex ? 0 : curentWordIndex + 1 ;
};
chattext();
setInterval(chattext,3000)

// skills skill-right  circle

let circles = document.querySelectorAll(".circle")
circles.forEach(elem=>{
    var dots = elem.getAttribute("data_dot");
    var marked = elem.getAttribute("data_percent");
    var percent = Math.floor(dots*marked/100);
    var point = ""; 
    var rotate = 360 / dots ;

    for(let i = 0 ; i < dots ;i++){
        point += `<div class="point" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML= point ;
    const pointMarket = elem.querySelectorAll(".point");
    for(let i=0 ; i < percent ;i++){
        pointMarket[i].classList.add("marked");
    }
})

// mix it up portfolio portfolio-galery 

var mixer = mixitup('.portfolio-galery');

// active menu 

let menuli =document.querySelectorAll( "header ul li a ");
let section = document.querySelectorAll("section");

function activeMenu(){ 
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
        menuli.forEach(sec => sec.classList.remove("active"));
        menuli[len].classList.add("active");
} 
activeMenu();
window.addEventListener("scroll",activeMenu);

// stikey navbar
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// toggle icon navbar
let meunIcon =document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
 
meunIcon.onclick = ()=>{
    meunIcon.classList.toggle("fa-x");
    navlist.classList.toggle("open");
} 

window.onscroll = ()=>{
    meunIcon.classList.remove("fa-x");
    navlist.classList.remove("open");
} 

// porallax 
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }
        else{
            entry.target.classList.remove("show-items");
        }
    })
});

const scollscall = document.querySelectorAll(".scroll-scall");
scollscall.forEach((el)=>{
    observer.observe(el)
});

const scollbuttom = document.querySelectorAll(".scroll-buttom");
scollbuttom.forEach((el)=>{
    observer.observe(el)
});

const scolltop = document.querySelectorAll(".scroll-top");
scolltop.forEach((el)=>{
    observer.observe(el)
});



