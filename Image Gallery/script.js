const img2 = document.querySelector('.img-2');
const img1 = document.querySelector('.img-1');
const img3 = document.querySelector('.img-3');
const img4 = document.querySelector('.img-4');


img2.addEventListener('click',()=>{
    // img2.style.width = '70%';
    // img1.style.width = '10%';
    // img3.style.width = '10%';
    // img4.style.width = '10%';
   img2.classList.add('active');

})
img1.addEventListener('click',()=>{
    img1.style.width = '70%';
    img2.style.width = '10%'
    img3.style.width = '10%';
    img4.style.width = '10%'
})
img3.addEventListener('click',()=>{
    img3.style.width = '70%';
    img4.style.width = '10%'
    img2.style.width = '10%';
    img1.style.width = '10%';
})
img4.addEventListener('click',()=>{
    img4.style.width = '70%';

    img3.style.width = '10%'
    img2.style.width = '10%';
    img1.style.width = '10%';
})