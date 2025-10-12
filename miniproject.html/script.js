let count=0;
const countDisplay=document.getElementById("count");
const inceraseBtn=document.getElementById("increase");
const decreaseBtn=document.getElementById("decrease");
inceraseBtn.addEventListener("click",()=>{
    count++;
    countDisplay.textContent = count;
});
decreaseBtn.addEventListener("click",()=>{
    count--;
    countDisplay.textContent = count;
});