const buyBtn =document.querySelectorAll('.productBuy');
buyBtn.forEach(btn=>{
    btn.addEventListener('click',showCounter)
});
function showCounter () {
    const counter = this.nextElementSibling;
    this.style.display = 'none';
    counter.style.display='flex';
}
const counter = function () {
    const btns = document.querySelectorAll('.counterBtn');
    btns.forEach(btn=>{
        btn.addEventListener('click', counterState())
    });
    function counterState() {

    }
};
counter();