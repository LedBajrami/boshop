



 const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements2 = document.querySelectorAll('.hidden2')
const hiddenElements3 = document.querySelectorAll('.hidden3')
hiddenElements.forEach((el) => observer.observe(el))
hiddenElements2.forEach((el) => observer.observe(el))
hiddenElements3.forEach((el) => observer.observe(el))








let coll = document.getElementsByClassName("collapsible-button");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}







const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const closebtn = document.getElementById('closebtn')

bar.addEventListener('click', () => {
    nav.classList.add('active')
  })

closebtn.addEventListener('click', () => {
        nav.classList.remove('active')
})









  
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
      smallimg[0].addEventListener('click', () => {
       MainImg.src = smallimg[0].src;
      })

        smallimg[1].addEventListener('click', () => {
        MainImg.src = smallimg[1].src; 
        })

        smallimg[2].addEventListener('click', () => {
        MainImg.src = smallimg[2].src; 
        })

        smallimg[3].addEventListener('click', () => {
        MainImg.src = smallimg[3].src;
         })


 
