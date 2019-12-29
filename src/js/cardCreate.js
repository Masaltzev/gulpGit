const buyBtn =document.querySelectorAll('.productBuy');
buyBtn.forEach(btn=>{
    btn.addEventListener('click',showCounter)
});
function showCounter () {
    const counter = this.nextElementSibling;
    this.style.display = 'none';
    counter.style.display='flex';
}