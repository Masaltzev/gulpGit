let tds = $('.myTable td')
// console.log(tds);
for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click', function () {
        tds[i].innerHTML = i + 1;
    });
}