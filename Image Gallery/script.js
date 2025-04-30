const img2 = document.querySelector(".img-2");
const img1 = document.querySelector(".img-1");
const img3 = document.querySelector(".img-3");
const img4 = document.querySelector(".img-4");

img2.addEventListener("click", () => {
  img2.style.width = "70%";
  img1.style.width = "10%";
  img3.style.width = "10%";
  img4.style.width = "10%";
  img2.style.transition = " ease-in-out 1.4s ";
});
img1.addEventListener("click", () => {
  img1.style.width = "70%";
  img2.style.width = "10%";
  img3.style.width = "10%";
  img4.style.width = "10%";
  img1.style.transition = " ease-in-out 1.4s ";
});
img3.addEventListener("click", () => {
  img3.style.width = "70%";
  img4.style.width = "10%";
  img2.style.width = "10%";
  img1.style.width = "10%";
  img3.style.transition = " ease-in-out 1.4s ";
});
img4.addEventListener("click", () => {
  img4.style.width = "70%";
  img4.style.transition = " ease-in-out 1.4s ";
  img3.style.width = "10%";
  img2.style.width = "10%";
  img1.style.width = "10%";
});

// const gal = document.querySelectorAll('.panel');

// gal.forEach((e)=>{
//     e.addEventListener('click',()=>{
//         removeClass()
//         e.classList.add('active');
//         console.log('hey')
//     })

// })

// function removeClass(){
//     gal.forEach((e)=>{
//         e.addEventListener('click',()=>{
//             e.classList.remove('active');
//         })
//     })
// }
