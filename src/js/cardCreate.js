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
    const inputs = document.querySelectorAll('.counterValue');
    btns.forEach(btn=>{
        btn.addEventListener('click', counterState);
        btn.addEventListener('click', countPrice);
    });
    inputs.forEach(input=>{
        input.addEventListener('keyup', countPrice);

    });
    function counterState() {
        const dir = this.dataset.direction;
        const inputEl = this.parentElement.querySelector(
            '.counterValue');
        let currentValue = inputEl.value;
        dir === 'plus'? counterPlus(inputEl, currentValue):
            counterMinus(inputEl, currentValue)
    }
    const counterPlus = (el, val)=>{
        el.value = +val + 1
    };
    const counterMinus = (el, val)=>{
        if(val-1) el.value= +val -1
    };
    function countPrice() {
        const totalPrice = this.parentElement.nextElementSibling;
        const currentPriceValue = this.closest('.product').querySelector(
            '.productPrice').innerText;
        const inputEl = this.parentElement.querySelector(
            '.counterValue');
        let currentValue = inputEl.value;
        let totalPriceNumber;
        if(currentValue>1){
            totalPriceNumber = +currentValue * +currentPriceValue;
            totalPrice.textContent = `Итого ${totalPriceNumber}`
        }
        else{
            totalPrice.textContent = '';
        }
    }
};
counter();